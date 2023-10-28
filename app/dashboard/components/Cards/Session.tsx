'use client';

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import SessionAccordion from "../SessionAccordion";

export default function Session() {
    return (
        <div>
            <p className="mb-[20px] text-2xl">Cool Guy's Session (XX/XX/XX)</p>
            <div className="flex">
                <Card className="w-1/2 mb-4 shadow-md">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                        <h4 className="font-bold text-large">GPT Summary</h4>
                    </CardHeader>
                    <CardBody>
                        <p>GPT Summary blah blah blah</p>
                    </CardBody>
                </Card>
                <Card className="w-1/2 mb-4 shadow-md ">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                        <h4 className="font-bold text-large">Flags</h4>
                    </CardHeader>
                    <CardBody>
                        <p>This is sus</p>
                        <p>This is really sus</p>
                        <p>This is REALLYYY sus</p>
                    </CardBody>
                </Card>
            </div>
            <div>
                <SessionAccordion></SessionAccordion>
            </div>
        </div>
    )
}