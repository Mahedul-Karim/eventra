import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "../nav/Nav";
import NavActions from "../nav/NavActions";
import MobileNav from "../nav/MobileNav";

const Header = () => {
  return (
    <header className="fixed z-[2] w-full top-10" >
      <Container className="py-2 flex items-center justify-between bg-white px-4 rounded-full shadow-md">
        <Logo />
        <Nav className="hidden md:block" />
        <NavActions className="hidden md:flex" />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
