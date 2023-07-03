import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import project_1 from "../../assets/project-1.png";
import project_2 from "../../assets/project-2.png";
import project_3 from "../../assets/project-3.png";

const Project_Section = () => {
  return (
    <>
      <Box my={"3rem"} bg={"facebook.200"}>
        <Heading
          size={{ base: "lg", md: "xl" }}
          textTransform="uppercase"
          fontWeight="bold"
          textAlign={"center"}
          mb={"2rem"}
        >
          <Text as="span" color={"#FF8367"}>
            Latest
          </Text>{" "}
          working project
        </Heading>

        <Box>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {/* Card 1 */}
            <Box>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={project_1}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Power-x-gym (gym website)</Heading>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
            {/* Card 2 */}
            <Box>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={project_2}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Creative Agency</Heading>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
            {/* Card 3 */}
            <Box>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={project_3}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Hard Rock Music</Heading>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Project_Section;
