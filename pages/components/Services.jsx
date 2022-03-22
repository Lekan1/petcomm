import React from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function Services() {
  return (
    <>
      <Box
        pt="100px"
        bgImage="/vectr.png"
        bgSize="200px"
        bgPos="top right"
        bgRepeat="no-repeat"
      >
        <Stack px="5%">
          <Heading
            textTransform="uppercase"
            color="#393E46"
            textAlign={{ base: "center", lg: "left" }}
          >
            why choose us
          </Heading>
          <Flex align="center" flexDir={{ base: "column", lg: "row" }}>
            <Box>
              <Text fontSize="22px">
                With years of hands-on experience, our team of experts are very
                well acquainted with the concerns and challenges businesses and
                companies encounter and are committed to providing a positive
                ROI, and increased productivity that are cost effective and
                pocket friendly. So, who would you rather be, the shark of the
                ocean or the fish of the ocean?
              </Text>
              <Button colorScheme={"blue"} mt="10px">
                Book a free consultation, talk to an expert today!
              </Button>
            </Box>

            <Image src="/service.png" width="700px" alt="service-logo" />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default Services;
