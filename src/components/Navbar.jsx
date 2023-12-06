import React from "react";
import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/codeconv.png";

const Navbar = () => {
  return (
    <Box bg={"#0c0c0c"}>
      <Container maxW={"8xl"}>
        <HStack>
          <Image src={logo} width={"80px"} />
          <Text fontWeight={"bold"} fontSize={"22px"} color={"orange.500"}>Code</Text>
          <Text fontWeight={"bold"} fontSize={"22px"} color={"blue.300"}>Converter</Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;