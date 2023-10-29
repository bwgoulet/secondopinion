"use client";

import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import SessionAccordion from "../SessionAccordion";

export default function Session() {
  return (
    <div>
      <div className="px-2">
        <div className="flex h-[60px] items-center mb-[20px]">
          <p className=" text-2xl flex-1">Cool Guy's Session (XX/XX/XX)</p>
          <Button>Close</Button>
        </div>
        <p className="font-bold text-sm">Summary</p>
        <p className="mb-5">Summary blah blah blah</p>
        <div className="flex mb-5">
          <div className="flex-1">
            <p className="font-bold text-sm">Danger Level</p>
            <div className="flex flex-col bg-red-600 h-[100px] p-5 rounded-lg">
              <div className="flex-1"></div>
              <p className="text-white text-xl">Dangerous</p>
            </div>
          </div>
          <div className="w-[20px]"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">Flags</p>
            <div className="gap-4">
              <Chip color="danger" variant="flat" className="mr-1 mb-1">
                Dangerous Dose
              </Chip>
              <Chip color="danger" variant="flat" className="mr-1 mb-1">
                Dangerous For Age
              </Chip>
              <Chip color="warning" variant="flat" className="mr-1 mb-1">
                No Mention of Side Effects
              </Chip>
              <Chip color="success" variant="flat" className="mr-1 mb-1">
                Great Communication
              </Chip>
              <Chip color="danger" variant="flat" className="mr-1 mb-1">
                Potential Interaction
              </Chip>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SessionAccordion></SessionAccordion>
      </div>
    </div>
  );
}
