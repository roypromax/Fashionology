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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";

const url = "https://sleepy-erin-sheep.cyclic.app/";

export const Checkout = () => {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || null;
  let userData = JSON.parse(localStorage.getItem("userData")) || null;
  const toast = useToast();
  const [billingState, setBillingState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    cardNumber: "",
    expiredDate: "",
    cvv: "",
  });

  const handleCheckout = () => {
    if (
      billingState.name === "" ||
      billingState.address === "" ||
      billingState.city === "" ||
      billingState.state === "" ||
      billingState.pin === "" ||
      billingState.cardNumber === "" ||
      billingState.expiredDate === "" ||
      billingState.cvv === ""
    ) {
      toast({
        title: "Fail.",
        description: "Please fill all the fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      
      axios
        .delete(`${url}cart/delete`, {
          headers: {
            Authorization: `Bearer ${userData?.token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      localStorage.removeItem("cartData");

      toast({
        position: "top",
        description:
          "Your order has been  placed.Thank you for shopping with us",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      window.location.href = "/";
    }
  };

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
                  <Input
                    type="text"
                    borderRadius="md"
                    placeholder="Name"
                    value={billingState.name}
                    onChange={(e) =>
                      setBillingState((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel>
                    <FaMapMarkerAlt /> Address
                  </FormLabel>
                  <Input
                    type="text"
                    borderRadius="md"
                    placeholder="Address"
                    value={billingState.address}
                    onChange={(e) =>
                      setBillingState((prev) => {
                        return { ...prev, address: e.target.value };
                      })
                    }
                  />
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
                    <Input
                      type="text"
                      borderRadius="md"
                      placeholder="City"
                      value={billingState.city}
                      onChange={(e) =>
                        setBillingState((prev) => {
                          return { ...prev, city: e.target.value };
                        })
                      }
                    />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaMapMarkerAlt /> State
                    </FormLabel>
                    <Input
                      type="text"
                      borderRadius="md"
                      placeholder="State"
                      value={billingState.state}
                      onChange={(e) =>
                        setBillingState((prev) => {
                          return { ...prev, state: e.target.value };
                        })
                      }
                    />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaMapMarkerAlt /> Pin Code
                    </FormLabel>
                    <Input
                      type="text"
                      borderRadius="md"
                      placeholder="Pin"
                      value={billingState.pin}
                      onChange={(e) =>
                        setBillingState((prev) => {
                          return { ...prev, pin: e.target.value };
                        })
                      }
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box w="100%">
                <Heading size="md">Payment Information</Heading>
                <FormControl mt="4">
                  <FormLabel>
                    <FaCreditCard /> Card Number
                  </FormLabel>
                  <Input
                    type="text"
                    borderRadius="md"
                    placeholder="Card Number"
                    value={billingState.cardNumber}
                    onChange={(e) =>
                      setBillingState((prev) => {
                        return { ...prev, cardNumber: e.target.value };
                      })
                    }
                  />
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
                    <Input
                      type="text"
                      borderRadius="md"
                      placeholder="Expiration Date"
                      value={billingState.expiredDate}
                      onChange={(e) =>
                        setBillingState((prev) => {
                          return { ...prev, expiredDate: e.target.value };
                        })
                      }
                    />
                  </FormControl>
                  <FormControl flex="1">
                    <FormLabel>
                      <FaCreditCard /> CVV
                    </FormLabel>
                    <Input
                      type="text"
                      borderRadius="md"
                      placeholder="CVV"
                      value={billingState.cvv}
                      onChange={(e) =>
                        setBillingState((prev) => {
                          return { ...prev, cvv: e.target.value };
                        })
                      }
                    />
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
              {cartData.cart.map((data, i) => {
                return (
                  <Box key={i} borderBottomWidth="1px" py="2">
                    <Stack direction="row" justify="space-between">
                      <Text
                        style={{
                          whiteSpace: "nowrap",
                          width: "150px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {data.name}
                      </Text>
                      <Text>$ {data.price}</Text>
                    </Stack>{" "}
                  </Box>
                );
              })}

              <Box py="2">
                <Stack direction="row" justify="space-between">
                  <Text fontWeight="bold">Discount</Text>
                  <Text fontWeight="bold">10 %</Text>
                </Stack>

                <Stack direction="row" justify="space-between">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">$ {cartData.totalPrice}</Text>
                </Stack>
              </Box>
              <Button
                onClick={handleCheckout}
                mt="4"
                w="100%"
                colorScheme="#4B5666;"
              >
                Place Order
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
