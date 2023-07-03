
import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Project
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </HStack>
      </>
    );
};

export default NavBar;