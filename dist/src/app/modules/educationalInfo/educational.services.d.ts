export declare const EducationalServices: {
    upsertEducationalInfo: (payload: {
        gstApplicationId: string;
        SSCBoard?: string;
        SSCInstitution?: string;
        SSCYear?: string;
        SSCRoll?: string;
        SSCGpa?: string;
        SSCSubject?: string;
        HSCBoard?: string;
        HSCInstitution?: string;
        HSCYear?: string;
        HSCRoll?: string;
        HSCGpa?: string;
        HSCSubject?: string;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
            SSCBoard: string | null;
            SSCInstitution: string | null;
            SSCYear: string | null;
            SSCRoll: string | null;
            SSCGpa: string | null;
            SSCSubject: string | null;
            HSCBoard: string | null;
            HSCInstitution: string | null;
            HSCYear: string | null;
            HSCRoll: string | null;
            HSCGpa: string | null;
            HSCSubject: string | null;
        };
    }>;
};
//# sourceMappingURL=educational.services.d.ts.map