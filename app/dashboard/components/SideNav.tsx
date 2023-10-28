'use client';

import { Avatar, Button, Divider, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Icon } from '@iconify/react';


export default function SideNav() {

    const session = useSession();
    const router = useRouter();

    return (
        <aside className="h-screen text-white w-60">
            <nav className="h-full flex flex-col bg-indigo-600 border-r border-indigo-300 shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className="text-2xl ">Patients</h1>
                </div>
                <div className="flex-1 max-w-[260px] h-fit rounded-small border-default-200 dark:border-default-100">
                    <Button variant="flat" className="ml-2">Add new patient</Button>
                    <Listbox variant="faded" itemClasses={{
                        description: "text-white"
                    }}>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Male | 20 years old |"
                                startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=patients`)}
                            >
                                Emerson Hicks
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Female | 15 years old |"
                                startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=patients`)}
                            >
                                Sarah Adams
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Female | 15 years old |"
                                startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=patients`)}
                            >
                                Sarah Adams
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Female | 15 years old |"
                                startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=patients`)}
                            >
                                Sarah Adams
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Female | 15 years old |"
                                startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=patients`)}
                            >
                                Sarah Adams
                            </ListboxItem>
                        </ListboxSection>
                    </Listbox>
                    <div className="border-t border-zinc-800 flex p-3">
                        <Avatar isBordered color="success" size="sm" src={session?.data?.user?.image ?? ""} />
                        <div className="flex justify-between items-center ml-3">
                            <div className="leading-4">
                                <h4 className="font-semibold ">{session?.data?.user?.name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </aside >
    )
}