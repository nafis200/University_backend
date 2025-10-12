import type { Request, Response } from 'express';

import { z } from 'zod';
import { FileService } from './file.service';


const fileValidationSchema = z.object({
  mimetype: z.enum([
    'application/sql',        
    'application/x-sql',      
    'application/vnd.ms-excel',  
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
  ]),
});


const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded!',
      });
    }



    const validation = fileValidationSchema.safeParse({ mimetype: file.mimetype });

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: 'Invalid file type! Only SQL or Excel files are allowed.',
      });
    }

    const result = await FileService.uploadFile(file);

    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || 'Something went wrong',
      error: err,
    });
  }
};

export const FileController = {
  uploadFile,
};
