import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Update = () => {
  return (
    <Card className="bg-white shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl text-dark">Update Profile</CardTitle>
        <CardDescription className="text-base text-muted">
          Update your information here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="text-dark">Your Name:</Label>
            <Input placeholder="Your New Name" />
          </div>

          <div className="space-y-2">
            <Label className="text-dark">Your Profile Link:</Label>
            <Input placeholder="Your new image link" />
          </div>
          <Button className="font-semibold w-full">Update</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Update;
