import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useStore } from "@/context/Context";

const Info = () => {


  const { user } = useStore();
  


  return (
    <Card className="bg-white shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl text-dark">My Profile</CardTitle>
        <CardDescription className="text-base text-muted">
          Your profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-dark">Your Name:</Label>
          <Input disabled value={user?.displayName} className="!text-base" />
        </div>
        <div className="space-y-2">
          <Label className="text-dark">Your Email:</Label>
          <Input disabled value={user?.email} className="!text-base" />
        </div>
        <div className="space-y-2">
          <Label className="text-dark">Your Profile Link:</Label>
          <Input disabled value={user?.photoURL} className="!text-base" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Info;
