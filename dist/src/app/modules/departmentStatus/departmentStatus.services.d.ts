export declare const DeparmtentStatusServices: {
    create: (data: any) => Promise<{
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
    }>;
    getAll: () => Promise<{
        department: string;
        year: number;
        studentCount: number;
    }[]>;
};
//# sourceMappingURL=departmentStatus.services.d.ts.map