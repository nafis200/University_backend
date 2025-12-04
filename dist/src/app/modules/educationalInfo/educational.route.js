"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalRoutes = void 0;
const express_1 = require("express");
const educational_controller_1 = require("./educational.controller");
const educational_validation_1 = require("./educational.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.post("/educational", (0, validateRequest_1.default)(educational_validation_1.educationalSchema), educational_controller_1.EducationalController.upsertEducationalInfo);
exports.EducationalRoutes = router;
//# sourceMappingURL=educational.route.js.map