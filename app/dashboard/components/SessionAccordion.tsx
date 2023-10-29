import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SessionAccordion() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted" selectionMode="multiple">
      <AccordionItem key="1" aria-label="Transcript" title="Transcript">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Notes" title="Notes">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="GPT Insights??" title="GPT Insights??">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
