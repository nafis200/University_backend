import express from 'express';

import multer from 'multer';
import { FileController } from './excel.controller';
import auth from '../../middlewares/auth';


const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/file',upload.single('file'), FileController.uploadFile);

router.get("/:gstApplicationId", FileController.getDateApplication);

router.put("/:gstApplicationId", FileController.updateDateApplication);

router.put("/update/:gstApplicationId", FileController.updateDateStatus);

export const ExcelRoute = router;
