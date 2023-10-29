"use client";

import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Chip, Divider, ScrollShadow, Spinner } from "@nextui-org/react";
import parse from 'html-react-parser';


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


  const html = `<span style="color: red; text-decoration: underline; font-weight: bold"">{errors}</span>`

  return (
    <div>
      {!session.timestamp ? <p></p>
        :
        <div>
          <div className="px-2">
            <div className="flex h-[60px] items-center mb-[20px]">
              <p className=" text-2xl ">{selectedPatient?.name}'s Session {dateFormatter(session?.timestamp)}</p>
              {/* <Button>Close</Button> */}
            </div>
            <div className="flex flex-col mb-5">
              <p className="font-bold text-sm mb-2">Flags</p>
              <div className="gap-4">
                {session?.flags?.map((flag: any) => {
                  return (
                    <div>
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
            <p className="mb-5">{session?.summary ? session?.summary : <Spinner />}</p>
          </div>
          <div className="px-2 flex flex-col">
            <div className="border-1 p-2">
              <p className="font-bold">Labeled Transcript</p>
              <ScrollShadow className="w-[800px] h-max-[200px] overflow-y-auto whitespace-pre-wrap">

                {session?.annotated_transcript ? parse(session?.annotated_transcript) : <div><p>Pending...</p><Spinner /></div>}
              </ScrollShadow>
            </div>
            <div className="border-1 p-2">
              <p className="font-bold">Raw Transcript</p>
              <ScrollShadow className="w-[800px] h-max-[200x]">
                {session?.transcript ? session?.transcript : <Spinner />}
              </ScrollShadow>
            </div>
          </div>
        </div>

      }
    </div>
  );
}
