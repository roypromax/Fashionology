import React from "react";
import { Login } from "./Login";
import {
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

export const LoginButton = ({ isOpen, onOpen, onClose }) => {
  return (
    <div>
      {" "}
      <MenuItem onClick={onOpen}>Login</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Login onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
