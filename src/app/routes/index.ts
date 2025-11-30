import express from 'express';
import { userRoute } from '../modules/User/user.routes';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { fileRoute } from '../modules/FileUpload/file.route';
import { PdfRoutes } from '../modules/pdf/pdf.route';

const router = express.Router();


const moduleRoutes = [
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/admin',
        route: AdminRoutes
    },
    {
        path: '/file',
        route: fileRoute
    },
    {
        path: '/pdf',
        route: PdfRoutes
    },
];



moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;
