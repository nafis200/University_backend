export declare const DocumentServices: {
    upsertDocuments: (payload: {
        gstApplicationId: string;
        sscMarksheet?: boolean;
        sscTranscript?: boolean;
        hscMarksheet?: boolean;
        hscTranscript?: boolean;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            id: number;
            sscMarksheet: boolean;
            sscTranscript: boolean;
            hscMarksheet: boolean;
            hscTranscript: boolean;
        };
    }>;
};
//# sourceMappingURL=documents.services.d.ts.map