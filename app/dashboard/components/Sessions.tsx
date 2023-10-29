import { Button } from "@nextui-org/react";
import SessionCard from "./Cards/SessionCard";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Sessions({ selectedPatient, setPatient }: any) {
    // const data = [
    //     {
    //         summary: "Frequent headaches, mild fever, and fatigue",
    //         date: "10-22-21",
    //         flags: ["Headaches", "Fatigue"],
    //     },
    //     {
    //         summary: "Severe back pain and muscle stiffness",
    //         date: "10-23-21",
    //         flags: ["Back pain", "Muscle stiffness"],
    //     },
    //     {
    //         summary: "Allergies, runny nose, and cough",
    //         date: "10-24-21",
    //         flags: ["Allergies", "Cough"],
    //     },
    //     {
    //         summary: "Sore throat, high temperature, and fatigue",
    //         date: "10-25-21",
    //         flags: ["Sore throat", "Fever", "Fatigue"],
    //     },
    //     {
    //         summary: "Joint pain and inflammation",
    //         date: "10-26-21",
    //         flags: ["Joint pain", "Inflammation"],
    //     },
    //     {
    //         summary: "Nausea, vomiting, and stomach cramps",
    //         date: "10-27-21",
    //         flags: ["Nausea", "Vomiting", "Stomach cramps"],
    //     },
    // ];

    console.log(selectedPatient)

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
                {!selectedPatient
                    ? <p>Please select a patient</p>
                    :
                    <p>No sessions could be found for {selectedPatient.name}</p>}
                {/* {data.map((session) => {
                    return <SessionCard props={session} />;
                })} */}
            </div>
        </div>
    );
}
