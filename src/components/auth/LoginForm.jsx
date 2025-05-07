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
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const LoginForm = () => {
  const [type, setType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Card className="border-none shadow-none max-w-[460px] mx-auto">
        <CardHeader>
          <CardTitle className="text-xl text-dark">
            Sign in to your account
          </CardTitle>
          <CardDescription className="text-base text-muted">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-dark">Email:</Label>
              <Input placeholder="Email Address" type="email" />
            </div>
            <div className="space-y-2">
              <Label className="text-dark">Password:</Label>
              <div className="relative">
                <Input placeholder="Your Password" type={type} />
                <button
                  className="absolute right-4 cursor-pointer top-[50%] -translate-y-[50%]"
                  type="button"
                  onClick={() => {
                    const newType = type === "password" ? "text" : "password";
                    setType(newType);
                  }}
                >
                  {type === "password" ? (
                    <EyeOff size={18} className="text-dark" />
                  ) : (
                    <Eye size={18} className="text-dark" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full h-10 font-semibold">Log In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col">
          <div className="flex items-center gap-2 w-full">
            <div className="h-[1.5px] border border-solid border-border grow" />
            <p className="text-muted">OR</p>
            <div className="h-[1.5px] border border-solid border-border grow" />
          </div>
          <div className="my-4 w-full">
            <Button
              variant="outline"
              className="bg-transparent w-full border-border flex items-center gap-2 text-dark"
            >
              <img src="/assets/google.svg" alt="" className="size-5" />
              Google
            </Button>
          </div>
          <p className="text-sm font-medium text-dark">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="text-primary">
              Create One
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
