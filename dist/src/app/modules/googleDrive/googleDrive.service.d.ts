export declare const getGoogleDriveService: () => import("googleapis").drive_v3.Drive;
export declare const GoogleDriveServices: {
    uploadToGoogleDrive: (file: Express.Multer.File) => Promise<{
        fileId: string;
        viewLink: string | null | undefined;
        downloadLink: string | null | undefined;
    }>;
};
//# sourceMappingURL=googleDrive.service.d.ts.map