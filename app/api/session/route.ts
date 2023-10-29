import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || 'fake-id';

    // Create mongo instance
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB ?? "development");

    if (!client) {
        throw new Error("MONGO: Client could not be established");
    }

    const query = { '_id': new ObjectId(sessionId) }

    const session = await db.collection('sessions').find(query).toArray()

    return Response.json({ status: 200, data: session[0] })
}
