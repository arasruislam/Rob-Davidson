import { HStack } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <HStack
        justifyContent={{ base: "center", md: "flex-end" }}
        py="2"
        gap={[2, 4, 6, 8, 10]}
        fontWeight={"semibold"}
        color={"#3C3C3C"}
      >
        <a href="#home" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </a>
        <a href="#about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </a>
        <a href="#project" spy={true} smooth={true} offset={50} duration={500}>
          Project
        </a>
        <a href="#contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </a>
      </HStack>
    </>
  );
};

export default NavBar;
