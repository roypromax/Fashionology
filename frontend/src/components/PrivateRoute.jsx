import { useDisclosure, useToast } from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export const PrivateRoute = ({ children }) => {
  const { onOpen } = useDisclosure();
  const toast = useToast();

  const { userName } = useSelector((store) => {
    return store.loginReducer;
  });

  if (userName !== "") {
    return children;
  } else {
    toast({
      title: "Please login first",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    <LoginButton onOpen={onOpen} />;
  }
};
