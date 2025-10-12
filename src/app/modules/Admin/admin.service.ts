import { Prisma } from "@prisma/client";
import { calculatePagination } from "../../helpers/paginationHelper";
import { prisma } from "../../../shared/prisma";

// const prisma = new PrismaClient();


// const calculatePagination = (options?:{
//   page?:number,
//   limit?:number,
//   sortBy?:string,
//   sortOrder?:string
// }) =>{

//    const page :number = Number(options?.page) || 1
//    const limit: number = Number(options?.limit) || 10;
//    const skip: number = (page - 1) * limit;
//    const sortBy: string = options?.sortBy || 'createdAt'
//    const sortOrder:string = options?.sortOrder || 'desc'

//    return{
//     page, limit, skip, sortBy,sortOrder
//    }
// }


const getAllFromDB = async (params: any, options:any) => {
  const addConditions: Prisma.AdminWhereInput[] = [];

  const { searchTerm ,...filterData} = params;

  const {page,limit,skip,sortBy,sortOrder} = calculatePagination(options)

  // console.log(page,limit)

  const searchableField = ["name", "email"];

  if (searchTerm) {
    addConditions.push({
      OR: searchableField.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // console.log(filterData)

  // console.log(Object.keys(filterData))

  if (Object.keys(filterData).length > 0) {
    addConditions.push({
      AND: Object.keys(filterData).map((field) => ({
        [field]: {
          equals: filterData[field],
        },
      })),
    });
  }

  //  addConditions.push({
  //     OR: [
  //       {
  //         name: {
  //           contains: params.searchTerm,
  //           mode: "insensitive",
  //         },
  //       },
  //       {
  //         email: {
  //           contains: params.searchTerm,
  //            mode: "insensitive",
  //         },
  //       },
  //     ],
  //   });

  //  OR:['name','email'].map(field)=>({
  //         {
  //         [field]: {
  //           contains: params.searchTerm,
  //            mode: "insensitive",
  //         },
  //       },
  //  })

  // console.dir(addConditions, { depth: "infinity" });

  const whereConditions: Prisma.AdminWhereInput = {
    AND: addConditions,
  };

  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip,
    take:limit,
    orderBy: options.sortBy && options.sortOrder ? {
      [options.sortBy]:options.sortOrder
    } : {
       createdAt: 'desc'
    }
  });

  const total = await prisma.admin.count({
     where:whereConditions
  })
  return {
    meta:{
      page:page,
      limit:limit,
      total:total
    },
   data:result
  }
};

export const AdminService = {
  getAllFromDB,
};
