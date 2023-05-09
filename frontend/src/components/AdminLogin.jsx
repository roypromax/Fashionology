// import { Box, Button, Heading, Input, Progress, useToast } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../Redux/loginReducer/action";

// export const AdminLogin = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { isLoading } = useSelector((store) => store.loginReducer);
//   const toast = useToast();

//   const dispatch = useDispatch();

//   const handleSumbit = () => {
//     const payload = {
//       email,
//       password,
//     };
//     dispatch(login(payload, onClose, toast, setEmail, setPassword));
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <Box m="auto" display={"grid"} gap="20px">
//       {isLoading && <Progress size="xs" isIndeterminate />}
//       <Heading textAlign={"center"}>Login</Heading>
//       <Input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter Your Email"
//       />
//       <Input
//         value={password}
//         type={"password"}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter Your Password"
//       />

//       <Button onClick={handleSumbit} colorScheme={"#d88c34;"}>
//         Login
//       </Button>
//     </Box>
//   );
// };
