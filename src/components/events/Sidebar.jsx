import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { formateDate } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Sidebar = ({ date, location, entry_fee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleReservation = (e) => {
    e.preventDefault();

    if (!name || !email) {
      return toast.error("Please fill up the form properly");
    }

    toast.success("Reservetion successfull!");
    setName("");
    setEmail("");
  };

  return (
    <aside>
      <Card className="border-border shadow-none">
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-start gap-2 text-dark">
            <Calendar className="size-6" />
            <div>
              <h3 className="text-dark font-bold">Date:</h3>
              <p className="">{formateDate(date)}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-dark">
            <MapPin className="size-6" />
            <div>
              <h3 className="text-dark font-bold">Location:</h3>
              <p className="">{location}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-dark">
            <Ticket className="size-6" />
            <div>
              <h3 className="text-dark font-bold">Cost:</h3>
              <p className="">{entry_fee}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-border shadow-none mt-8 gap-2">
        <CardHeader>
          <CardTitle className="text-dark text-lg">Reserve Seat:</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleReservation}>
            <Input
              placeholder="Your Name"
              className={"h-10"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Your Email"
              className={"h-10"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="w-full hover:bg-primary hover:text-white h-10"
              variant="outline"
            >
              Reserve Seat
            </Button>
          </form>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
