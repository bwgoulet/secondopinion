"use client";


import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Sessions from "./components/Sessions";
import Session from "./components/Cards/Session";

export default function Dashboard() {

    const [patients, setPatients] = useState<any>([])

    useEffect(() => {

        const fetchPatients = async () => {
            const { data } = await fetch('/api/patients/all')
                .then((res) => res.json());

            setPatients(data)

            console.log(data);

        }

        fetchPatients();

    }, [])

    return (
        <>
            <div className="flex flex-row">
                <SideNav patients={patients} />
                <div className="flex flex-col w-[30%] bg-neutral-50  p-[20px] h-screen ">
                    <Sessions />
                </div>
                <div className="flex-1 bg-neutral-100 p-[20px] border-l border-1">
                    <Session />
                </div>
            </div>
        </>
    );
}