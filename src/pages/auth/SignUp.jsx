import SignupForm from "@/components/auth/SignupForm";
import Container from "@/components/common/Container";
import React from "react";

const SignUp = () => {
  return (
    <main className="bg-background">
      <title>Eventra - Create Account</title>
      <Container className="py-8 md:py-16">
        <SignupForm />
      </Container>
    </main>
  );
};

export default SignUp;
