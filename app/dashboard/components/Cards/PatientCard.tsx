"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, ListboxItem, ListboxSection } from "@nextui-org/react";

export default function PatientCard({ props }: any) {
  return (
    <Card isPressable className="bg-indigo-700/50 text-indigo-50 mb-2">
      <CardBody className="flex flex-row items-center">
        <div className="pr-2">
          <Icon icon="bx:user" width="22"></Icon>
        </div>
        <div className="flex-1">
          <p className="text-md">{props.name}</p>
          <p className="text-xs line-clamp-1">{props.description}</p>
        </div>
      </CardBody>
    </Card>
    // <div className="flex items-center h-16 w-full border-1 border-solid border-indigo-700 rounded-2xl py-2 px-2 mb-2 hover:border-indigo-800">

    // </div>
  );
}
