"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const file_route_1 = require("../modules/FileUpload/file.route");
const pdf_route_1 = require("../modules/pdf/pdf.route");
const auth_routes_1 = require("../modules/Auth/auth.routes");
const personalnfo_route_1 = require("../modules/personalInfo/personalnfo.route");
const gurdian_route_1 = require("../modules/GurdianInfo/gurdian.route");
const educational_route_1 = require("../modules/educationalInfo/educational.route");
const address_route_1 = require("../modules/address/address.route");
const otherinfo_route_1 = require("../modules/otherInfo/otherinfo.route");
const getalldata_route_1 = require("../modules/getAlldata/getalldata.route");
const approved_route_1 = require("../modules/approved/approved.route");
const documents_route_1 = require("../modules/documents/documents.route");
const excel_route_1 = require("../modules/excelFile/excel.route");
const googleDrive_route_1 = require("../modules/googleDrive/googleDrive.route");
const notices_route_1 = require("../modules/notices/notices.route");
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
        path: '/excel',
        route: excel_route_1.ExcelRoute
    },
    {
        path: '/pdf',
        route: pdf_route_1.PdfRoutes
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes
    },
    {
        path: '/info',
        route: personalnfo_route_1.PersonalInfoRoutes
    },
    {
        path: '/info',
        route: gurdian_route_1.GuardianRoutes
    },
    {
        path: '/info',
        route: educational_route_1.EducationalRoutes
    },
    {
        path: '/info',
        route: address_route_1.AddressRoutes
    },
    {
        path: '/info',
        route: otherinfo_route_1.OthersInfoRoutes
    },
    {
        path: '/info',
        route: getalldata_route_1.AllDataRoutes
    },
    {
        path: '/info',
        route: approved_route_1.ApprovedRoutes
    },
    {
        path: '/info',
        route: documents_route_1.DocumentsRoutes
    },
    {
        path: '/google',
        route: googleDrive_route_1.GoogleDriveRoutes
    },
    {
        path: '/exam-notice',
        route: notices_route_1.ExamRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map