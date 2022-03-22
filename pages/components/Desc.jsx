import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { GiSuspensionBridge } from "react-icons/gi";

function Desc() {
  return (
    <>
      <Box py="100px">
        <Heading
          textTransform="uppercase"
          color="#393E46"
          textAlign={{ base: "center", lg: "left" }}
        >
          who we are
        </Heading>
        <Flex
          justify="space-between"
          align="center"
          py={{ base: "25px", lg: "50px" }}
          flexDir={{ base: "column", md: "row", lg: "row" }}
          color="#393E46"
        >
          <Box width="350px" shadow="md" px="10px" py="50px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<GiSuspensionBridge size="26px" />}
            />
            <Text mt="10px">
              we are your bridge to that technological break and innovative
              concept you seek in the digital and I.T space
            </Text>
          </Box>
          <Box width="350px" shadow="md" px="10px" py="50px">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaRegChartBar size="26px" />}
            />
            <Text mt="10px">
              we brand your trend through our aesthetically pleasing visual
              representation and brand management consulting services
            </Text>
          </Box>
          <Box width="350px" shadow="md" px="10px" py="50px">
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<AiFillSafetyCertificate size="26px" />}
            />
            <Text mt="10px">
              we are your guide, and provide a safe landing for all your social
              media needs and queries
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Desc;
