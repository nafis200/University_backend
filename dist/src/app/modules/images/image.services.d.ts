export declare const ImageServices: {
    upsertImage: (gstApplicationId: string, imageUrl: string) => Promise<{
        id: string;
        gstApplicationId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
    }>;
    getImage: (gstApplicationId: string) => Promise<{
        id: string;
        gstApplicationId: string;
        createdAt: Date;
        updatedAt: Date;
        imageUrl: string;
    } | null>;
};
//# sourceMappingURL=image.services.d.ts.map