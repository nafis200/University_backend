"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersInfoServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const departmentOptions = [
    { value: "Computer Science and Engineering", label: "Computer Science and Engineering", unit: "A" },
    { value: "Industrial and Production Engineering", label: "Industrial and Production Engineering", unit: "A" },
    { value: "Petroleum and Mining Engineering", label: "Petroleum and Mining Engineering", unit: "A" },
    { value: "Chemical Engineering", label: "Chemical Engineering", unit: "A" },
    { value: "Electrical and Electronic Engineering", label: "Electrical and Electronic Engineering", unit: "A" },
    { value: "Biomedical Engineering", label: "Biomedical Engineering", unit: "A" },
    { value: "Textile Engineering", label: "Textile Engineering", unit: "A" },
    { value: "Microbiology", label: "Microbiology", unit: "B" },
    { value: "Fisheries and Marine Bioscience", label: "Fisheries and Marine Bioscience", unit: "B" },
    { value: "Genetic Engineering and Biotechnology", label: "Genetic Engineering and Biotechnology", unit: "B" },
    { value: "Pharmacy", label: "Pharmacy", unit: "B" },
    { value: "Biochemistry and Molecular Biology", label: "Biochemistry and Molecular Biology", unit: "B" },
    { value: "Environmental Science and Technology", label: "Environmental Science and Technology", unit: "C" },
    { value: "Nutrition and Food Technology", label: "Nutrition and Food Technology", unit: "C" },
    { value: "Food Engineering (Former Agro Product Processing Technology)", label: "Food Engineering (Former Agro Product Processing Technology)", unit: "C" },
    { value: "Climate and Disaster Management", label: "Climate and Disaster Management", unit: "C" },
    { value: "Physical Education and Sports Science", label: "Physical Education and Sports Science", unit: "D" },
    { value: "Physiotherapy and Rehabilitation", label: "Physiotherapy and Rehabilitation", unit: "D" },
    { value: "Nursing and Health Science", label: "Nursing and Health Science", unit: "D" },
    { value: "English", label: "English", unit: "E" },
    { value: "Physics", label: "Physics", unit: "F" },
    { value: "Chemistry", label: "Chemistry", unit: "F" },
    { value: "Mathematics", label: "Mathematics", unit: "F" },
    { value: "Applied Statistics and Data Science", label: "Applied Statistics and Data Science", unit: "F" },
    { value: "Accounting and Information Systems", label: "Accounting and Information Systems", unit: "G" },
    { value: "Management", label: "Management", unit: "G" },
    { value: "Finance and Banking", label: "Finance and Banking", unit: "G" },
    { value: "Marketing", label: "Marketing", unit: "G" },
    { value: "Medicine, Surgery and Theriogenology", label: "Medicine, Surgery and Theriogenology", unit: "H" },
    { value: "Microbiology and Hygiene", label: "Microbiology and Hygiene", unit: "H" },
    { value: "Anatomy and Histology", label: "Anatomy and Histology", unit: "H" },
    { value: "Pharmacology", label: "Pharmacology", unit: "H" },
    { value: "Physiology and Biochemistry", label: "Physiology and Biochemistry", unit: "H" },
    { value: "Animal Breeding and Genetics", label: "Animal Breeding and Genetics", unit: "H" },
    { value: "Dairy and Poultry Science", label: "Dairy and Poultry Science", unit: "H" },
    { value: "Pathology and Parasitology", label: "Pathology and Parasitology", unit: "H" },
    { value: "Animal Science and Nutrition", label: "Animal Science and Nutrition", unit: "H" },
    { value: "Agricultural Economics", label: "Agricultural Economics", unit: "H" },
];
const upsertOthersInfo = async (payload) => {
    const data = payload;
    // Check if user exists
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    const updateData = Object.fromEntries(Object.entries({
        Department: data.Department,
        Program: data.Program,
        HallName: data.HallName,
        StudyBreakCause: data.StudyBreakCause,
        AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution,
        ApplicantEmployment: data.ApplicantEmployment,
        Scholarships: data.Scholarships,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.othersInfo.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            Department: data.Department ?? null,
            Program: data.Program ?? null,
            HallName: data.HallName ?? null,
            StudyBreakCause: data.StudyBreakCause ?? null,
            AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution ?? null,
            ApplicantEmployment: data.ApplicantEmployment ?? null,
            Scholarships: data.Scholarships ?? null,
        },
    });
    if (data.Department) {
        const matchedDept = departmentOptions.find((d) => d.value === data.Department);
        if (matchedDept) {
            await prisma_1.default.user.update({
                where: { gstApplicationId: data.gstApplicationId },
                data: { unit: matchedDept.unit },
            });
        }
    }
    return {
        message: "Others information saved successfully!",
        data: result,
    };
};
exports.OthersInfoServices = {
    upsertOthersInfo,
};
//# sourceMappingURL=otherinfo.services.js.map