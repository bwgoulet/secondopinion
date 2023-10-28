'use client';

import { Card, CardBody } from "@nextui-org/react";

export default function SessionCard({ props }: any) {
    return (
        <Card isPressable className="w-full mb-4 shadow-md">
            <CardBody>
                <p>{props.date}</p>
                <p>Other information here</p>
            </CardBody>
        </Card>
    )
}