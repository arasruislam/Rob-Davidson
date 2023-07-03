
import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
      <>
        <HStack
          justifyContent={"flex-end"}
          py="2"
          gap={[2, 4, 6, 8, 10]}
          fontWeight={"semibold"}
                color={"#3C3C3C"}
                bg={'cyan.300'}
        >
          <Link>About</Link>
          <Link>Work</Link>
          <Link>Project</Link>
          <Link>Contact</Link>
        </HStack>
      </>
    );
};

export default NavBar;