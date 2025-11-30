// import type { Request, Response } from "express";
// import { AdminService } from "./admin.service";
// import { pick } from "../../../shared/pick";

// // const pick = <T extends Record<string, unknown>, K extends keyof T>(
// //   obj: T,
// //   keys: K[]
// // ): Partial<T> => {
// //   // console.log(obj,keys)
// //   const finalObj: Partial<T> = {};

// //   for (const key of keys) {
// //     if (obj && Object.hasOwnProperty.call(obj, key)) {
// //       finalObj[key] = obj[key];
// //     }
// //   }
// //   return finalObj;
// // };

// const getAllfromDB = async (req: Request, res: Response) => {
//   try {
//     const filterQuery = pick(req.query, ["name", "email", "searchTerm",]);
//     const options = pick(req.query,["page","limit","sortBy","sortOrder"])
//     const result = await AdminService.getAllFromDB(filterQuery,options);
//     res.status(200).json({
//       sucess: true,
//       message: "Admin data fetch",
//       meta:result.meta,
//       data: result.data,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err?.name || "Something went wrong",
//       error: err,
//     });
//   }
// };

// export const AdminController = {
//   getAllfromDB,
// };
