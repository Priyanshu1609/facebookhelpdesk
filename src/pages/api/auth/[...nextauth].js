import NextAuth, { NextAuthOptions } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    providers: [
        // FacebookProvider({
        //     clientId: "508612991478226",
        //     clientSecret: "8f51c1081c87b139cc2995ffc1b3d588",
        // })
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: [
                        'email', 'pages_show_list', 'pages_messaging', 'public_profile', 'pages_read_engagement'
                    ]
                }
            },
        }),
        // FacebookProvider({
        //     clientId: "1256770022391018",
        //     clientSecret: "5419c5cb98a572f6a86514c3c5333408",
        // })
    ],

    theme: {
        colorScheme: "light",
    },
    secret: "^kEEPMZ479RZk0VoN@Pwr9TLT@",
    callbacks: {
        async session({ session, token, user }) {
            session.user.id = token.id;
            session.accessToken = token.accessToken;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
}

export default NextAuth(authOptions)