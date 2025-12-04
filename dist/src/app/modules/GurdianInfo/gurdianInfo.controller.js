"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const gurdian_services_1 = require("./gurdian.services");
const upsertGuardian = (0, catchAsync_1.default)(async (req, res) => {
    const result = await gurdian_services_1.GuardianServices.Guardian(req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Guardian information saved successfully!",
        data: result.data,
    });
});
exports.GuardianController = {
    upsertGuardian,
};
//# sourceMappingURL=gurdianInfo.controller.js.map