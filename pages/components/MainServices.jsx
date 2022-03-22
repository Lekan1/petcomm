import React from "react";
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
import { GiSecretBook, GiSuspensionBridge } from "react-icons/gi";
import { BsBrushFill, BsCodeSlash, BsMusicNote } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import {
  MdCampaign,
  MdNetworkCheck,
  MdOutlineWorkOff,
  MdWorkOutline,
} from "react-icons/md";

function MainServices() {
  return (
    <>
      <Box my="100px" bg="#FAFAFA" py="5%">
        <Heading
          py="10px"
          textTransform="uppercase"
          color="#393E46"
          textAlign={{ base: "center", lg: "center" }}
        >
          Our Services
        </Heading>

        <Flex
          justify="space-between"
          px="10%"
          textAlign="center"
          py="3%"
          flexWrap="wrap"
        >
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<BsCodeSlash size="26px" />}
            />
            <Text mt="10px">Web design and development</Text>
          </Box>
          {/* 2nd */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<BsBrushFill size="26px" />}
            />
            <Text mt="10px">Graphics design and illustration</Text>
          </Box>
          {/* 2nd */}

          {/* 3rd */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaInstagram size="26px" />}
            />
            <Text mt="10px">Social media management</Text>
          </Box>
          {/* 3rd */}
          {/* 4th */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<MdOutlineWorkOff size="26px" />}
            />
            <Text mt="10px">Digital Branding and Engagement</Text>
          </Box>
          {/* 4th */}
        </Flex>
        {/* 2nd Flex */}
        <Flex
          justify="space-between"
          px={["10%", "10%", "7%", "7%"]}
          textAlign="center"
          mt="40px"
          flexWrap="wrap"
        >
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<GiSecretBook size="26px" />}
            />
            <Text mt="10px">Copywriting</Text>
          </Box>
          {/* 2nd */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<FaTwitter size="26px" />}
            />
            <Text mt="10px">Social media marketing</Text>
          </Box>
          {/* 2nd */}

          {/* 3rd */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<MdWorkOutline size="26px" />}
            />
            <Text mt="10px">Brand management and consultancy</Text>
          </Box>
          {/* 3rd */}
          {/* 4th */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<MdCampaign size="26px" />}
            />
            <Text mt="10px">Online campaigns and ads.</Text>
          </Box>
          {/* 4th */}
        </Flex>
        {/* 2nd Flex */}
        <Flex
          justify="space-between"
          textAlign="center"
          mt="40px"
          px={["10%", "10%", "30%", "30%"]}
        >
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<MdNetworkCheck size="26px" />}
            />
            <Text mt="10px">Content marketing</Text>
          </Box>
          {/* 2nd */}
          <Box width="150px" shadow="md" px="5px" py="25px">
            <IconButton
              textAlign="center"
              colorScheme="blue"
              aria-label="Search database"
              icon={<BsMusicNote size="26px" />}
            />
            <Text mt="10px">Content creation </Text>
          </Box>
          {/* 2nd */}
        </Flex>
      </Box>
    </>
  );
}

export default MainServices;
