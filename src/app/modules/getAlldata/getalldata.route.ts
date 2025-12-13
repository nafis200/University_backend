import { Router } from "express";
import { deleteUser, getUsersByUnit } from "./getalldata.controller";



const router = Router();

router.get("/fetch", getUsersByUnit);
router.delete("/delete/:gstApplicationId", deleteUser);

export const AllDataRoutes = router;


// GET http://localhost:3000/api/info/fetch?excludeRole=STUDENTS&page=1&limit=10

// GET http://localhost:3000/api/info/fetch?role=STUDENTS&page=1&limit=10

// http://localhost:5000/api/info/fetch?role=STUDENTS&department=computer Science&notDepartment=not-null
// http://localhost:5000/api/info/fetch?role=STUDENTS&notDepartment=null

