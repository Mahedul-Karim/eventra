import React from "react";
import { Badge } from "../ui/badge";

const Thumbnail = ({ src, category }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt=""
        height={450}
        className="object-cover rounded-2xl max-h-[450px] w-full"
      />
      <Badge className="bg-accent text-dark font-semibold absolute top-4 right-4 rounded-full sm:text-sm">
        {category}
      </Badge>
    </div>
  );
};

export default Thumbnail;
