
import { Router } from "express";
import { ComplainController } from "./complain.controller";

const router = Router();


router.post("/complains", ComplainController.createComplain);


router.put("/complains/:gstApplicationId", ComplainController.updateComplainStatus);


router.get("/complains", ComplainController.getComplains);

export const ComplainRoutes = router;
