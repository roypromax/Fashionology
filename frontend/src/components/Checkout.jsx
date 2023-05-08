import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";

export const Checkout = () => {
  return (
    <Box style={{ background: "rgb(22,122,146)" }}>
      <Box maxW="800px" mx="auto" p="6">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="6"
        >
          <GridItem>
            <VStack
              spacing="6"
              bg="white"
              p="6"
              borderRadius="md"
              boxShadow="md"
            >
              <Box w="100%">
                <Heading size="md">Billing Information</Heading>
                <FormControl mt="4">
                  <FormLabel>
                    <MdDriveFileRenameOutline /> Name
                  </FormLabel>
                  <Input type="text" borderRadius="md" />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel>
                    <FaMapMarkerAlt /> Address
                  </FormLabel>
                  <Input type="text" borderRadius="md" />
                </FormControl>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing="4"
                  mt={"4"}
                >
                  <FormControl flex="1">
                    <FormLabel>
                      <FaMapMarkerAlt /> City
                    </FormLabel>
                    <Input type="text" borderRadius="md" />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaMapMarkerAlt /> State
                    </FormLabel>
                    <Input type="text" borderRadius="md" />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaMapMarkerAlt /> Pin Code
                    </FormLabel>
                    <Input type="text" borderRadius="md" />
                  </FormControl>
                </Stack>
              </Box>
              <Box w="100%">
                <Heading size="md">Payment Information</Heading>
                <FormControl mt="4">
                  <FormLabel>
                    <FaCreditCard /> Card Number
                  </FormLabel>
                  <Input type="text" borderRadius="md" />
                </FormControl>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing="4"
                  mt={"4"}
                >
                  <FormControl flex="1">
                    <FormLabel>
                      <HiOutlineCurrencyDollar /> Expiration Date
                    </FormLabel>
                    <Input type="text" borderRadius="md" />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaCreditCard /> CVV
                    </FormLabel>
                    <Input type="text" borderRadius="md" />
                  </FormControl>
                </Stack>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Box bg="white" p="6" borderRadius="md" boxShadow="md">
              <Heading size="md" mb="4">
                Order Summary
              </Heading>
              <Box borderBottomWidth="1px" py="2">
                <Stack direction="row" justify="space-between">
                  <Text>Product Name</Text>
                  <Text>23234</Text>
                </Stack>
              </Box>
              <Box borderBottomWidth="1px" py="2">
                <Stack direction="row" justify="space-between">
                  <Text>Product Name</Text>
                  <Text>23343</Text>
                </Stack>
              </Box>
              <Box borderBottomWidth="1px" py="2">
                <Stack direction="row" justify="space-between">
                  <Text>Product Name</Text>
                  <Text>23432</Text>
                </Stack>
              </Box>
              <Box py="2">
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">$23543464</Text>
                </Stack>
              </Box>
              <Button mt="4" w="100%" colorScheme="#4B5666;">
                Place Order
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
