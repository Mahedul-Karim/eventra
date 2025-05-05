import React, { Fragment } from "react";
import { SheetClose } from "../ui/sheet";

const SheetCloseWrapper = ({ children, clickOnClose = false }) => {
  return (
    <>
      {clickOnClose ? (
        <SheetClose asChild>{children}</SheetClose>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </>
  );
};

export default SheetCloseWrapper;
