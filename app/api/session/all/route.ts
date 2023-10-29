import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const patientId = searchParams.get('patientId');

    // Create mongo instance
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB ?? "development");

    if (!client) {
        throw new Error("MONGO: Client could not be established");
    }

    const query = { patientId: patientId }

    const sessions = await db.collection('sessions').find(query).toArray()

    return Response.json({ status: 200, data: sessions })
}
