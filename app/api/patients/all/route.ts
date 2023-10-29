import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET(request: Request) {


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

    const query = { doctor: session.user?.email }

    // const options = {
    //     // Sort returned documents in ascending order by title (A->Z)
    //     sort: { title: 1 },
    //     // Include only the `title` and `imdb` fields in each returned document
    // };

    const patients = await db.collection('patients').find(query).toArray()


    // const matches = await res.json()

    return Response.json({ status: 200, data: patients })
}