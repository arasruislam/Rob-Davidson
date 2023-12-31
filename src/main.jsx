import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./Routes/Routes.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </>
);
