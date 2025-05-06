import Container from "@/components/common/Container";
import Error from "@/components/error/Error";
import Main from "@/components/events/Main";
import Sidebar from "@/components/events/Sidebar";
import Thumbnail from "@/components/events/Thumbnail";
import Footer from "@/components/header/Footer";
import Header from "@/components/header/Header";
import ProtectedRoutes from "@/router/ProtectedRoutes";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const data = useLoaderData();

  const { eventId } = useParams();

  const event = data?.find((eve) => eve.id === Number(eventId));

  if (!event) {
    return <Error />;
  }

  return (
    <ProtectedRoutes>
      <Header />
      <Container className="py-8 md:py-16">
        <Thumbnail src={event?.thumbnail} category={event?.category} />
        <main className="grid md:grid-cols-[1fr_0.5fr] gap-4 mt-8">
          <Main name={event?.name} description={event?.description} />
          <Sidebar
            date={event?.date}
            location={event?.location}
            entry_fee={event?.entry_fee}
          />
        </main>
      </Container>
      <Footer />
    </ProtectedRoutes>
  );
};

export default EventDetails;
