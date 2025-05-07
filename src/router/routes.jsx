import Loader from "@/components/common/Loader";
import Error from "@/components/error/Error";
import Root from "@/layout/Root";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import EventDetails from "@/pages/EventDetails";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
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
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
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
