import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/Context";
import Container from "@/components/common/Container";
import { Input } from "@/components/ui/input";

const ForgetPassword = () => {
  const { userEmail } = useStore();

  const [email, setEmail] = useState(userEmail || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://www.gmail.com", "_blank");
  };

  return (
    <main className="bg-background">
      <title>Eventra - Reset Password</title>
      <Container className="py-8 md:py-16">
        <Card className="border-none shadow-none max-w-[460px] mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-dark">
              Reset Your Password
            </CardTitle>
            <CardDescription className="text-base text-muted">
              Enter your email to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <Button className="w-full h-10 font-semibold">
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
};

export default ForgetPassword;
