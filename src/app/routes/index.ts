import express from 'express';
import { userRoute } from '../modules/User/user.routes';
import { fileRoute } from '../modules/FileUpload/file.route';
import { PdfRoutes } from '../modules/pdf/pdf.route';
import { AuthRoutes } from '../modules/Auth/auth.routes';
import { PersonalInfoRoutes } from '../modules/personalInfo/personalnfo.route';
import { GuardianRoutes } from '../modules/GurdianInfo/gurdian.route';
import { EducationalRoutes } from '../modules/educationalInfo/educational.route';
import { AddressRoutes } from '../modules/address/address.route';
import { OthersInfoRoutes } from '../modules/otherInfo/otherinfo.route';
import { AllDataRoutes } from '../modules/getAlldata/getalldata.route';
import { ApprovedRoutes } from '../modules/approved/approved.route';
import { DocumentsRoutes } from '../modules/documents/documents.route';
import { ExcelRoute } from '../modules/excelFile/excel.route';
import { GoogleDriveRoutes } from '../modules/googleDrive/googleDrive.route';
import { ExamRoutes } from '../modules/notices/notices.route';
import { OthersAnnouncementRoutes } from '../modules/othersNotice/otherNotice.route';
import { deparmentStatusRoutes } from '../modules/departmentStatus/departmentStatus.route';

const router = express.Router();


const moduleRoutes = [
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/file',
        route: fileRoute
    },
    {
        path: '/excel',
        route: ExcelRoute
    },
    {
        path: '/pdf',
        route: PdfRoutes
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/info',
        route: PersonalInfoRoutes
    },
    {
        path: '/info',
        route: GuardianRoutes 
    },
    {
        path: '/info',
        route: EducationalRoutes 
    },
    {
        path: '/info',
        route: AddressRoutes 
    },
    {
        path: '/info',
        route: OthersInfoRoutes  
    },
    {
        path: '/info',
        route: AllDataRoutes  
    },
    {
        path: '/info',
        route: ApprovedRoutes  
    },
    {
        path: '/info',
        route: DocumentsRoutes  
    },
    {
        path: '/google',
        route: GoogleDriveRoutes  
    },
    {
        path: '/exam-notice',
        route: ExamRoutes  
    },
    {
        path: '/others-notice',
        route: OthersAnnouncementRoutes  
    },
    {
        path: '/department-status',
        route: deparmentStatusRoutes  
    },
];



moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;
