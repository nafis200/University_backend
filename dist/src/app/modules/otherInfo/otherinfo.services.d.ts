export declare const OthersInfoServices: {
    upsertOthersInfo: (payload: {
        gstApplicationId: string;
        Department?: string;
        Program?: string;
        HallName?: string;
        StudyBreakCause?: string;
        AlreadyAdmittedInstitution?: string;
        ApplicantEmployment?: string;
        Scholarships?: string;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
            Department: string | null;
            Program: string | null;
            HallName: string | null;
            StudyBreakCause: string | null;
            AlreadyAdmittedInstitution: string | null;
            ApplicantEmployment: string | null;
            Scholarships: string | null;
        };
    }>;
};
//# sourceMappingURL=otherinfo.services.d.ts.map