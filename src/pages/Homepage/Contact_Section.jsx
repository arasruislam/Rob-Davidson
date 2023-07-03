import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Primary_Button from "../../components/Buttons/Primary_Button";
import icon_1 from "../../assets/icon-1.png";
import icon_2 from "../../assets/icon-2.png";
import icon_3 from "../../assets/icon-3.png";

const Contact_Section = () => {
  return (
    <>
      <Box mt={20} mb={12} maxW={"container.md"} mx={"auto"}>
        <Box
          bgGradient="linear(133deg, #5D69E9 0%, #4225B6 100%)"
          px={12}
          py={16}
          borderRadius={16}
        >
          <Flex alignItems={"center"}>
            <Heading color={"white"} size={"xl"} textTransform={"uppercase"}>
              Work Inquiry
            </Heading>
            <Spacer />
            <Primary_Button title={`Let's Chat`} />
          </Flex>
        </Box>
        <Box textAlign={"center"} mt={8}>
          <Text
            size={"24px"}
            color={"#696871"}
            textTransform={"uppercase"}
            fontWeight={"medium"}
          >
            Stay connected
          </Text>
          <Heading size={"lg"} fontWeight={"bold"} my={2}>
            arasru01@gmail.com
          </Heading>
          <Box>
            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
              <Image cursor={"pointer"} w={"40px"} src={icon_1} alt="icon" />
              <Image cursor={"pointer"} w={"40px"} src={icon_2} alt="icon" />
              <Image cursor={"pointer"} w={"40px"} src={icon_3} alt="icon" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact_Section;
