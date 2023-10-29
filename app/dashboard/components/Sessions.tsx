import { Button } from "@nextui-org/react";
import SessionCard from "./Cards/SessionCard";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Sessions() {
  const data = [
    {
      summary: "Frequent headaches, mild fever, and fatigue",
      date: "October 22, 2021",
      flags: ["Headaches", "Fatigue"],
    },
    {
      summary: "Severe back pain and muscle stiffness",
      date: "October 23, 2021",
      flags: ["Back pain", "Muscle stiffness"],
    },
    {
      summary: "Allergies, runny nose, and cough",
      date: "October 24, 2021",
      flags: ["Allergies", "Cough"],
    },
    {
      summary: "Sore throat, high temperature, and fatigue",
      date: "October 25, 2021",
      flags: ["Sore throat", "Fever", "Fatigue"],
    },
    {
      summary: "Joint pain and inflammation",
      date: "October 26, 2021",
      flags: ["Joint pain", "Inflammation"],
    },
    {
      summary: "Nausea, vomiting, and stomach cramps",
      date: "October 27, 2021",
      flags: ["Nausea", "Vomiting", "Stomach cramps"],
    },
  ];

  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex lg:flex-row sm:flex-col md:flex-col xs:flex-col items-center mb-[20px] h-[60px]">
        <p className="text-2xl">Sessions</p>
        <div className="flex-1"></div>
        <Button
          className="bg-indigo-600 text-white h-[40px]"
          onClick={() => router.push(`/dashboard/session/new?id=1234`)}
        >
          Create Session
        </Button>
      </div>
      <div className="overflow-y-auto pb-[75px]">
        {data.map((session) => {
          return <SessionCard props={session} />;
        })}
      </div>
    </div>
  );
}
