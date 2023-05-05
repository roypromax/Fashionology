import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    MenuItem,
  } from '@chakra-ui/react'

  import { Register } from "./Register";

export const RegisterButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
        <MenuItem onClick={onOpen} >Register</MenuItem>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sign-Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Register onClose={onClose}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
