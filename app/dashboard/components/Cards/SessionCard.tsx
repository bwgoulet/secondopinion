"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function SessionCard({ session, setSession }: any) {

    return (
        <Card onClick={() => setSession(session)} isPressable className="w-full mb-4 shadow-md h-22 ">
            <CardBody>
                <div className="flex justify-end mt-2">
                    {session?.flags?.map((flag: any) => {
                        return (
                            <Chip
                                className="mb-3" size="sm" color="danger" variant="flat"
                                startContent={<Icon icon="solar:health-bold" />}
                            >
                                {flag.issue}
                            </Chip>
                        )
                    })}
                </div>
                <p className="text-lg">{session.timestamp}</p>
                <p className="text-sm">{session.summary}</p>
            </CardBody>
            {/* </CardFooter> */}
        </Card>
    )
}
