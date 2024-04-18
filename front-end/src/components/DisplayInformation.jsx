import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const DisplayInformation = ({  onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"red"}>Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color={"black"}>
            We regret to inform you that the{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              OpenAI Key limit
            </span>{" "}
            for this application has been exhausted. As a result, certain
            features may not be available at the moment. We apologize for any
            inconvenience this may cause.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DisplayInformation;