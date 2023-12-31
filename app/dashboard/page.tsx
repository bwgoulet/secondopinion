"use client";


import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Sessions from "./components/Sessions";
import Session from "./components/Cards/Session";

export default function Dashboard() {

    const [patients, setPatients] = useState<any>([])
    const [selectedPatient, setPatient] = useState<any>([]);
    const [sessions, setSessions] = useState<any>([]);
    const [session, setSession] = useState<any>({});

    useEffect(() => {
        const fetchPatients = async () => {
            const { data } = await fetch('/api/patients/all')
                .then((res) => res.json());

            setPatients(data)
        }
        fetchPatients();

    }, [])


    useEffect(() => {
        let check = () => {
            const fetchSessions = async () => {

                const { data } = await fetch(`/api/session/all?patientId=${selectedPatient?._id}`, {
                    cache: "no-cache"
                })
                    .then((res) => res.json());

                console.log(data);
                setSessions(data)

            }

            if (selectedPatient?._id) {
                fetchSessions();
            }
        }

        check();

        const interval = setInterval(check, 5000);

        return () => {
            clearInterval(interval);
        }

    }, [selectedPatient])

    useEffect(() => {
        let refreshCycle = setInterval(async () => {
            if (!session._id) return;
            const { data } = await fetch(`/api/session?sessionId=${session._id}`, {
                cache: "no-cache"
            }).then((res) => res.json());

            if (JSON.stringify(session) !== JSON.stringify(data)) {
                console.log("fired");
                setSession(data);
            }
        }, 5000);

        return () => {
            clearInterval(refreshCycle);
        }
    }, [session]);

    return (
        <>
            <div className="flex flex-row">
                <SideNav setPatient={setPatient} patients={patients} />
                <div className="flex flex-col w-[30%] bg-neutral-50  p-[20px] h-screen ">
                    <Sessions sessions={sessions} selectedPatient={selectedPatient} setPatient={setPatient} setSession={setSession} />
                </div>
                <div className="flex-1 bg-neutral-100 p-[20px] border-l border-1">
                    <Session selectedPatient={selectedPatient} session={session} />
                </div>
            </div>
        </>
    );
}