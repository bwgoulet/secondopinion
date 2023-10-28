"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ListboxItem, ListboxSection } from "@nextui-org/react";

export default function PatientCard({ props }: any) {
  return (
    <div className="flex items-center h-16 w-full border-1 border-solid border-indigo-700 rounded-2xl py-2 px-2 mb-2">
      <div className="flex-1">
        <p className="text-md">{props.name}</p>
        <p className="text-xs line-clamp-1">{props.description}</p>
      </div>
    </div>
  );
}
