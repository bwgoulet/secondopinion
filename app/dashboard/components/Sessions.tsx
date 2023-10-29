import { Button } from "@nextui-org/react";
import SessionCard from "./Cards/SessionCard";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSession } from "next-auth/react";

export default function Sessions({ selectedPatient, setPatient, sessions }: any) {

    const session = useSession();
    const router = useRouter();

    return (
        <div className="flex flex-col h-screen">
            <div className="flex lg:flex-row sm:flex-col md:flex-col xs:flex-col items-center mb-[20px] h-[60px]">
                <p className="text-2xl">Sessions</p>
                <div className="flex-1"></div>
                <Button
                    className="bg-indigo-600 text-white h-[40px]"
                    onClick={() => router.push(`/dashboard/session/new?id=${selectedPatient?._id}`)}
                >
                    Create Session
                </Button>
            </div>
            <div className="overflow-y-auto pb-[75px]">
                {!selectedPatient && <p>Please select a patient</p>}

                {sessions.map((session: any) => {
                    return <SessionCard session={session} />
                })}

            </div>
        </div>
    );
}
