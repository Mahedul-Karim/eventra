import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "../nav/SheetCloseWrapper";

const Logo = ({ closeOnClick = false }) => {
  return (
    <SheetCloseWrapper clickOnClose={closeOnClick}>
      <Link to="/" className="flex items-center gap-1">
        <img
          src="/assets/logo.png"
          alt=""
          className="size-6 xs:size-7"
        />
        <p className="xs:text-lg  font-bold text-primary">Eventra</p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
