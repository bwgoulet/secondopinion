'use client';

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function SessionCard({ props }: any) {
    return (
        <Card isPressable className="w-full mb-4 shadow-md">
            <CardBody>
                <p>{props.date}</p>
                <p>{props.summary}</p>

                <div className="flex justify-end mt-2">
                    {props?.flags?.map((flag: any) => {
                        return (
                            <Chip
                                className="ml-2"
                                startContent={<Icon icon="solar:health-bold" />}
                                variant="flat"
                                color="danger"
                            >
                                {flag}
                            </Chip>
                        )
                    })}
                </div>
            </CardBody>
            {/* </CardFooter> */}
        </Card>
    )
}