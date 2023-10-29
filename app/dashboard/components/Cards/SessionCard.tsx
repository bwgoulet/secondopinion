'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function SessionCard({ session }: any) {

    console.log(session)

    return (
        <Card isPressable className="w-full mb-4 shadow-md ">
            <CardBody>
                <p className="line-clamp-2 ">{session.summary}?</p>
                <div className="flex justify-end mt-2">
                    {session?.flags?.map((flag: any) => {
                        return (
                            <Chip
                                className="ml-2 text-xs"
                                startContent={<Icon icon="solar:health-bold" />}
                                variant="flat"
                                color="danger"
                            >
                                {flag.issue}
                            </Chip>
                        )
                    })}
                </div>
            </CardBody>
            {/* </CardFooter> */}
        </Card>
    )
}