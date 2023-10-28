"use client";


import React from "react";
import SideNav from "./components/SideNav";
import SessionCard from "./components/Cards/SessionCard";
import SessionAccordion from "./components/SessionAccordion";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Sessions from "./components/Sessions";
import Session from "./components/Session";

export default function Dashboard() {

    const data = {
        date: "Random date",
    };

    return (
        <>
            <div className="flex flex-row">
                <SideNav />
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