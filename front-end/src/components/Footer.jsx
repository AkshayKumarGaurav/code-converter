import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleGithub = () => {
    window.open("https://github.com/AkshayKumarGaurav/code-convertor", "_blank");
  };

  return (
    <Box padding={"10px 20px 10px 20px"} bg={"#242424"} color={"orange.500"}>
      <Stack
        direction={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-between"}
      >
        <Text>@2023 Code Converter</Text>
        <HStack spacing={4}>
          <FaGithub
            fontSize={"30px"}
            cursor={"pointer"}
            onClick={handleGithub}
          />
          <Text>akshaykumargaurav@gmail.com</Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;