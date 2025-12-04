"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersInfoRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const otherinfo_validation_1 = require("./otherinfo.validation");
const otherinfo_controller_1 = require("./otherinfo.controller");
const router = (0, express_1.Router)();
router.post("/othersInfo", (0, validateRequest_1.default)(otherinfo_validation_1.othersInfoSchema), otherinfo_controller_1.OthersInfoController.upsertOthersInfo);
exports.OthersInfoRoutes = router;
//# sourceMappingURL=otherinfo.route.js.map