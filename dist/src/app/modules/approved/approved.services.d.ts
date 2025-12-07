export declare const ApprovedServices: {
    upsertApproval: (payload: {
        gstApplicationId: string;
        adminApproved?: boolean;
        facultyApproved?: boolean;
        deanApproved?: boolean;
        registerApproved?: boolean;
        hallRegisterApproved?: boolean;
        medicalApproved?: boolean;
        status?: boolean;
    }) => Promise<{
        message: string;
        data: {
            gstApplicationId: string;
            status: boolean;
            id: number;
            adminApproved: boolean;
            facultyApproved: boolean;
            deanApproved: boolean;
            registerApproved: boolean;
            hallRegisterApproved: boolean;
            medicalApproved: boolean;
        };
    }>;
};
//# sourceMappingURL=approved.services.d.ts.map