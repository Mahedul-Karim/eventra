import HeroSlider from "@/components/home/HeroSlider";
import Newsletter from "@/components/home/Newsletter";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import UsefulInformation from "@/components/home/UsefulInformation";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <UpcomingEvents />
      <UsefulInformation />
      <Newsletter />
    </>
  );
};

export default Home;
