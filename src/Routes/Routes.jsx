import { createBrowserRouter } from "react-router-dom";
import Primary from "../Layouts/Primary";
import Homepage from "../pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
