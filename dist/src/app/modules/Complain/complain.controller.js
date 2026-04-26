"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const complain_services_1 = require("./complain.services");
const createComplain = (0, catchAsync_1.default)(async (req, res) => {
    const result = await complain_services_1.ComplainServices.createComplain(req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.CREATED,
        success: true,
        message: result.message,
        data: result.data,
    });
});
const updateComplainStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    const result = await complain_services_1.ComplainServices.updateComplainStatus(gstApplicationId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: result.message,
        data: result.data,
    });
});
const getComplains = (0, catchAsync_1.default)(async (req, res) => {
    const { searchTerm, status } = req.query;
    const result = await complain_services_1.ComplainServices.getComplains({
        searchTerm: searchTerm,
        status: status === "true",
    });
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: result.message,
        data: result.data,
    });
});
exports.ComplainController = {
    createComplain,
    updateComplainStatus,
    getComplains,
};
//# sourceMappingURL=complain.controller.js.map