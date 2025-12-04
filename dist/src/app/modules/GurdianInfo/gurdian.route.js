"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const gurdian_validation_1 = require("./gurdian.validation");
const gurdianInfo_controller_1 = require("./gurdianInfo.controller");
const router = (0, express_1.Router)();
router.post("/guardian", (0, validateRequest_1.default)(gurdian_validation_1.guardianSchema), gurdianInfo_controller_1.GuardianController.upsertGuardian);
exports.GuardianRoutes = router;
//# sourceMappingURL=gurdian.route.js.map