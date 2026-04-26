export declare const DocumentServices: {
    upsertDocuments: (payload: {
        gstApplicationId: string;
        sscMarksheet?: boolean;
        sscTranscript?: boolean;
        hscMarksheet?: boolean;
        hscTranscript?: boolean;
        nidCard?: boolean;
        photo?: boolean;
        gstAdmitCard?: boolean;
    }) => Promise<{
        message: string;
        data: {
            id: number;
            gstApplicationId: string;
            sscMarksheet: boolean;
            sscTranscript: boolean;
            hscMarksheet: boolean;
            hscTranscript: boolean;
            nidCard: boolean;
            photo: boolean;
            gstAdmitCard: boolean;
        };
    }>;
};
//# sourceMappingURL=documents.services.d.ts.map