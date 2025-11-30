"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const file_route_1 = require("../modules/FileUpload/file.route");
const pdf_route_1 = require("../modules/pdf/pdf.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: user_routes_1.userRoute
    },
    {
        path: '/file',
        route: file_route_1.fileRoute
    },
    {
        path: '/pdf',
        route: pdf_route_1.PdfRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map