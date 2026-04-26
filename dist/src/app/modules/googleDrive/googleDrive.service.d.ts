export declare const getGoogleDriveService: () => import("googleapis").drive_v3.Drive;
export declare const GoogleDriveServices: {
    uploadToGoogleDrive: (file: Express.Multer.File, title: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        fileId: string;
        viewLink: string;
        downloadLink: string;
    }>;
    getAllFiles: () => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        fileId: string;
        viewLink: string;
        downloadLink: string;
    }[]>;
    deleteFile: (fileId: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        fileId: string;
        viewLink: string;
        downloadLink: string;
    }>;
};
//# sourceMappingURL=googleDrive.service.d.ts.map