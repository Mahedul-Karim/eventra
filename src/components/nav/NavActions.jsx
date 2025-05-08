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
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { toast } from "sonner";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const { user } = useStore();

  const navigate = useNavigate();

  const fallbackName = user?.displayName?.split(" ");

  const logOut = () => {
    signOut(auth)
      .then(() => toast.success("Logged out successfully"))
      .catch(() => toast.error("Something went wrong!"));
  };

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
                      <AvatarImage src={user?.photoURL} />
                      <AvatarFallback>
                        {fallbackName?.[0]?.[0] + fallbackName?.[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
              </SheetCloseWrapper>
              <TooltipContent>
                <p>{user?.displayName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SheetCloseWrapper clickOnClose={closeOnClick}>
            <Button
              variant="outline"
              className="border-error font-semibold text-error hover:bg-error hover:text-white grow rounded-md md:rounded-full px-5"
              size="sm"
              onClick={logOut}
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
