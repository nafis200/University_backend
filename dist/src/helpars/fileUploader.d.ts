import multer from "multer";
import { ICloudinaryResponse, IFile } from "../app/interfaces/file";
export declare const fileUploader: {
    upload: multer.Multer;
    uploadToCloudinary: (file: IFile) => Promise<ICloudinaryResponse | undefined>;
};
//# sourceMappingURL=fileUploader.d.ts.map