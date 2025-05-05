import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "../nav/Nav";
import NavActions from "../nav/NavActions";
import MobileNav from "../nav/MobileNav";

const Header = () => {
  return (
    <header>
      <Container className="py-3 flex items-center justify-between">
        <Logo />
        <Nav className="hidden md:block" />
        <NavActions className="hidden md:flex" />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
