import { hash, compare } from "bcryptjs";
import { sign, verify, JwtPayload } from "jsonwebtoken";

const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

interface TokenData {
    userId: string;
    [key: string]: unknown;
}

const generateAccessToken = (data: TokenData): string => {
    const token = sign({ ...data }, process.env.AccessTokenSecretKey!, {
        expiresIn: "60s",
    });
    return token;
};

const verifyAccessToken = (token: string): JwtPayload | false => {
    try {
        const tokenPayload = verify(token, process.env.AccessTokenSecretKey!);
        return tokenPayload as JwtPayload;
    } catch (err) {
        console.log("Verify Access Token Error ->", err);
        return false;
    }
};

const generateRefreshToken = (data: TokenData): string => {
    const token = sign({ ...data }, process.env.RefreshTokenSecretKey!, {
        expiresIn: "15d",
    });
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
