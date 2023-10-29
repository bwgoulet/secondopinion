"use client";

import {
    Avatar,
    Button,
    Divider,
    Listbox,
    ListboxItem,
    ListboxSection,
    useDisclosure,
    Spinner,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PatientCard from "./Cards/PatientCard";
import FormModal from "./Modals/FormModal";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SideNav({ patients, setPatient }: any) {
    const session = useSession();

    const modal = useDisclosure();

    return (
        <aside className="h-screen text-white w-60">
            <nav className="h-full flex flex-col bg-indigo-600 border-r border-indigo-300 shadow-sm">
                <div className="flex justify-between items-center px-[20px] pt-[20px] h-[60px]">
                    <h1 className="text-2xl">Patients</h1>
                </div>
                <div className="flex-1 max-w-[260px] h-fit rounded-small border-default-200 dark:border-default-100">
                    <div className="p-3">
                        <Button startContent={<Icon className="text-lg" icon={"bx:plus"} />} onClick={() => { modal.onOpen() }} className="p-4 w-full">Add new patient</Button>
                    </div>
                    <div className="flex flex-col p-3">
                        {patients && patients.map((patient: any) => {
                            return <PatientCard patient={patient} setPatient={setPatient} />
                        })}
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="border-t border-zinc-800 flex p-3">
                    <Avatar
                        isBordered
                        color="success"
                        size="sm"
                        src={session?.data?.user?.image ?? ""}
                    />
                    <div className="flex justify-between items-center ml-3">
                        <div className="leading-4">
                            <h4 className="font-semibold ">{session?.data?.user?.name}</h4>
                        </div>
                    </div>
                </div>
            </nav>
            <FormModal modal={modal} />
        </aside>
    );

}
