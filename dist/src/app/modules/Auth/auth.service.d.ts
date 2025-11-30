import { UserRole } from "@prisma/client";
export declare const AuthServices: {
    loginUser: (payload: {
        gstApplicationId: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    registerUser: (payload: {
        gstApplicationId: string;
        password: string;
        unit?: string;
        faculty?: string;
        role?: UserRole;
    }) => Promise<{
        message: string;
        userId: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map