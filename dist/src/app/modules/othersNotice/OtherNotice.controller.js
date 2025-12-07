"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersAnnouncementController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const OtherNotice_services_1 = require("./OtherNotice.services");
exports.OthersAnnouncementController = {
    create: (0, catchAsync_1.default)(async (req, res) => {
        const data = await OtherNotice_services_1.OthersAnnouncementServices.create(req.body);
        return (0, sendResponse_1.default)(res, {
            status: 200,
            success: true,
            message: "Others Announcement created",
            data,
        });
    }),
    getAll: (0, catchAsync_1.default)(async (_req, res) => {
        const data = await OtherNotice_services_1.OthersAnnouncementServices.getAll();
        return (0, sendResponse_1.default)(res, {
            status: 200,
            success: true,
            message: "Others Announcements fetched",
            data,
        });
    }),
    delete: (0, catchAsync_1.default)(async (req, res) => {
        const { id } = req.params;
        if (!id) {
            return (0, sendResponse_1.default)(res, {
                status: 400,
                success: false,
                message: "ID is required",
            });
        }
        const data = await OtherNotice_services_1.OthersAnnouncementServices.delete(id);
        return (0, sendResponse_1.default)(res, {
            status: 200,
            success: true,
            message: "Others Announcement deleted",
            data,
        });
    }),
};
//# sourceMappingURL=OtherNotice.controller.js.map