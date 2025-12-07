"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deparmentStatusRoutes = void 0;
const express_1 = __importDefault(require("express"));
const departmentStatus_controller_1 = require("./departmentStatus.controller");
const router = express_1.default.Router();
router.get("/", departmentStatus_controller_1.DepartmentControllertController.getAll);
exports.deparmentStatusRoutes = router;
//# sourceMappingURL=departmentStatus.route.js.map