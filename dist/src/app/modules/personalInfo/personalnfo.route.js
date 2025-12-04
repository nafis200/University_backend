"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInfoRoutes = void 0;
const express_1 = require("express");
const personalInfo_controller_1 = require("./personalInfo.controller");
const personalInfo_validation_1 = require("./personalInfo.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.post("/personalInfo", (0, validateRequest_1.default)(personalInfo_validation_1.personalInfoSchema), personalInfo_controller_1.PersonalInfoController.upsertPersonalInfo);
exports.PersonalInfoRoutes = router;
//# sourceMappingURL=personalnfo.route.js.map