import express from "express";
import { DepartmentControllertController } from "./departmentStatus.controller";



const router = express.Router();


router.get("/", DepartmentControllertController.getAll);


export const deparmentStatusRoutes = router;
