import express from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middlewares/auth";

const router = express.Router();



router.post("/register",auth("ADMIN"),AuthController.registerUser);

router.post("/login", AuthController.loginUser);

router.post("/refresh-token", AuthController.refreshToken);

router.post("/status", AuthController.toggleUserStatus);



export const AuthRoutes = router;

