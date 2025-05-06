import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { formateDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const EventCard = ({
  id,
  thumbnail,
  name,
  category,
  date,
  location,
  entry_fee,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="border-none shadow-md pt-0 overflow-clip gap-3 justify-between">
      <CardHeader className={"px-0 relative"}>
        <img
          src={thumbnail}
          alt=""
          className="max-h-[250px] object-cover w-full"
        />
        <Badge className="rounded-full absolute top-4 right-4 bg-accent text-dark font-semibold">
          {category}
        </Badge>
      </CardHeader>
      <CardContent className="px-2 xs:px-4 sm:px-6" >
        <h2 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-dark">{name}</h2>
        <div className="hidden sm:flex flex-col gap-3 mt-2">
          <p className="flex items-center gap-1 text-muted text-xs xs:text-sm">
            <Calendar size={16} />
            {formateDate(date)}
          </p>
          <p className="flex items-center gap-1 text-muted text-xs xs:text-sm">
            <MapPin size={16} />
            {location}
          </p>
          <p className="flex items-center gap-1 text-muted text-xs xs:text-sm">
            <Ticket size={16} />
            {entry_fee}
          </p>
        </div>
      </CardContent>
      <CardFooter className="px-2 xs:px-4 sm:px-6">
        <Button
          variant="outline"
          className="w-full border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white"
          onClick={() => navigate(`/event/${id}`)}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
