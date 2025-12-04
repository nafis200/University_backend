export declare const AddressServices: {
    upsertAddress: (payload: {
        gstApplicationId: string;
        Village?: string;
        PostOffice?: string;
        PostCode?: string;
        Thana?: string;
        District?: string;
        Country?: string;
        NID?: string;
        PresentAddress?: string;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
            Village: string | null;
            PostOffice: string | null;
            PostCode: string | null;
            Thana: string | null;
            District: string | null;
            Country: string | null;
            NID: string | null;
            PresentAddress: string | null;
        };
    }>;
};
//# sourceMappingURL=address.services.d.ts.map