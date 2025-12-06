export declare const ExamServices: {
    createExamApplication: (data: {
        applyStartDate: Date;
        applyEndDate: Date;
    }) => Promise<{
        createdAt: Date;
        id: string;
        applyStartDate: Date;
        applyEndDate: Date;
    }>;
    getAllExamApplications: () => Promise<{
        createdAt: Date;
        id: string;
        applyStartDate: Date;
        applyEndDate: Date;
    }[]>;
    deleteExamApplication: (id: string) => Promise<{
        createdAt: Date;
        id: string;
        applyStartDate: Date;
        applyEndDate: Date;
    }>;
    createExamAnnouncement: (data: {
        title: string;
        unit: string;
        examDate: Date;
    }) => Promise<{
        unit: string;
        createdAt: Date;
        id: string;
        title: string;
        examDate: Date;
    }>;
    getAllExamAnnouncements: () => Promise<{
        unit: string;
        createdAt: Date;
        id: string;
        title: string;
        examDate: Date;
    }[]>;
    deleteExamAnnouncement: (id: string) => Promise<{
        unit: string;
        createdAt: Date;
        id: string;
        title: string;
        examDate: Date;
    }>;
};
//# sourceMappingURL=notice.services.d.ts.map