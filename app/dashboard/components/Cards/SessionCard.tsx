"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { format } from "date-fns";

export default function SessionCard({ session, setSession }: any) {
    return (
        <Card
            onClick={() => setSession(session)}
            isPressable
            className="w-full mb-4 shadow-md"
        >
            <CardBody>
                <p className="text-xl ">
                    {format(new Date(session.timestamp), "MM/dd/yyyy")}
                </p>
                <p className="text-sm line-clamp-3">{session.summary}</p>
            </CardBody>
            {/* </CardFooter> */}
        </Card>
    );
}
