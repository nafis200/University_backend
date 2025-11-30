"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const zod_1 = require("zod");
const file_service_1 = require("./file.service");
const fileValidationSchema = zod_1.z.object({
    mimetype: zod_1.z.enum([
        'application/sql',
        'application/x-sql',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ]),
});
const uploadFile = async (req, res) => {
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
        const result = await file_service_1.FileService.uploadFile(file);
        res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || 'Something went wrong',
            error: err,
        });
    }
};
exports.FileController = {
    uploadFile,
};
//# sourceMappingURL=file.controller.js.map