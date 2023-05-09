import { Box, Button, Heading, Input, Progress, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../Redux/registerReducer/action";

export const Register = ({ onClose }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const {isLoading} = useSelector(store=>store.registerReducer)

  const dispatch = useDispatch();

  const handleRegister = () => {
    const registerData = {
      name,
      email,
      password,
      phoneNumber,
      address,
    };

    dispatch(
      SignUp(
        registerData,
        onClose,
        toast,
        setName,
        setAddress,
        setPhoneNumber,
        setEmail,
        setPassword
      )
    );
  };
  return (
    <Box m="auto" display={"grid"} gap="20px" borderRadius={"16px"}>
       {isLoading && <Progress size="xs" isIndeterminate />}
      <Heading textAlign={"center"}>Register Now</Heading>
      <Input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <Input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        required
      />
      <Input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        required
      />
      <Input
        type="number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter Your Mobile Number"
        required
      />
      <Input
        type={"text"}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Your Address"
        required
      />

      <Button onClick={handleRegister} colorScheme={"#4B5666;"}>
        Register
      </Button>
    </Box>
  );
};
