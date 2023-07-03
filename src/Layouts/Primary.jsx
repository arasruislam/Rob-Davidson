import MessengerCustomerChat from "react-messenger-customer-chat";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Header/NavBar";
import { Container } from "@chakra-ui/react";

const Primary = () => {
  return (
    <>
      <Container maxW={{ base: "full", md: "container.lg" }}>
        <NavBar />
        <Outlet />
        <MessengerCustomerChat
          pageId="103206092733054"
          appId="1286495398668904"
        />
      </Container>
    </>
  );
};

export default Primary;
