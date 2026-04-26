export declare const OthersAnnouncementServices: {
    create(payload: {
        title: string;
        date: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        title: string;
    }>;
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        title: string;
    }[]>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        title: string;
    }>;
};
//# sourceMappingURL=OtherNotice.services.d.ts.map