import { Button, Input, Stack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { isValidGithubLink } from "../utils/utils";
import { FaGithub } from "react-icons/fa";

const GithubLink = ({ handleGithubPaste, loading }) => {
  const [link, setLink] = useState("");

  //toast
  const toast = useToast();

  //handlePaste
  const handlePaste = () => {
    if (isValidGithubLink(link)) {
      handleGithubPaste(link);
      setLink("");
    } else {
      toast({
        title: "Invalid Github file URL!",
        description:
          "Please enter a valid GitHub file URL, like 'https://github.com/ownername/reponame/filename.format",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Stack direction={{ base: "column", md: "row", lg: "row" }} alignItems={"center"}>
      <Input
        width={{ base: "310px", md: "400px", lg: "400px" }}
        type="text"
        bg={"#010409"}
        color={"white"}
        placeholder="Enter GitHub file URL"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        isDisabled={loading}
      />
      <Button
        bg={"#010409"}
        color={"white"}
        _hover={{ bg: "green.600" }}
        leftIcon={<FaGithub />}
        onClick={handlePaste}
        width={"110px"}
        isDisabled={loading}
      >
        Paste
      </Button>
    </Stack>
  );
};

export default GithubLink;