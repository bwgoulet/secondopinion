'use client';

import SideNav from "./components/SideNav";
import SessionCard from "./components/Cards/SessionCard";
import Sessions from "./components/Sessions";

export default function Dashboard() {

    return (
        <>
            <div className="flex flex-row">
                <SideNav />
                <div className="flex flex-col w-[30%] bg-green-200 p-[20px]">
                    <Sessions />
                </div>
                <div className="flex-1 bg-red-200 p-[20px]">
                    <p className="mb-[20px] text-2xl">Emerson's Session</p>
                </div>
            </div>
        </>
    )
}