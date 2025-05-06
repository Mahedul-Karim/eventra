import React, { useRef } from "react";
import { Link } from "react-router";
import { Button, buttonVariants } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { HERO_SLIDER } from "@/lib/data";
import Container from "../common/Container";

const HeroSlides = ({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="bg-[url('/assets/hero-1.avif')] bg-cover bg-center bg-no-repeat py-20 relative flex flex-col justify-center px-4 xs:px-6 sm:px-16 z-[1] h-full gap-4"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Container>
        <div className="absolute inset-0 bg-black/50 -z-1"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-[1.3] whitespace-pre-wrap">
          {title}
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-2">
          {description}
        </p>

        <Link
          to={buttonLink}
          className={`${buttonVariants({
            variant: "default",
          })} !rounded-full !bg-white !font-semibold h-10 !text-dark self-start px-8 hover:scale-[1.1]`}
        >
          {buttonText}
        </Link>
      </Container>
    </div>
  );
};

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="h-[100dvh] relative">
      <Swiper
        pagination={{ clickable: true }}
        loop
        modules={[Pagination]}
        className="h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {HERO_SLIDER.map((hero) => (
          <SwiperSlide key={hero.id} className="h-full">
            <HeroSlides
              imageUrl={hero.imageUrl}
              title={hero.title}
              description={hero.description}
              buttonLink={hero.buttonLink}
              buttonText={hero.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-3 absolute right-10 bottom-10 z-[2]">
        <Button
          variant="outline"
          className={
            "rounded-full bg-white/10 text-white backdrop-blur-[10px] border-transparent h-auto aspect-square hover:bg-white hover:text-dark"
          }
          onClick={() => swiperRef.current.slidePrev()}
        >
          <ChevronLeft className="size-4 xs:size-6" />
        </Button>
        <Button
          variant="outline"
          className={
            "rounded-full bg-white/10 text-white backdrop-blur-[10px] border-transparent h-auto aspect-square hover:bg-white hover:text-dark"
          }
          onClick={() => swiperRef.current.slideNext()}
        >
          <ChevronRight className="size-4 xs:size-6" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSlider;
