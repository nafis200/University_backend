import prisma from "../../../shared/prisma";
import { Prisma, UserRole } from "@prisma/client";
import type { IPaginationOptions } from "../../interfaces/pagination";
import { paginationHelper } from "../../../helpars/paginationHelper";

interface IUserFilterRequest {
  searchTerm?: string;
  department?: string;
  notDepartment?:string;
  unit?: string;
  adminApproved?: string | boolean;
  facultyApproved?: string | boolean;
  deanApproved?: string | boolean;
  registerApproved?: string | boolean;
  hallRegisterApproved?: string | boolean;
  medicalApproved?:string | boolean;
  role?: string;
  excludeRole?: string;
}

const getUsersWithFilters = async (
  params: IUserFilterRequest,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);

  const {
    searchTerm,
    department,
    notDepartment,
    unit,
    role,
    excludeRole,
    adminApproved,
    facultyApproved,
    deanApproved,
    registerApproved,
    hallRegisterApproved,
    medicalApproved
  } = params;

  

  const andConditions: Prisma.UserWhereInput[] = [];

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
    const roleEnum = UserRole[role.toUpperCase() as keyof typeof UserRole];
    andConditions.push({ role: roleEnum });
  }

  if (excludeRole) {
    const excludeRoleEnum =
      UserRole[excludeRole.toUpperCase() as keyof typeof UserRole];
    andConditions.push({ role: { not: excludeRoleEnum } });
  }

  // Approval filters
  const parseBooleanStrict = (v: string | boolean | undefined) => {
    if (v === true || v === false) return v;
    if (typeof v === "string") {
      const clean = v.trim();
      if (clean === "true") return true;
      if (clean === "false") return false;
    }
    return undefined;
  };

  const approvalWhere: Record<string, any> = {};
  const adminVal = parseBooleanStrict(adminApproved);
  if (adminVal !== undefined)
    approvalWhere.adminApproved = { equals: adminVal };
  const facultyVal = parseBooleanStrict(facultyApproved);
  if (facultyVal !== undefined)
    approvalWhere.facultyApproved = { equals: facultyVal };
  const deanVal = parseBooleanStrict(deanApproved);
  if (deanVal !== undefined) approvalWhere.deanApproved = { equals: deanVal };
  const regVal = parseBooleanStrict(registerApproved);
  if (regVal !== undefined) approvalWhere.registerApproved = { equals: regVal };
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

  const whereConditions: Prisma.UserWhereInput = { AND: andConditions };
 

 

  const data = await prisma.user.findMany({
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

  const total = await prisma.user.count({ where: whereConditions });

  return { meta: { page, limit, total }, data };
};

const deleteUserByGstApplicationId = async (gstApplicationId: string) => {
  return await prisma.$transaction(async (tx) => {
    await tx.personalInfo.deleteMany({ where: { gstApplicationId } });
    await tx.guardian.deleteMany({ where: { gstApplicationId } });
    await tx.address.deleteMany({ where: { gstApplicationId } });
    await tx.educationalInfo.deleteMany({ where: { gstApplicationId } });
    await tx.othersInfo.deleteMany({ where: { gstApplicationId } });
    await tx.approved.deleteMany({ where: { gstApplicationId } });
    await tx.document.deleteMany({ where: { gstApplicationId } });
    await tx.omrResult.deleteMany({ where: { gstApplicationId } });
    await tx.studentRawResults.deleteMany({ where: { gstApplicationId } });
    await tx.hscMarks.deleteMany({ where: { gstApplicationId } });
    await tx.hscSummary.deleteMany({ where: { gstApplicationId } });

 
    const user = await tx.user.delete({ where: { gstApplicationId } });
    return user;
  });
};


export const UserServices = { getUsersWithFilters,deleteUserByGstApplicationId };
