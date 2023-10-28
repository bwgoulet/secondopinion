import { Button } from "@nextui-org/react";
import SessionCard from "./Cards/SessionCard";
import { useRouter } from "next/navigation";

export default function Sessions() {

    const data = {
        date: "Random date"
    }

    const router = useRouter();

    return (
        <div>
            <div className="flex flex-row items-center mb-[20px]">
                <p className="text-2xl">Sessions</p>
                <div className="flex-1"></div>
                <Button onClick={() => router.push(`/dashboard/session/new?id=1234`)}>Create Session</Button>
            </div>

            <SessionCard props={data} />
            <SessionCard props={data} />
            <SessionCard props={data} />
            <SessionCard props={data} />
            <SessionCard props={data} />
        </div>

    )
}