import { Router } from "express";
import { AddressController } from "./address.controller";
import { addressSchema } from "./address.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/address",
  validateRequest(addressSchema),
  AddressController.upsertAddress
);

export const AddressRoutes = router;
