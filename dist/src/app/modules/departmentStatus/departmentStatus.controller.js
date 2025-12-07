"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentControllertController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const departmentStatus_services_1 = require("./departmentStatus.services");
exports.DepartmentControllertController = {
    getAll: (0, catchAsync_1.default)(async (_req, res) => {
        const data = await departmentStatus_services_1.DeparmtentStatusServices.getAll();
        return (0, sendResponse_1.default)(res, {
            status: 200,
            success: true,
            message: "Department Status",
            data,
        });
    }),
};
//# sourceMappingURL=departmentStatus.controller.js.map