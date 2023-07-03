import { Button } from '@chakra-ui/react';

const Primary_Button = () => {
    return (
      <>
        <Button
          mt={"36px"}
          py={6}
          px={8}
          transition={"all 0.3s"}
          fontWeight={"normal"}
          color="white"
          bgGradient="linear(to-t, #FF8063 0%, #F46060 100%)"
          _hover={
            ({
              bgGradient: "linear(to-t, #F46060 100%, #FF8063 0%)",
            },
            { transform: "scale(0.95)" })
          }
          _active={{ transform: "scale(0.95)" }}
        >
          Hire Me
        </Button>
      </>
    );
};

export default Primary_Button;