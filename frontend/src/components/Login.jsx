import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";

export const Login = () => {
  return (
    <Box m="auto" display={"grid"} gap="20px">
      <Heading textAlign={"center"}>Login</Heading>
      <Input
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
      <Input
        // value={password}
        type={"password"}
        // onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />

      <Button  colorScheme={"rgb(22, 122, 146)"}>
        Login
      </Button>
    </Box>
  );
};
