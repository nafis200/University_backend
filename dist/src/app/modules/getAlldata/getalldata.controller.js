"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDataController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const getalldata_services_1 = require("./getalldata.services");
const getUsersByUnit = (0, catchAsync_1.default)(async (req, res, next) => {
    const decodedUser = req.user;
    // const unit = decodedUser.unit;
    const unit = "all";
    const { searchTerm, department, page, limit, adminApproved, facultyApproved, deanApproved, registerApproved, hallRegisterApproved, } = req.query;
    const users = await getalldata_services_1.UserServices.getUsersWithFilters({
        searchTerm: searchTerm,
        department: department,
        unit,
        adminApproved: adminApproved,
        facultyApproved: facultyApproved,
        deanApproved: deanApproved,
        registerApproved: registerApproved,
        hallRegisterApproved: hallRegisterApproved,
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
exports.GetAllDataController = {
    getUsersByUnit,
};
//# sourceMappingURL=getalldata.controller.js.map