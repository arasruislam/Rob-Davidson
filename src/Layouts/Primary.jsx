import { Outlet } from "react-router-dom";
import NavBar from "../pages/Header/NavBar";
import { Container } from "@chakra-ui/react";

const Primary = () => {
  return (
    <>
      <Container maxW={{base:"full", md:"container.lg"}}>
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

export default Primary;
