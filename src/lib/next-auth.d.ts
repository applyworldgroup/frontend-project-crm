import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role: "ADMIN" | "USER";
        };
        tokens: {
            access_token: string,
            refresh_token: string;
            expiresIn: number;
        };
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: string;
            name: string;
            email: string;
            role: "ADMIN" | "USER";
        };
        tokens: {
            access_token: string;
            refresh_token: string;
            expiresIn: number;
        };
    }
}
