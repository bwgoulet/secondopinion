import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions: NextAuthOptions = {
    // adds the mongo connection to next-auth
    session: { strategy: "jwt", },
    adapter: MongoDBAdapter(clientPromise, { databaseName: process.env.MONGO_DB ?? "development" }),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),

    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };