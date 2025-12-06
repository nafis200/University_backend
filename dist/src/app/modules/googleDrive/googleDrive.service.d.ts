export declare const getGoogleDriveService: () => import("googleapis").drive_v3.Drive;
export declare const GoogleDriveServices: {
    uploadToGoogleDrive: (file: Express.Multer.File, title: string) => Promise<{
        createdAt: Date;
        id: string;
        fileId: string;
        title: string;
        viewLink: string;
        downloadLink: string;
    }>;
    getAllFiles: () => Promise<{
        createdAt: Date;
        id: string;
        fileId: string;
        title: string;
        viewLink: string;
        downloadLink: string;
    }[]>;
    deleteFile: (fileId: string) => Promise<{
        createdAt: Date;
        id: string;
        fileId: string;
        title: string;
        viewLink: string;
        downloadLink: string;
    }>;
};
//# sourceMappingURL=googleDrive.service.d.ts.map