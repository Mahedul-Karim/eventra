import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "../nav/Nav";
import NavActions from "../nav/NavActions";
import MobileNav from "../nav/MobileNav";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  const pathname = location?.pathname;

  return (
    <header
      className={` ${
        pathname === "/"
          ? "fixed z-[4] w-full top-10"
          : "bg-white border-b border-border"
      }`}
    >
      <Container
        className={`flex items-center justify-between bg-white ${
          pathname === "/" ? "rounded-full shadow-md px-4 py-2" : "py-4"
        }`}
      >
        <Logo />
        <Nav className="hidden md:block" />
        <NavActions className="hidden md:flex" />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
