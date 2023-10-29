import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function POST(request: Request) {

    const body = await request.json()

    // Get the current user session
    const session = await getServerSession(authOptions)

    const client = await clientPromise;

    if (!client) {
        throw new Error("MONGO: Client could not be established");
    }

    // If no valid session exists
    if (!session) {
        return Response.json({ status: 400, error: "You must be signed in to access this content" })
    }

    const db = client.db(process.env.MONGO_DB ?? "development")

    // const document 

    db.collection('patients').insertOne(body)
        .then(data => console.log(data))
        .catch(e => {
            console.log(e);
            return Response.json({ status: 400, error: "Unexpected error occoured while updating user in document" })
        })

    // const matches = await res.json()

    return Response.json({ status: 200, data: "Account link success" })
}