import React from "react";

// import Carousel from "react-multi-carousel";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Tab,
  TabIndicator,
  TabList,
  // TabPanel,
  // TabPanels,
  Tabs,
} from "@chakra-ui/react";
import fashionoLogy from "../assets/fashionology.jpeg";
import logo from "../assets/logo.png";
import { SlArrowDown, SlGlobeAlt } from "react-icons/sl";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
export const Navbar = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 1,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <div
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      {/* <div>
        <Carousel responsive={responsive}>
          <p style={{ background: "rgb(245,151,148)" }}>hello</p>
          <p style={{ background: "rgb(243, 101, 96)" }}>hello2</p>
          <p style={{ background: "rgb(245,151,148)" }}>hello3</p>
        </Carousel>
      </div> */}
      <Box w="100%" p={4} color="rgb(22,122,146)" fontFamily={"inherit"}>
        <Box style={{ display: "flex", gap: "20px", justifyContent: "right", height:"10px" , alignItems:"center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px"}}>
            <SlGlobeAlt style={{ fontSize: "25px" }} />
            English ($)
            <SlArrowDown />
          </div>
          <Button
            _hover={{ color: "black" }}
            style={{ display: "flex", alignItems: "center", gap: "5px",background:"none",fontFamily:"" }}
          >
            <BiUser style={{ fontSize: "25px" }} /> Sign In / Sign Up
          </Button>
        </Box>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{paddingLeft:"35px"}}>
          {" "}
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div style={{ width: "200px" }}>
                  {" "}
                  <Image src={fashionoLogy} />
                </div>
              </Tab>
              <Tab
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div style={{ width: "200px" }}>
                  {" "}
                  <Image src={logo} />
                </div>
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="4px"
              bg="rgb(22, 122, 146)"
              borderRadius="1px"
            />
          </Tabs>
        </Box>
        <Box
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "right",
            width: "100%",
            paddingRight: "20px",
          }}
        >
          <div>
            <InputGroup width={350}>
              <Input
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
                placeholder="Search Fashionology"
              />
              <InputRightAddon cursor="pointer">
                <BiSearch style={{ borderColor: "1px solid black" }} />
              </InputRightAddon>
            </InputGroup>
          </div>{" "}
          <div>
            {" "}
            <BsHandbag style={{ fontSize: "25px", color: "rgb(22,122,146)" }} />
          </div>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </div>
  );
};
