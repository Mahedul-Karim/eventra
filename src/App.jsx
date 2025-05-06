import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right"/>
    </>
  );
}

export default App;
