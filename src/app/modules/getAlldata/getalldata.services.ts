
// http://localhost:3000/api/info/fetch?searchTerm=password&department=computer&page=1&limit=10&adminApproved=true


import prisma from "../../../shared/prisma";
import { Prisma } from "@prisma/client";
import type { IPaginationOptions } from "../../interfaces/pagination";
import { paginationHelper } from "../../../helpars/paginationHelper";

interface IUserFilterRequest {
  searchTerm?: string;
  department?: string;
  unit?: string;

  adminApproved?: string | boolean;
  facultyApproved?: string | boolean;
  deanApproved?: string | boolean;
  registerApproved?: string | boolean;
  hallRegisterApproved?: string | boolean;
}

const getUsersWithFilters = async (
  params: IUserFilterRequest,
  options: IPaginationOptions
) => {


  const { page, limit, skip } = paginationHelper.calculatePagination(options);

  const {
    searchTerm,
    department,
    unit,

    adminApproved,
    facultyApproved,
    deanApproved,
    registerApproved,
    hallRegisterApproved,
  } = params;



  const andConditions: Prisma.UserWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      gstApplicationId: {
        contains: searchTerm,
        mode: "insensitive",
      },
    });
  }

  if (department) {
    andConditions.push({
      OthersInfo: {
        Department: { contains: department, mode: "insensitive" },
      },
    });
  }

  if (unit && unit.toLowerCase() !== "all") {
    andConditions.push({ unit });
  }

  const parseBooleanStrict = (
    v: string | boolean | undefined
  ): boolean | undefined => {
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

  if (Object.keys(approvalWhere).length > 0) {
    andConditions.push({
      Approved: approvalWhere,
    });
  }

  

  andConditions.push({ status: "ACTIVE" });

  const whereConditions: Prisma.UserWhereInput = { AND: andConditions };

  console.log(whereConditions)

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
      HscMarks:true,
      HscSummary:true,
      StudentRawResults:true,
      OmrResult:true
    },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.user.count({ where: whereConditions });

  return {
    meta: { page, limit, total },
    data,
  };
};

export const UserServices = {
  getUsersWithFilters,
};
