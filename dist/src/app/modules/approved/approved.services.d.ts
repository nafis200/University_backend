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
            id: number;
            gstApplicationId: string;
            status: boolean;
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