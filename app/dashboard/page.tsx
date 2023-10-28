"use client";

import React, { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import { useRouter, useSearchParams } from "next/navigation";
import SessionCard from "./components/Cards/SessionCard";
import SessionAccordion from "./components/SessionAccordion";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
// import Patients from "./components/Patients";

export default function Dashboard() {
  // const [tab, setTab] = useState("");
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const currentTab = searchParams.get("tab")

  // useEffect(() => {

  //     // If no query params were found default to settings
  //     if (!currentTab) {
  //         router.push(`?tab=settings`)
  //     }

  //     // Update state for the current tab, again defaulting to settings
  //     setTab(currentTab ? currentTab : "settings")

  // }, [currentTab])

  const data = {
    date: "Random date",
  };

  return (
    <>
      <div className="flex flex-row">
        <SideNav />
        <div className="flex flex-col w-[30%] bg-green-200 p-[20px]">
          <p className="mb-[20px] text-2xl">Sessions</p>
          <SessionCard props={data} />
          <SessionCard props={data} />
          <SessionCard props={data} />
          <SessionCard props={data} />
          <SessionCard props={data} />
        </div>
        <div className="flex-1 bg-red-200 p-[20px]">
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
            <Card className="w-1/2 mb-4 shadow-md bg-red-300">
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
      </div>
    </>
  );
}
