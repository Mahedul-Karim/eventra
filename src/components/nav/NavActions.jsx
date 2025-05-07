import React from "react";
import { Button } from "../ui/button";
import { useStore } from "@/context/Context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SheetCloseWrapper from "./SheetCloseWrapper";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const { user } = useStore();

  const navigate = useNavigate();

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {user ? (
        <>
          <TooltipProvider>
            <Tooltip>
              <SheetCloseWrapper clickOnClose={closeOnClick}>
                <TooltipTrigger asChild>
                  <Link to="/my-profile">
                    <Avatar className="size-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
              </SheetCloseWrapper>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SheetCloseWrapper clickOnClose={closeOnClick}>
            <Button
              variant="outline"
              className="border-error font-semibold text-error hover:bg-error hover:text-white grow rounded-md md:rounded-full px-5"
              size="sm"
            >
              Log Out
            </Button>
          </SheetCloseWrapper>
        </>
      ) : (
        <SheetCloseWrapper clickOnClose={closeOnClick}>
          <Button
            className={"font-semibold w-full rounded-md md:rounded-full px-5"}
            size={"sm"}
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        </SheetCloseWrapper>
      )}
    </div>
  );
};

export default NavActions;
