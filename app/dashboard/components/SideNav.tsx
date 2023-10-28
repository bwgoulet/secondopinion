'use client';

import { Avatar, Divider, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SideNav() {

    const session = useSession();
    const router = useRouter();

    return (
        <aside className="h-screen text-white w-60">
            <nav className="h-full flex flex-col bg-zinc-500 border-r border-zinc-800 shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className="text-2xl ">Dashboard</h1>
                    <Divider />
                </div>
                <div className="flex-1 max-w-[260px] h-fit rounded-small border-default-200 dark:border-default-100">
                    <Listbox variant="faded">
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Your patrient history"
                                // startContent={<Icon icon={"mdi:user"} />}
                                onClick={() => router.push(`?tab=profile`)}
                            >
                                Patients
                            </ListboxItem>
                        </ListboxSection>

                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="View your sessions"
                                // startContent={<Icon icon={"ri:game-fill"} />}
                                onClick={() => router.push(`?tab=matches`)}
                            >
                                Sessions
                            </ListboxItem>
                        </ListboxSection>
                        <ListboxSection showDivider className="w-full p-0.5 m-0">
                            <ListboxItem
                                key="new"
                                description="Configure your account"
                                // startContent={<Icon icon={"material-symbols:settings"} />}
                                onClick={() => router.push(`?tab=settings`)}
                            >
                                Settings
                            </ListboxItem>
                        </ListboxSection>
                    </Listbox>
                </div>
                {/* <div className="border-t border-zinc-800 flex p-3">
                    <Avatar isBordered color="success" size="sm" src={session?.data?.user?.image ?? ""} />
                    <div className="flex justify-between items-center ml-3">
                        <div className="leading-4">
                            <h4 className="font-semibold ">{session?.data?.user?.image}</h4>
                        </div>
                    </div>
                </div> */}
            </nav>
        </aside >
    )
}