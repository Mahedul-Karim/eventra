import Container from "@/components/common/Container";
import Info from "@/components/profile/Info";
import Update from "@/components/profile/Update";
import ProtectedRoutes from "@/router/ProtectedRoutes";
import React from "react";

const Profile = () => {
  return (
    <ProtectedRoutes>
      <main className="bg-background py-8 md:py-16 ">
        <Container className="grid md:grid-cols-2 gap-8">
          <Info />
          <Update />
        </Container>
      </main>
    </ProtectedRoutes>
  );
};

export default Profile;
