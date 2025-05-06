import React from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import Subtitle from "../common/section/Subtitle";
import { useLoaderData } from "react-router";
import EventCard from "../common/events/EventCard";

const UpcomingEvents = () => {
  const data = useLoaderData();

  return (
    <Container className="py-8 md:py-16">
      <Title>Upcoming Events</Title>
      <Subtitle>
        Discover more of the activities with our curated event collections.
      </Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mt-6">
        {data?.length > 0 &&
          data.map((card) => (
            <EventCard
              key={card.id}
              id={card.id}
              name={card.name}
              thumbnail={card.thumbnail}
              category={card.category}
              date={card.date}
              location={card.location}
              entry_fee={card.entry_fee}
            />
          ))}
      </div>
    </Container>
  );
};

export default UpcomingEvents;
