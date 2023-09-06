import NextAuth, { NextAuthOptions } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    providers: [
        FacebookProvider({
            clientId: "669180924897641",
            clientSecret: "f8c731900c009656e32a296b4dc9b5c8",
        })
    ],
    theme: {
        colorScheme: "light",
    },
    // callbacks: {
    //     async jwt({ token }) {
    //         token.userRole = "admin"
    //         return token
    //     },
    // },
    secret: "^kEEPMZ479RZk0VoN@Pwr9TLT@",
}

export default NextAuth(authOptions)