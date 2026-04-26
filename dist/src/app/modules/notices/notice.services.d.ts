export declare const ExamServices: {
    createExamApplication: (data: {
        applyStartDate: Date;
        applyEndDate: Date;
    }) => Promise<{
        id: string;
        createdAt: Date;
        applyEndDate: Date;
        applyStartDate: Date;
    }>;
    getAllExamApplications: () => Promise<{
        id: string;
        createdAt: Date;
        applyEndDate: Date;
        applyStartDate: Date;
    }[]>;
    deleteExamApplication: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        applyEndDate: Date;
        applyStartDate: Date;
    }>;
    createExamAnnouncement: (data: {
        title: string;
        unit: string;
        examDate: Date;
    }) => Promise<{
        id: string;
        unit: string;
        createdAt: Date;
        title: string;
        examDate: Date;
    }>;
    getAllExamAnnouncements: () => Promise<{
        id: string;
        unit: string;
        createdAt: Date;
        title: string;
        examDate: Date;
    }[]>;
    deleteExamAnnouncement: (id: string) => Promise<{
        id: string;
        unit: string;
        createdAt: Date;
        title: string;
        examDate: Date;
    }>;
};
//# sourceMappingURL=notice.services.d.ts.map