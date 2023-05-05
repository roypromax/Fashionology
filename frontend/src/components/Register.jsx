import { Box, Button, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

export const Register = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box m="auto" display={"grid"} gap="20px" borderRadius={"16px"}>
    {/* {isLoading && (
       <Progress
         isIndeterminate
         hasStripe={true}
         isAnimated={true}
         size="sm"
       />
     )} */}
   <Heading textAlign={"center"}>Register Now</Heading>
   <Input
     type={"text"}
     value={firstName}
     onChange={(e) => setFirstName(e.target.value)}
     placeholder="Enter Your First Name"
     required
   />
   <Input
     type={"text"}
     value={lasttName}
     onChange={(e) => setLastName(e.target.value)}
     placeholder="Enter Your Last Name"
     required
   />
   <Input
     type="number"
     value={number}
     onChange={(e) => setNumber(e.target.value)}
     placeholder="Enter Your Mobile Number"
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

   <Button colorScheme={"rgb(22, 122, 146)"} >Register</Button>
 </Box>
  )
}
