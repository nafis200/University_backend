type TableData = Record<string, Record<string, any>[]>;
export declare const FileService: {
    uploadFile: (file: Express.Multer.File) => Promise<{
        message: string;
        data: TableData;
    }>;
};
export {};
//# sourceMappingURL=file.service.d.ts.map