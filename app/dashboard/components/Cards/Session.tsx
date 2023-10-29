"use client";

import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Chip, ScrollShadow } from "@nextui-org/react";
import SessionAccordion from "../SessionAccordion";
import format from 'date-fns/format'

export default function Session({ session, selectedPatient }: any) {

  function dateFormatter(timestamp: any) {
    var date = new Date(timestamp);

    // Extract the date, month, and year
    var month = date.getMonth() + 1; // Months are 0-based
    var day = date.getDate();
    var year = date.getFullYear();

    // Format the date as MM/dd/yyyy
    var formattedDate = month + '/' + day + '/' + year;

    return formattedDate
  }


  return (
    <div className="">
      <div className="px-2">
        <div className="flex h-[60px] items-center mb-[20px]">
          <p className=" text-2xl flex-1">{selectedPatient?.name}'s {dateFormatter(session?.timestamp)}</p>
          <Button>Close</Button>
        </div>
        <div className="flex flex-col mb-5">
          <p className="font-bold text-sm mb-2">Flags</p>
          <div className="gap-4">
            {session?.flags?.map((flag) => {
              return (
                <div>
                  <Chip color="danger" variant="flat" className="mr-1 mb-1">
                    {flag.issue}
                  </Chip>
                  <Chip color="danger" variant="flat" className="mr-1 mb-1">
                    {flag.issue}
                  </Chip>
                </div>
              )
            })
            }
          </div>
        </div>
        <p className="font-bold text-sm">Summary</p>
        <p className="mb-5">{session?.summary}</p>
      </div>
      <div className="px-2">
        <p className="font-bold">Transcript</p>
        <ScrollShadow className="w-[800px] h-[400px] whitespace-pre">
          {session?.transcript}
        </ScrollShadow>
      </div>
    </div>
  );
}
