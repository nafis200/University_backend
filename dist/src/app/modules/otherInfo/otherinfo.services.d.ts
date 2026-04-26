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
            id: string;
            gstApplicationId: string;
            createdAt: Date;
            updatedAt: Date;
            Department: string | null;
            Program: string | null;
            HallName: string | null;
            StudyBreakCause: string | null;
            AlreadyAdmittedInstitution: string | null;
            ApplicantEmployment: string | null;
            Scholarships: string | null;
        };
    }>;
    roleUpdated: (payload: {
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
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            unit: string;
            faculty: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    }>;
};
//# sourceMappingURL=otherinfo.services.d.ts.map