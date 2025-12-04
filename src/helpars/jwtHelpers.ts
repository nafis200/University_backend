import jwt, { Secret, SignOptions, type JwtPayload } from 'jsonwebtoken';

type StringValue = `${number}ms` | `${number}s` | `${number}m` | `${number}h` | `${number}d` | `${number}w`;


const generateToken = (payload: object, secret: Secret, expiresIn: string) => {
    const options: SignOptions = {
        algorithm: 'HS256',
        expiresIn: expiresIn as StringValue,
    };

    const token = jwt.sign(payload, secret, options);
    return token;
};

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload;
}

export const jwtHelpers = {
    generateToken,
    verifyToken
}

