import { Secret, type JwtPayload } from 'jsonwebtoken';
export declare const jwtHelpers: {
    generateToken: (payload: object, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: Secret) => JwtPayload;
};
//# sourceMappingURL=jwtHelpers.d.ts.map