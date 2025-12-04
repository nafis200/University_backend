"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRoutes = void 0;
const express_1 = require("express");
const address_controller_1 = require("./address.controller");
const address_validation_1 = require("./address.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.post("/address", (0, validateRequest_1.default)(address_validation_1.addressSchema), address_controller_1.AddressController.upsertAddress);
exports.AddressRoutes = router;
//# sourceMappingURL=address.route.js.map