import express from 'express';

import multer from 'multer';
import { FileController } from './excel.controller';
import auth from '../../middlewares/auth';


const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/file', auth("ADMIN"),upload.single('file'), FileController.uploadFile);

export const ExcelRoute = router;
