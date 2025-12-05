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
const uploadExcelFile = async (file) => {
    if (!file)
        throw new Error("No file provided");
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
    await prisma_1.default.$transaction(async (tx) => {
        for (let i = 0; i < Users.length; i++) {
            const userRow = Users[i];
            const personalInfoRow = PersonalInfos[i];
            const eduRow = EducationalInfos[i];
            const hscSummaryRow = HscSummaries[i];
            const hscMarksRow = HscMarksList[i];
            const rawResultRow = RawResults[i];
            const omrResultRow = OmrResults[i];
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
                    unit: userRow.unit ?? "A",
                    faculty: null,
                    status: client_1.UserStatus.ACTIVE,
                    role: client_1.UserRole.STUDENTS,
                },
            });
            await tx.personalInfo.upsert({
                where: { gstApplicationId: personalInfoRow.gstApplicationId },
                create: {
                    gstApplicationId: personalInfoRow.gstApplicationId,
                    Name: personalInfoRow.Name ?? null,
                    Father: personalInfoRow.Father ?? null,
                    Mother: personalInfoRow.Mother ?? null,
                    Dob: personalInfoRow.Dob ?? null,
                    Gender: personalInfoRow.Gender ?? null,
                },
                update: {
                    Name: personalInfoRow.Name ?? null,
                    Father: personalInfoRow.Father ?? null,
                    Mother: personalInfoRow.Mother ?? null,
                    Dob: personalInfoRow.Dob ?? null,
                    Gender: personalInfoRow.Gender ?? null,
                },
            });
            await tx.educationalInfo.upsert({
                where: { gstApplicationId: eduRow.gstApplicationId },
                create: {
                    gstApplicationId: eduRow.gstApplicationId,
                    SSCBoard: eduRow.SSCBoard ?? null,
                    SSCYear: eduRow.SSCYear ?? null,
                    SSCRoll: eduRow.SSCRoll ?? null,
                    SSCGpa: eduRow.SSCGpa ?? null,
                    HSCBoard: eduRow.HSCBoard ?? null,
                    HSCYear: eduRow.HSCYear ?? null,
                    HSCRoll: eduRow.HSCRoll ?? null,
                    HSCGpa: eduRow.HSCGpa ?? null,
                    HSCSubject: eduRow.HSCSubject ?? null,
                    SSCSubject: eduRow.SSCSubject ?? null,
                },
                update: {
                    SSCBoard: eduRow.SSCBoard ?? null,
                    SSCYear: eduRow.SSCYear ?? null,
                    SSCRoll: eduRow.SSCRoll ?? null,
                    SSCGpa: eduRow.SSCGpa ?? null,
                    HSCBoard: eduRow.HSCBoard ?? null,
                    HSCYear: eduRow.HSCYear ?? null,
                    HSCRoll: eduRow.HSCRoll ?? null,
                    HSCGpa: eduRow.HSCGpa ?? null,
                    HSCSubject: eduRow.HSCSubject ?? null,
                    SSCSubject: eduRow.SSCSubject ?? null,
                },
            });
            await tx.hscSummary.upsert({
                where: { gstApplicationId: hscSummaryRow.gstApplicationId },
                create: {
                    gstApplicationId: hscSummaryRow.gstApplicationId,
                    HscExamName: hscSummaryRow.HscExamName ?? null,
                    HscStudyGroup: hscSummaryRow.HscStudyGroup ?? null,
                    HscStudyType: hscSummaryRow.HscStudyType ?? null,
                    HscTotalObtained: hscSummaryRow.HscTotalObtained ?? null,
                    HscFullMarks: hscSummaryRow.HscFullMarks ?? null,
                    HscConverted1000: hscSummaryRow.HscConverted1000 ?? null,
                },
                update: {
                    HscExamName: hscSummaryRow.HscExamName ?? null,
                    HscStudyGroup: hscSummaryRow.HscStudyGroup ?? null,
                    HscStudyType: hscSummaryRow.HscStudyType ?? null,
                    HscTotalObtained: hscSummaryRow.HscTotalObtained ?? null,
                    HscFullMarks: hscSummaryRow.HscFullMarks ?? null,
                    HscConverted1000: hscSummaryRow.HscConverted1000 ?? null,
                },
            });
            await tx.hscMarks.upsert({
                where: { gstApplicationId: hscMarksRow.gstApplicationId },
                create: {
                    gstApplicationId: hscMarksRow.gstApplicationId,
                    BanglaLG: hscMarksRow.BanglaLG ?? null,
                    BanglaGP: hscMarksRow.BanglaGP ?? null,
                    BanglaMarks: hscMarksRow.BanglaMarks ?? null,
                    EnglishLG: hscMarksRow.EnglishLG ?? null,
                    EnglishGP: hscMarksRow.EnglishGP ?? null,
                    EnglishMarks: hscMarksRow.EnglishMarks ?? null,
                    PhysicsLG: hscMarksRow.PhysicsLG ?? null,
                    PhysicsGP: hscMarksRow.PhysicsGP ?? null,
                    PhysicsMarks: hscMarksRow.PhysicsMarks ?? null,
                    ChemistryLG: hscMarksRow.ChemistryLG ?? null,
                    ChemistryGP: hscMarksRow.ChemistryGP ?? null,
                    ChemistryMarks: hscMarksRow.ChemistryMarks ?? null,
                    MathLG: hscMarksRow.MathLG ?? null,
                    MathGP: hscMarksRow.MathGP ?? null,
                    MathMarks: hscMarksRow.MathMarks ?? null,
                    BiologyLG: hscMarksRow.BiologyLG ?? null,
                    BiologyGP: hscMarksRow.BiologyGP ?? null,
                    BiologyMarks: hscMarksRow.BiologyMarks ?? null,
                },
                update: {
                    BanglaLG: hscMarksRow.BanglaLG ?? null,
                    BanglaGP: hscMarksRow.BanglaGP ?? null,
                    BanglaMarks: hscMarksRow.BanglaMarks ?? null,
                    EnglishLG: hscMarksRow.EnglishLG ?? null,
                    EnglishGP: hscMarksRow.EnglishGP ?? null,
                    EnglishMarks: hscMarksRow.EnglishMarks ?? null,
                    PhysicsLG: hscMarksRow.PhysicsLG ?? null,
                    PhysicsGP: hscMarksRow.PhysicsGP ?? null,
                    PhysicsMarks: hscMarksRow.PhysicsMarks ?? null,
                    ChemistryLG: hscMarksRow.ChemistryLG ?? null,
                    ChemistryGP: hscMarksRow.ChemistryGP ?? null,
                    ChemistryMarks: hscMarksRow.ChemistryMarks ?? null,
                    MathLG: hscMarksRow.MathLG ?? null,
                    MathGP: hscMarksRow.MathGP ?? null,
                    MathMarks: hscMarksRow.MathMarks ?? null,
                    BiologyLG: hscMarksRow.BiologyLG ?? null,
                    BiologyGP: hscMarksRow.BiologyGP ?? null,
                    BiologyMarks: hscMarksRow.BiologyMarks ?? null,
                },
            });
            await tx.studentRawResults.upsert({
                where: { gstApplicationId: rawResultRow.gstApplicationId },
                create: {
                    gstApplicationId: rawResultRow.gstApplicationId,
                    HscMarksRaw: rawResultRow.HscMarksRaw ?? null,
                    HscLetterGradeRaw: rawResultRow.HscLetterGradeRaw ?? null,
                    SscLetterGradeRaw: rawResultRow.SscLetterGradeRaw ?? null,
                },
                update: {
                    HscMarksRaw: rawResultRow.HscMarksRaw ?? null,
                    HscLetterGradeRaw: rawResultRow.HscLetterGradeRaw ?? null,
                    SscLetterGradeRaw: rawResultRow.SscLetterGradeRaw ?? null,
                },
            });
            await tx.omrResult.upsert({
                where: { gstApplicationId: omrResultRow.gstApplicationId },
                create: {
                    gstApplicationId: omrResultRow.gstApplicationId,
                    OmrPhysics: omrResultRow.OmrPhysics ?? null,
                    OmrChemistry: omrResultRow.OmrChemistry ?? null,
                    OmrMath: omrResultRow.OmrMath ?? null,
                    OmrBiology: omrResultRow.OmrBiology ?? null,
                    OmrBangla: omrResultRow.OmrBangla ?? null,
                    OmrEnglish: omrResultRow.OmrEnglish ?? null,
                    OmrTotal: omrResultRow.OmrTotal ?? null,
                    OmrStatus: omrResultRow.OmrStatus ?? null,
                    Position: omrResultRow.Position ?? null,
                },
                update: {
                    OmrPhysics: omrResultRow.OmrPhysics ?? null,
                    OmrChemistry: omrResultRow.OmrChemistry ?? null,
                    OmrMath: omrResultRow.OmrMath ?? null,
                    OmrBiology: omrResultRow.OmrBiology ?? null,
                    OmrBangla: omrResultRow.OmrBangla ?? null,
                    OmrEnglish: omrResultRow.OmrEnglish ?? null,
                    OmrTotal: omrResultRow.OmrTotal ?? null,
                    OmrStatus: omrResultRow.OmrStatus ?? null,
                    Position: omrResultRow.Position ?? null,
                },
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
        }
    });
    return tableData;
};
exports.ExcelService = {
    uploadExcelFile,
};
//# sourceMappingURL=excel.services.js.map