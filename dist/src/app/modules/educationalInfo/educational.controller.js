"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const educational_services_1 = require("./educational.services");
const upsertEducationalInfo = (0, catchAsync_1.default)(async (req, res) => {
    const result = await educational_services_1.EducationalServices.upsertEducationalInfo(req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Educational information saved successfully!",
        data: result.data,
    });
});
exports.EducationalController = {
    upsertEducationalInfo,
};
//# sourceMappingURL=educational.controller.js.map