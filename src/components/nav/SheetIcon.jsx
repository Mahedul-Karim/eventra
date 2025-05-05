import React from "react";

const SheetIcon = () => {
  return (
    <div className="w-[30px] flex flex-col gap-1 cursor-pointer">
      <span
          className={`h-[3px] w-[60%] bg-dark block rounded-md origin-center`}
        />
        <span
          className={`h-[3px] w-full bg-dark block rounded-md origin-center `}
        />
        <span
          className={`h-[3px] ml-auto w-[60%] bg-dark block rounded-md origin-center`}
        />
    </div>
  );
};

export default SheetIcon;
