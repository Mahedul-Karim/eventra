import React from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import Subtitle from "../common/section/Subtitle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div className="bg-background py-8 md:py-16">
      <Container className="flex flex-col items-center justify-center">
        <Title>Subscribe to Our Newsletter</Title>
        <Subtitle>Stay updated with our latest news and events</Subtitle>
        <div className="mt-4 flex flex-col xs:flex-row items-center gap-2 justify-center max-w-[500px] w-full">
          <Input
            type={"text"}
            placeholder="Enter your email"
            className={"xs:h-10 bg-white border-border"}
          />
          <Button className={"xs:h-10 font-semibold w-full xs:w-auto"}>Subscribe</Button>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
