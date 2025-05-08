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
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";
import { useStore } from "@/context/Context";

const LoginForm = () => {
  const [type, setType] = useState("password");

  const { setUserEmail } = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
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
              <Input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-dark">Password:</Label>
              <div className="relative">
                <Input
                  placeholder="Your Password"
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
              <Link
                to="/forget-password"
                className="text-xs font-medium text-primary text-right block "
              >
                Forget Password
              </Link>
            </div>

            <Button className="w-full h-10 font-semibold" disabled={isLoading}>
              Log In
            </Button>
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
              onClick={googleSignIn}
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
