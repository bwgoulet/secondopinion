"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import SessionAccordion from "../SessionAccordion";

export default function Session() {
  return (
    <div>
      <div className="px-2">
        <p className="mb-[20px] text-2xl">Cool Guy's Session (XX/XX/XX)</p>
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
          </div>
        </div>
      </div>
      <div>
        <SessionAccordion></SessionAccordion>
      </div>
    </div>
  );
}
