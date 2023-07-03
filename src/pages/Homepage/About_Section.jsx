import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import about from "../../assets/about.png";
import Primary_Button from "../../components/Buttons/Primary_Button";

const About_Section = () => {
  return (
    <>
      <Box bg={"orange.200"}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ base: "1rem", lg: "3rem" }}
        >
          {/* About section left content */}
          <Box maxW={380}>
            <Image src={about} alt="Hero Section Image" />
          </Box>
          {/* Spacer */}
          <Spacer />
          {/* About section right content */}
          <Box >
            <Heading
              size={{ base: "lg", md: "xl" }}
              textTransform="uppercase"
              fontWeight="bold"
            >
              About
            </Heading>
            <Text textAlign={"justify"} color={"#3E3E3E"} mt={"27px"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Box>
              <Primary_Button title={"Download CV"} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default About_Section;
