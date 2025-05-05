import { NAV_DATA } from "@/lib/data";
import React from "react";
import { Link, useLocation } from "react-router";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Nav = ({ className = "", closeOnClick = false }) => {
  const location = useLocation();

  return (
    <nav className={`${className}`}>
      <ul className="flex flex-col md:flex-row items-center gap-2">
        {NAV_DATA.map((nav, i) => (
          <li key={i} className="w-full md:w-auto">
            <SheetCloseWrapper clickOnClose={closeOnClick}>
              <Link
                to={nav.to}
                className={`px-4 transition-all duration-300  font-medium hover:bg-primary/10 hover:text-primary rounded-md md:rounded-full py-2 md:py-1 text-[15px]  flex items-center justify-center ${
                  location.pathname === nav.to
                    ? "bg-primary/10 text-primary"
                    : "bg-transparent text-dark"
                } `}
              >
                {nav.label}
              </Link>
            </SheetCloseWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
