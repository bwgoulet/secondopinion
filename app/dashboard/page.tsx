'use client';

import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import { useRouter, useSearchParams } from "next/navigation";
import SessionCard from "./components/Cards/SessionCard";
// import Patients from "./components/Patients";

export default function Dashboard() {

    // const [tab, setTab] = useState("");
    // const router = useRouter();
    // const searchParams = useSearchParams();
    // const currentTab = searchParams.get("tab")


    // useEffect(() => {

    //     // If no query params were found default to settings
    //     if (!currentTab) {
    //         router.push(`?tab=settings`)
    //     }

    //     // Update state for the current tab, again defaulting to settings
    //     setTab(currentTab ? currentTab : "settings")

    // }, [currentTab])


    const data = {
        date: "Random date"
    }

    return (
        <>
            <div className="flex flex-row">
                <SideNav />
                <div className="flex flex-col w-[30%] bg-green-200 p-[20px]">
                    <p className="mb-[20px] text-2xl">Sessions</p>
                    <SessionCard props={data} />
                    <SessionCard props={data} />
                    <SessionCard props={data} />
                    <SessionCard props={data} />
                    <SessionCard props={data} />
                </div>
                <div className="flex-1 bg-red-200 p-[20px]">
                    <p className="mb-[20px] text-2xl">Emerson's Session</p>

                </div>
            </div>
        </>
    )
}