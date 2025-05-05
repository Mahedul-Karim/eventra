import React from "react";
import { Link, useRouteError } from "react-router";
import Container from "../common/Container";
import { buttonVariants } from "../ui/button";

const Error = () => {
  const error = useRouteError();

  return (
    <Container className="py-10">
      <div className="flex items-center justify-center">
        <img src="/assets/error.svg" alt="" className="max-h-[350px]" />
      </div>
      <p className="my-4 text-center text-muted whitespace-pre-wrap">
        {error?.message ||
          "Oops! The page you're looking for seems to have taken a different path.\n It might be under construction or doesn't exist."}
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className={`${buttonVariants({
            variant: "default",
          })} !rounded-full`}
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default Error;
