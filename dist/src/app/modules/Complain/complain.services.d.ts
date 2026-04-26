export declare const ComplainServices: {
    createComplain: (payload: {
        gstApplicationId: string;
        complain: string;
    }) => Promise<{
        message: string;
        data: {
            id: number;
            gstApplicationId: string;
            status: boolean;
            complain: string;
        };
    }>;
    updateComplainStatus: (gstApplicationId: string) => Promise<{
        message: string;
        data: import("@prisma/client").Prisma.BatchPayload;
    }>;
    getComplains: (query: {
        searchTerm?: string;
        status: boolean;
    }) => Promise<{
        message: string;
        data: {
            id: number;
            gstApplicationId: string;
            status: boolean;
            complain: string;
        }[];
    }>;
};
//# sourceMappingURL=complain.services.d.ts.map