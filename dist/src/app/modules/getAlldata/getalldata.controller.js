"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsersByUnit = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const getalldata_services_1 = require("./getalldata.services");
exports.getUsersByUnit = (0, catchAsync_1.default)(async (req, res, next) => {
    const decodedUser = req.user;
    const { searchTerm, department, notDepartment, page, limit, adminApproved, facultyApproved, deanApproved, registerApproved, hallRegisterApproved, medicalApproved, role, unit, excludeRole, } = req.query;
    const users = await getalldata_services_1.UserServices.getUsersWithFilters({
        searchTerm: searchTerm,
        department: department,
        notDepartment: notDepartment,
        unit: unit,
        adminApproved: adminApproved,
        facultyApproved: facultyApproved,
        deanApproved: deanApproved,
        registerApproved: registerApproved,
        hallRegisterApproved: hallRegisterApproved,
        medicalApproved: medicalApproved,
        role: role,
        excludeRole: excludeRole,
    }, {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 100,
    });
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: `Users fetched for unit ${unit}`,
        data: users,
    });
});
exports.deleteUser = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    if (!gstApplicationId) {
        return (0, sendResponse_1.default)(res, {
            status: 400,
            success: false,
            message: "gstApplicationId is required",
        });
    }
    const data = await getalldata_services_1.UserServices.deleteUserByGstApplicationId(gstApplicationId);
    (0, sendResponse_1.default)(res, {
        status: 200,
        success: true,
        message: "User deleted successfully",
        data,
    });
});
//# sourceMappingURL=getalldata.controller.js.map