import React from "react";

import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Tab,
  TabIndicator,
  TabList,
  // TabPanel,
  // TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import fashionoLogy from "../assets/fashionology.jpeg";
import logo from "../assets/logo.png";
import { SlArrowDown, SlGlobeAlt } from "react-icons/sl";
import { BiSearch, BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { LoginButton } from "./LoginButton";
import { RegisterButton } from "./RegisterButton";


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div>
        <Swiper
          loop={true}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{ display: "flex", height: "29px" }}
        >
          <SwiperSlide
            style={{ textAlign: "center", backgroundColor: "rgb(22,122,146)" }}
          >
            <span style={{ fontFamily: "cursive" }}>Upcoming Trends !</span>
            <span style={{ fontFamily: "fantasy" }}>
              latest offer on fashionology !{" "}
            </span>{" "}
            <span style={{ textDecoration: "underline" }}>
              shop ready -for-fun furniture
            </span>
          </SwiperSlide>
          <SwiperSlide
            style={{
              textAlign: "center",
              backgroundColor: "rgb(220, 101, 180)",
            }}
          >
            <span style={{ fontFamily: "cursive" }}>
              let the hosting begin{" "}
            </span>
            <span style={{ fontFamily: "fantasy" }}>
              It's Patio Party Time !{" "}
            </span>{" "}
            <span style={{ textDecoration: "underline" }}>
              shop ready -for-fun furniture & decor
            </span>
          </SwiperSlide>
          <SwiperSlide
            style={{
              textAlign: "center",
              backgroundColor: "rgb(161, 90, 227)",
            }}
          >
            <span style={{ fontFamily: "cursive" }}>Seeing starts?</span>
            <span style={{ fontFamily: "fantasy" }}>
              Write 5+ reviews. Get 20% Off!
            </span>{" "}
            <span style={{ textDecoration: "underline" }}>
              view your order history
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
      <Box w="100%" p={4} color="rgb(22,122,146)" fontFamily={"inherit"}>
        <Box
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "right",
            height: "10px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <SlGlobeAlt style={{ fontSize: "25px" }} />
            English ($)
            <SlArrowDown />
          </div>
         
          <Menu>
            <MenuButton
              as={Button}
              _hover={{ color: "black" }}
              style={{
                display: "flex",

                alignItems: "center",
                gap: "5px",
                background: "none",
                fontFamily: "",
              }}
            >
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "5px",
                  background: "none",
                  fontFamily: "",
                }}
              >
                {" "}
                <BiUser style={{ fontSize: "25px" }} /> Sign In / Sign Up
              </div>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>Order History</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="If you are new user">
                {/* <MenuItem>Register</MenuItem> */}
                <RegisterButton/>
                {/* <MenuItem>Login</MenuItem> */}
                <LoginButton isOpen={isOpen} onOpen={onOpen} onClose={onClose}  />
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ paddingLeft: "35px" }}>
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
      <Box
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <Tabs
          style={{
            margintop: "8px",
            fontFamily: "sans-serif",
            height: "60px",
            display: "flex",
          }}
        >
          <TabList
          // style={{
          //   display: "flex",
          //   fontSize: "12px",
          //   alignItems: "center",
          //   height: "60px",
          // }}
          >
            <Tab textDecoration={"none"} fontSize={"small"}>
              <Link to=""> New!</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Gift for Mom</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Dresses</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to="/cloths"> Clothing</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to="/shoes"> Shoes</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Accessories</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Home & Furniture</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Beauty & Wellness</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Garden & Outdoor</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Weddings</Link>
            </Tab>
            <Tab fontSize={"small"}>
              <Link to=""> Sale</Link>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </div>
  );
};
