import express from 'express';

import multer from 'multer';
import { FileController } from './file.controller';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), FileController.uploadFile);

export const fileRoute = router;
