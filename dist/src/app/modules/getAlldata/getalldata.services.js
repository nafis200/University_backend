"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const client_1 = require("@prisma/client");
const paginationHelper_1 = require("../../../helpars/paginationHelper");
const getUsersWithFilters = async (params, options) => {
    const { page, limit, skip } = paginationHelper_1.paginationHelper.calculatePagination(options);
    const { searchTerm, department, notDepartment, unit, role, excludeRole, adminApproved, facultyApproved, deanApproved, registerApproved, hallRegisterApproved, medicalApproved } = params;
    const andConditions = [];
    // Search
    if (searchTerm) {
        andConditions.push({
            gstApplicationId: {
                contains: searchTerm,
                mode: "insensitive",
            },
        });
    }
    if (department && department.toLowerCase() !== "all") {
        andConditions.push({
            OthersInfo: { Department: { contains: department, mode: "insensitive" } },
        });
    }
    if (notDepartment === "not-null") {
        andConditions.push({
            OthersInfo: {
                is: {
                    Department: {
                        not: null,
                    },
                },
            },
        });
    }
    if (notDepartment === "null") {
        andConditions.push({
            OthersInfo: {
                is: {
                    Department: null,
                },
            },
        });
    }
    if (unit && unit.toLowerCase() !== "all") {
        andConditions.push({ unit });
    }
    if (role) {
        const roleEnum = client_1.UserRole[role.toUpperCase()];
        andConditions.push({ role: roleEnum });
    }
    if (excludeRole) {
        const excludeRoleEnum = client_1.UserRole[excludeRole.toUpperCase()];
        andConditions.push({ role: { not: excludeRoleEnum } });
    }
    // Approval filters
    const parseBooleanStrict = (v) => {
        if (v === true || v === false)
            return v;
        if (typeof v === "string") {
            const clean = v.trim();
            if (clean === "true")
                return true;
            if (clean === "false")
                return false;
        }
        return undefined;
    };
    const approvalWhere = {};
    const adminVal = parseBooleanStrict(adminApproved);
    if (adminVal !== undefined)
        approvalWhere.adminApproved = { equals: adminVal };
    const facultyVal = parseBooleanStrict(facultyApproved);
    if (facultyVal !== undefined)
        approvalWhere.facultyApproved = { equals: facultyVal };
    const deanVal = parseBooleanStrict(deanApproved);
    if (deanVal !== undefined)
        approvalWhere.deanApproved = { equals: deanVal };
    const regVal = parseBooleanStrict(registerApproved);
    if (regVal !== undefined)
        approvalWhere.registerApproved = { equals: regVal };
    const hallVal = parseBooleanStrict(hallRegisterApproved);
    if (hallVal !== undefined)
        approvalWhere.hallRegisterApproved = { equals: hallVal };
    const medicalVal = parseBooleanStrict(medicalApproved);
    if (medicalVal !== undefined) {
        approvalWhere.medicalApproved = { equals: medicalVal };
    }
    if (Object.keys(approvalWhere).length > 0) {
        andConditions.push({ Approved: approvalWhere });
    }
    const whereConditions = { AND: andConditions };
    const data = await prisma_1.default.user.findMany({
        where: whereConditions,
        include: {
            personalInfo: true,
            Guardian: true,
            Address: true,
            EducationalInfo: true,
            OthersInfo: true,
            Approved: true,
            Document: true,
            HscMarks: true,
            HscSummary: true,
            StudentRawResults: true,
            OmrResult: true,
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
    });
    const total = await prisma_1.default.user.count({ where: whereConditions });
    return { meta: { page, limit, total }, data };
};
exports.UserServices = { getUsersWithFilters };
//# sourceMappingURL=getalldata.services.js.map