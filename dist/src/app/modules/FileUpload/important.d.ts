type TableData = Record<string, Record<string, any>[]>;
export declare const FileService: {
    uploadFile: (file: Express.Multer.File) => Promise<{
        message: string;
        data: TableData;
    }>;
};
export {};
//# sourceMappingURL=important.d.ts.map