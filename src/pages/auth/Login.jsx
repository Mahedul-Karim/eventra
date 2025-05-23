import LoginForm from "@/components/auth/LoginForm";
import Container from "@/components/common/Container";
import React from "react";

const Login = () => {
  return (
    <main className="bg-background">
      <title>Eventra - Login</title>
      <Container className="py-8 md:py-16">
        <LoginForm />
      </Container>
    </main>
  );
};

export default Login;
