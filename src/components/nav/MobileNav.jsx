import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import SheetIcon from "./SheetIcon";
import Logo from "../common/Logo";
import Nav from "./Nav";
import NavActions from "./NavActions";

const MobileNav = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <SheetIcon />
        </SheetTrigger>
        <SheetContent side="left" className="border-border" >
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center" >
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only" >
              This is mobile nav
            </SheetDescription>
          </SheetHeader>
          <Nav className="px-4" closeOnClick />
          <SheetFooter>
            <NavActions closeOnClick />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
