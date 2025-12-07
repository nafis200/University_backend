export declare const OthersAnnouncementServices: {
    create(payload: {
        title: string;
        date: string;
    }): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        date: Date;
        title: string;
    }>;
    getAll(): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        date: Date;
        title: string;
    }[]>;
    delete(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: string;
        date: Date;
        title: string;
    }>;
};
//# sourceMappingURL=OtherNotice.services.d.ts.map