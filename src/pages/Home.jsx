import HeroSlider from "@/components/home/HeroSlider";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import UsefulInformation from "@/components/home/UsefulInformation";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <UpcomingEvents />
      <UsefulInformation />
    </>
  );
};

export default Home;
