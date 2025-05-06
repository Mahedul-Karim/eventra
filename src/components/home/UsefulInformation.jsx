import React from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import Subtitle from "../common/section/Subtitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I register for an event?",
    answer:
      "You can register for an event by clicking on the event card and then selecting the 'Register' or 'Get Tickets' button. You'll be guided through the sign-up process from there.",
  },
  {
    question: "Is there a fee to attend events?",
    answer:
      "Some events are free, while others may require a registration or entry fee. The event details will clearly list any associated costs.",
  },
  {
    question: "Can I cancel or change my registration?",
    answer:
      "Yes, you can manage your registrations through your account dashboard. Please note that cancellation policies may vary depending on the event organizer.",
  },
  {
    question: "Are the events updated in real-time?",
    answer:
      "Yes, our platform regularly updates events to ensure you have access to the latest happenings in your area or interest category.",
  },
  {
    question: "How can I find events near me?",
    answer:
      "You can use the location filter on the explore page or allow location access to automatically show nearby events based on your current city.",
  },
  {
    question: "Can I submit my own event?",
    answer:
      "Absolutely! If you're hosting an event, you can submit it through the 'Add Event' section after logging in. We'll review and publish it upon approval.",
  },
];

const UsefulInformation = () => {
  return (
    <Container className="py-8 md:py-16">
      <Title>Useful Information</Title>
      <Subtitle>Frequest question&apos; asked by users</Subtitle>
      <div className="max-w-2xl mx-auto w-full">
        <Accordion
          type="single"
          collapsible
          className="mt-6 flex flex-col gap-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              value={faq.question}
              key={i}
              className="border border-border rounded-md px-4"
            >
              <AccordionTrigger className="cursor-pointer font-bold text-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted leading-[1.7]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default UsefulInformation;
