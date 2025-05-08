import React, { useState } from "react";
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
import { useStore } from "@/context/Context";
import { toast } from "sonner";
import { updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase.config";

const Update = () => {
  const { user, setUpdatedUser } = useStore();

  const [name, setName] = useState(user?.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");

  const [isLoading, setIsLoading] = useState(false);

  const updateUserProfile = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

       await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });


      await auth.currentUser.reload();
     
      setUpdatedUser(auth.currentUser);

      toast.success("User updated successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-xl text-dark">Update Profile</CardTitle>
        <CardDescription className="text-base text-muted">
          Update your information here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={updateUserProfile}>
          <div className="space-y-2">
            <Label className="text-dark">Your Name:</Label>
            <Input
              placeholder="Your New Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-dark">Your Profile Link:</Label>
            <Input
              placeholder="Your new image link"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <Button className="font-semibold w-full" disabled={isLoading}>
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Update;
