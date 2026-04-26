"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelService = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const xlsx_1 = __importDefault(require("xlsx"));
const excelDataParse_1 = require("./excelDataParse");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const parseExcelFile = async (filePath) => {
    const workbook = xlsx_1.default.readFile(filePath);
    const data = {};
    workbook.SheetNames.forEach((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        if (!sheet)
            return;
        const json = xlsx_1.default.utils.sheet_to_json(sheet, { defval: null });
        data[sheetName] = json;
    });
    return data;
};
const uploadExcelFile = async (file, applyEndDate) => {
    if (!file)
        throw new Error("No file provided");
    console.log("Parsing Excel file...");
    const tableData = await parseExcelFile(file.path);
    const Users = [];
    const PersonalInfos = [];
    const EducationalInfos = [];
    const HscSummaries = [];
    const HscMarksList = [];
    const RawResults = [];
    const OmrResults = [];
    for (const sheetName in tableData) {
        const rows = tableData[sheetName];
        if (!rows)
            continue;
        rows.forEach((row) => {
            const parts = (0, excelDataParse_1.splitExcelRow)(row);
            Users.push(parts.user);
            PersonalInfos.push(parts.personalInfo);
            EducationalInfos.push(parts.educationalInfo);
            HscSummaries.push(parts.hscSummary);
            HscMarksList.push(parts.hscMarks);
            RawResults.push(parts.rawResults);
            OmrResults.push(parts.omrResult);
        });
    }
    await promises_1.default.unlink(file.path);
    console.log(`Total rows to process: ${Users.length}`);
    const batchSize = 500;
    for (let i = 0; i < Users.length; i += batchSize) {
        const batchNumber = Math.floor(i / batchSize) + 1;
        console.log(`Processing batch ${batchNumber} (${i + 1} - ${Math.min(i + batchSize, Users.length)})...`);
        const batchUsers = Users.slice(i, i + batchSize);
        const batchPersonalInfos = PersonalInfos.slice(i, i + batchSize);
        const batchEducationalInfos = EducationalInfos.slice(i, i + batchSize);
        const batchHscSummaries = HscSummaries.slice(i, i + batchSize);
        const batchHscMarks = HscMarksList.slice(i, i + batchSize);
        const batchRawResults = RawResults.slice(i, i + batchSize);
        const batchOmrResults = OmrResults.slice(i, i + batchSize);
        try {
            await prisma_1.default.$transaction(async (tx) => {
                for (let j = 0; j < batchUsers.length; j++) {
                    const userRow = batchUsers[j];
                    const personalInfoRow = batchPersonalInfos[j];
                    const eduRow = batchEducationalInfos[j];
                    const hscSummaryRow = batchHscSummaries[j];
                    const hscMarksRow = batchHscMarks[j];
                    const rawResultRow = batchRawResults[j];
                    const omrResultRow = batchOmrResults[j];
                    const hashedPassword = await bcrypt.hash(userRow.password, 10);
                    await tx.user.upsert({
                        where: { gstApplicationId: userRow.gstApplicationId },
                        create: {
                            gstApplicationId: userRow.gstApplicationId,
                            password: hashedPassword,
                            unit: userRow.unit ?? "A",
                            faculty: null,
                            status: client_1.UserStatus.ACTIVE,
                            role: client_1.UserRole.STUDENTS,
                        },
                        update: {
                            password: hashedPassword,
                            faculty: null,
                            status: client_1.UserStatus.ACTIVE,
                            role: client_1.UserRole.STUDENTS,
                        },
                    });
                    await tx.personalInfo.upsert({
                        where: { gstApplicationId: personalInfoRow.gstApplicationId },
                        create: personalInfoRow,
                        update: personalInfoRow,
                    });
                    await tx.educationalInfo.upsert({
                        where: { gstApplicationId: eduRow.gstApplicationId },
                        create: eduRow,
                        update: eduRow,
                    });
                    await tx.hscSummary.upsert({
                        where: { gstApplicationId: hscSummaryRow.gstApplicationId },
                        create: hscSummaryRow,
                        update: hscSummaryRow,
                    });
                    await tx.hscMarks.upsert({
                        where: { gstApplicationId: hscMarksRow.gstApplicationId },
                        create: hscMarksRow,
                        update: hscMarksRow,
                    });
                    await tx.studentRawResults.upsert({
                        where: { gstApplicationId: rawResultRow.gstApplicationId },
                        create: rawResultRow,
                        update: rawResultRow,
                    });
                    await tx.omrResult.upsert({
                        where: { gstApplicationId: omrResultRow.gstApplicationId },
                        create: omrResultRow,
                        update: omrResultRow,
                    });
                    await tx.othersInfo.upsert({
                        where: { gstApplicationId: userRow.gstApplicationId },
                        create: { gstApplicationId: userRow.gstApplicationId },
                        update: {},
                    });
                    await tx.approved.upsert({
                        where: { gstApplicationId: userRow.gstApplicationId },
                        create: { gstApplicationId: userRow.gstApplicationId },
                        update: {},
                    });
                    await tx.document.upsert({
                        where: { gstApplicationId: userRow.gstApplicationId },
                        create: { gstApplicationId: userRow.gstApplicationId },
                        update: {},
                    });
                    await tx.dateApplication.upsert({
                        where: { gstApplicationId: userRow.gstApplicationId },
                        create: {
                            gstApplicationId: userRow.gstApplicationId,
                            applyEndDate: new Date(applyEndDate),
                        },
                        update: {
                            applyEndDate: new Date(applyEndDate),
                        },
                    });
                }
            }, { timeout: 300000 });
            console.log(`Batch ${batchNumber} completed successfully.`);
        }
        catch (error) {
            console.error(`Batch ${batchNumber} failed:`, error);
        }
    }
    console.log("All batches processed.");
    return tableData;
};
const getDateApplicationByGstApplicationId = async (gstApplicationId) => {
    const dateApplication = await prisma_1.default.dateApplication.findUnique({
        where: { gstApplicationId },
    });
    return dateApplication;
};
const updateDateApplicationByGstApplicationId = async (gstApplicationId, updateData) => {
    const updatedDateApplication = await prisma_1.default.dateApplication.update({
        where: { gstApplicationId },
        data: {
            ...updateData,
            status: false,
        },
    });
    return updatedDateApplication;
};
const updateDateApplicationStatus = async (gstApplicationId) => {
    try {
        const updatedDateApplication = await prisma_1.default.dateApplication.update({
            where: { gstApplicationId },
            data: {
                status: true,
            },
        });
        return updatedDateApplication;
    }
    catch (error) {
        console.error("Failed to update status:", error);
        return null;
    }
};
exports.ExcelService = {
    uploadExcelFile,
    getDateApplicationByGstApplicationId,
    updateDateApplicationByGstApplicationId,
    updateDateApplicationStatus
};
//# sourceMappingURL=excel.services.js.map