import React from "react";
import Carousel from "react-multi-carousel";
import { Box } from "@chakra-ui/react";
import { SlArrowDown, SlGlobeAlt } from "react-icons/sl";

export const Navbar = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div>
        <Carousel responsive={responsive}>
          <p style={{ background: "rgb(245,151,148)" }}>hello</p>
          <p>hello2</p>
          <p>hello3</p>
        </Carousel>
      </div>
      <Box w="100%" p={4} color="rgb(22,122,146)">
        <Box>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <SlGlobeAlt />
            English ($)
            <SlArrowDown />
          </div>
          <div></div>
        </Box>
      </Box>
      <div>NavBar3</div>
    </div>
  );
};
