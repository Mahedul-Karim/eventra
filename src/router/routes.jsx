import Loader from "@/components/common/Loader";
import Error from "@/components/error/Error";
import Root from "@/layout/Root";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import EventDetails from "@/pages/EventDetails";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import Profile from "@/pages/users/Profile";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await fetch("/events.json");
          return res;
        },
        hydrateFallbackElement: (
          <div className="h-[100vh] flex items-center justify-center">
            <Loader />
          </div>
        ),
      },

      {
        path: "/events",
        element: <Events />,
        loader: async () => {
          const res = await fetch("/events.json");
          return res;
        },
        hydrateFallbackElement: (
          <div className="h-[100vh] flex items-center justify-center">
            <Loader />
          </div>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/my-profile",
        element: <Profile />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/event/:eventId",
    element: <EventDetails />,
    loader: async () => {
      const res = await fetch("/events.json");
      return res;
    },
    hydrateFallbackElement: (
      <div className="h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
]);
