import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import Primary_Button from "../../components/Buttons/Primary_Button";
import hero from "../../assets/hero.png";
import useReval from "../../hooks/useReval";

const Hero_Section = () => {
  useReval("right", ".hero_image");
  useReval("left", ".hero_content");

  return (
    <div className="home" id="home">
      <Box>
        <Flex
          flexDirection={{ base: "column-reverse", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Hero Section Left Content */}
          <Box
            mt={{ base: "1.5rem", lg: "0" }}
            alignSelf={{ md: "start", lg: "center" }}
            className="hero_content"
          >
            <Heading
              size={{ base: "3xl", md: "4xl" }}
              textTransform="uppercase"
              fontWeight="black"
            >
              hello, I'm
            </Heading>
            <Heading
              size={{ base: "3xl", md: "4xl" }}
              textTransform="uppercase"
              fontWeight="black"
              mb="18px"
              color={"#FF8367"}
            >
              Rob Davidson
            </Heading>
            <Text color={"#3E3E3E"}>
              A full stack allaround designer that placerat in massa consectetur
            </Text>
            <Box mb={{ base: ".5rem", lg: "0" }} mt={"36px"}>
              <Primary_Button title={"Hire Me"} />
            </Box>
          </Box>
          {/* Spacer */}
          <Spacer />
          {/* Hero Section Right Content */}
          <Box maxW={380} className="hero_image">
            <Image src={hero} alt="Hero Section Image" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero_Section;
