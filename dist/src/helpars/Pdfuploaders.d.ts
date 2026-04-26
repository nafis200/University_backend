import multer from "multer";
import { UploadApiResponse } from "cloudinary";
import { IFile } from "../app/interfaces/file";
export declare const pdfUploader: {
    upload: multer.Multer;
    uploadPDFToCloudinary: (file: IFile) => Promise<UploadApiResponse>;
};
//# sourceMappingURL=Pdfuploaders.d.ts.map