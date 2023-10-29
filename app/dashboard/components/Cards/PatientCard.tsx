"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Card, CardBody, ListboxItem, ListboxSection } from "@nextui-org/react";

export default function PatientCard({ patient, setPatient }: any) {
    return (
        <Card onClick={() => setPatient(patient)} isPressable className="bg-indigo-700 text-indigo-50 mb-2">
            <CardBody className="flex flex-row items-center">
                <div className="pr-2">
                    <Icon icon="bx:user" width="22"></Icon>
                </div>
                <div className="flex-1">
                    <p className="text-md">{patient?.name}</p>
                    <p className="text-xs line-clamp-1">{patient?.age} years old, {patient?.sex}</p>
                </div>
            </CardBody>
        </Card>
    );
}
