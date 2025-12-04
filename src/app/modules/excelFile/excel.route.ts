import express from 'express';

import multer from 'multer';
import { FileController } from './excel.controller';


const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/file', upload.single('file'), FileController.uploadFile);

export const ExcelRoute = router;
