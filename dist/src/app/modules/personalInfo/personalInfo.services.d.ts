export declare const PersonalInfoServices: {
    PersonalInfo: (payload: {
        gstApplicationId: string;
        Name?: string;
        NAME_BN?: string;
        Father?: string;
        Mother?: string;
        Dob?: string;
        Gender?: string;
        BloodGroup?: string;
        MaritalStatus?: string;
        Religion?: string;
        Caste?: string;
        Nationality?: string;
        PhoneNumber?: string;
        Email?: string;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
            Name: string | null;
            NAME_BN: string | null;
            Father: string | null;
            Mother: string | null;
            Dob: string | null;
            Gender: string | null;
            BloodGroup: string | null;
            MaritalStatus: string | null;
            Religion: string | null;
            Caste: string | null;
            Nationality: string | null;
            PhoneNumber: string | null;
            Email: string | null;
        };
    }>;
};
//# sourceMappingURL=personalInfo.services.d.ts.map