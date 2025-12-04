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
    toggleUserStatus: (gstApplicationId: string) => Promise<{
        message: string;
        gstApplicationId: string;
        status: import("@prisma/client").$Enums.UserStatus;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map