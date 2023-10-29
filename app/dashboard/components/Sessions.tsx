import { Button } from "@nextui-org/react";
import SessionCard from "./Cards/SessionCard";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSession } from "next-auth/react";

export default function Sessions({
    selectedPatient,
    setPatient,
    sessions,
    setSession,
}: any) {
    const session = useSession();
    const router = useRouter();

    return (
        <div className="flex flex-col h-screen">
            <div className="flex lg:flex-row sm:flex-col md:flex-col xs:flex-col items-center mb-[20px] h-[60px]">
                <p className="text-2xl">Sessions</p>
                <div className="flex-1"></div>
                <Button
                    isDisabled={!selectedPatient?._id}
                    className="bg-indigo-600 text-white h-[40px]"
                    startContent={<Icon className="text-lg" icon={"bx:plus"} />}
                    onClick={() =>
                        router.push(`/dashboard/session/new?id=${selectedPatient?._id}&name=${selectedPatient?.name}`)
                    }
                >
                    Create Session
                </Button>
            </div>
            <div className="flex flex-col overflow-y-auto pb-[75px]">
                {!selectedPatient?._id && <p>Please select a patient!</p>}

                {!sessions[0] && selectedPatient?._id && (
                    <div className='flex flex-1 items-center justify-center h-full'>
                        <div className="flex-1"></div>
                        <div className="flex flex-col items-center">
                            <Icon icon="bx:plus" width="40" color="lightgray" className="mb-3"></Icon>
                            <p className="text-center text-gray-300">Make your first session by clicking "Create Session"</p>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                )}

                {sessions.map((session: any) => {
                    return <SessionCard session={session} setSession={setSession} />;
                })}
            </div>
        </div>
    );
}
