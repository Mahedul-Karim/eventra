import Container from "@/components/common/Container";
import EventCard from "@/components/common/events/EventCard";
import ProtectedRoutes from "@/router/ProtectedRoutes";
import React from "react";
import { useLoaderData } from "react-router";

const Events = () => {
  const data = useLoaderData();
  return (
    <ProtectedRoutes>
      <Container className="py-8 md:py-16">
        <title>Eventra - Upcoming Events</title>
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
    </ProtectedRoutes>
  );
};

export default Events;
