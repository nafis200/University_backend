export type TableData = Record<string, Record<string, any>[]>;
export declare const ExcelService: {
    uploadExcelFile: (file: Express.Multer.File, applyEndDate: string) => Promise<TableData>;
    getDateApplicationByGstApplicationId: (gstApplicationId: string) => Promise<{
        id: number;
        gstApplicationId: string;
        status: boolean;
        applyEndDate: Date;
    } | null>;
    updateDateApplicationByGstApplicationId: (gstApplicationId: string, updateData: {
        applyEndDate?: Date;
    }) => Promise<{
        id: number;
        gstApplicationId: string;
        status: boolean;
        applyEndDate: Date;
    }>;
    updateDateApplicationStatus: (gstApplicationId: string) => Promise<{
        id: number;
        gstApplicationId: string;
        status: boolean;
        applyEndDate: Date;
    } | null>;
};
//# sourceMappingURL=excel.services.d.ts.map