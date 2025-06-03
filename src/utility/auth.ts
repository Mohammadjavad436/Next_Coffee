import { hash, compare } from "bcryptjs";
import { SignJWT, jwtVerify, JWTPayload } from "jose";

const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

export interface TokenData {
    userId: string;
    email: string;
    role: string;
}

const generateAccessToken = async (data: TokenData): Promise<string> => {
    const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey!);
    const token = await new SignJWT({ ...data })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('1h')
        .sign(secret);
    return token;
};

const verifyAccessToken = async (token: string): Promise<JWTPayload | false> => {
    try {
        const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey!);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        console.log("Verify Access Token Error ->", err);
        return false;
    }
};

const generateRefreshToken = async (data: TokenData): Promise<string> => {
    const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey!);
    const token = await new SignJWT({ ...data })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('15d')
        .sign(secret);
    return token;
};

const validatePhone = (phone: string): boolean => {
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone);
}


const validatePassword = (password: string): boolean => {
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
}

const validateEmail = (email: string): boolean => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    return pattern.test(email);
}

export interface AuthResponse {
    message: string;
    user?: {
        name: string;
        email: string;
        role: string;
    };
    valid?: boolean;
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validatePhone,
    validateEmail,
    validatePassword
};
