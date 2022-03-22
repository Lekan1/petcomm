import {
  Box,
  Heading,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <>
      <Box
        p="4%"
        minH={{ base: "50vh", md: "60vh", lg: "100vh" }}
        backgroundImage={{ base: "none", lg: "/bm2.png" }}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Stack width={{ base: "100%", xl: "500px" }} py="30px">
          <Heading
            fontSize={{
              base: "24px",
              lg: "62px",
            }}
            color="#393E46"
          >
            Digital Marketing Agency With A Swag
          </Heading>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            laudantium totam aperiam
          </Text>
          <Button colorScheme={"blue"}>Make Booking</Button>
        </Stack>
      </Box>
    </>
  );
}

export default Hero;
