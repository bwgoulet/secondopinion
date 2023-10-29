"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function SessionCard({ props }: any) {
  return (
    <Card isPressable className="w-full mb-4 shadow-md h-22">
      <CardBody>
        <Chip className="mb-3" size="sm" color="danger" variant="flat">
          Dangerous
        </Chip>
        <p className="text-lg">{props.date}</p>
        <p className="text-sm">{props.summary}</p>
      </CardBody>
      {/* </CardFooter> */}
    </Card>
  );
}
