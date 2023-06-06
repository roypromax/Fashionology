import { Box, Button, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import queryString from "query-string";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export const Productpage = () => {

  const [rating,setRating] = useState(0);
  const [page,setPage] = useState(1);
  let c = false
if(page<2){
  c=true
}
    const location = useLocation();
    const { category } = queryString.parse(location.search);
    let arr = [null];
    const [ab,setAb]=React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [order,setorder]=React.useState("")
    const [subCategory,setSubCategory]=React.useState([])
    const [loading,setLoading] = useState(true)
    
          const handleSort= (e) =>{
      setorder(e.target.value)
          }
         const handlecategory= (e) =>{
      setSubCategory(e.target.value)
     }
     
    const object={}
    
    React.useEffect(() => {
      
      try {
        axios.get(`https://agile-sweatshirt-worm.cyclic.app/products?mainCategory=${category}&limit=6&page=${page}&order=${order}&subCategory=${subCategory}&minRating=${rating}`).then((response) => {
            
          setProducts(response.data);
          setLoading(false);
        });

      } catch (error) {
        console.log(error)
      }
          
      }, [loading,category,page,order,subCategory,rating]);
    
      React.useEffect(() => {
        try {
          axios.get(`https://agile-sweatshirt-worm.cyclic.app/products?mainCategory=${category}`).then((response) => {
            
         
          for(let i=0 ; i<=response.data.length-1; i++){
            if(object[response.data[i].subCategory]===undefined){
              object[response.data[i].subCategory]=1
    }else{
     object[response.data[i].subCategory]++
  }
 }

          // console.log(object)
          for (let key in object) {
            arr.push(key);
          }
          setAb(arr);
          //  console.log(arr)
        });
    } catch (error) {
      console.log(error);
    }
  }, [subCategory]);
  return (
    <>
      <Navbar />
      <Flex flexDirection={"row"}>
        <Flex
          flexDirection={"column"}
          width={"20%"}
          ml={"20px"}
          mt={"20px"}
          display={{ base: "none", md: "none", lg: "block" }}
        >
          {/* pricefilter */}
          <Flex direction={"column"} width={"100%"}>
            <Text
              mb={"20px"}
              mt={"20px"}
              fontSize={{ base: "8px", md: "10px", lg: "15px" }}
              fontWeight="bold"
            >
              Filter by Price
            </Text>
            <Box
              onChange={handleSort}
              display={{ base: "flex", md: "flex", lg: "flex" }}
              flexDirection={"column"}
            >
              <Box fontSize={{ base: "8px", md: "10px", lg: "15px" }}>
                <input
                  type="radio"
                  name="order"
                  value={"asc"}
                  defaultChecked={order === "asc"}
                />

                <label>Low to High</label>
              </Box>
              <Box fontSize={{ base: "8px", md: "10px", lg: "15px" }}>
                <input
                  type="radio"
                  name="order"
                  value={"desc"}
                  defaultChecked={order === "desc"}
                />

                <label>High to Low</label>
              </Box>
            </Box>
          </Flex>
          {/* price filter */}

          {/* /category filter */}
          <Flex direction={"column"} width={"100%"}>
            <Text
              mb={"20px"}
              mt={"20px"}
              fontSize={{ base: "8px", md: "10px", lg: "15px" }}
              fontWeight="bold"
            >
              Choose Category
            </Text>
            <Box
              onChange={handlecategory}
              display={{ base: "flex", md: "flex", lg: "flex" }}
              flexDirection={"column"}
            >
              {loading ? (
                <Spinner />
              ) : (
                ab.map((el) => (
                  <Box
                    fontSize={{ base: "8px", md: "10px", lg: "15px" }}
                    key={el}
                  >
                    <input
                      type="radio"
                      name="subcategory"
                      value={el}
                      defaultChecked={order === { el }}
                    />
                    {el ? <label>{el}</label> : <label>All</label>}
                  </Box>
                ))
              )}
            </Box>
          </Flex>

          {/* 
  
  
   {/* category filter */}

          {/* rating  */}
          <Flex direction={"column"} width={"100%"}>
            <Text
              mb={"20px"}
              mt={"20px"}
              fontSize={{ base: "8px", md: "10px", lg: "15px" }}
              fontWeight="bold"
            >
              Filter by Rating
            </Text>
            <Box
              display={{ base: "flex", md: "flex", lg: "flex" }}
              flexDirection={"column"}
            >
              <Box fontSize={{ base: "8px", md: "10px", lg: "15px" }}>
                <Button
                  onClick={() => {
                    setRating(3.5);
                  }}
                  px={4}
                  fontSize={{ base: "8px", md: "10px", lg: "15px" }}
                  rounded={"full"}
                  width={{ base: "2px" }}
                  bg={"#4B5666"}
                  color={"white"}
                >
                  3.5
                </Button>
                <Button
                  onClick={() => {
                    setRating(4);
                  }}
                  px={4}
                  fontSize={{ base: "8px", md: "10px", lg: "15px" }}
                  rounded={"full"}
                  bg={"#4B5666"}
                  color={"white"}
                >
                  4
                </Button>
                <Button
                  onClick={() => {
                    setRating(4.5);
                  }}
                  px={4}
                  fontSize={{ base: "8px", md: "10px", lg: "15px" }}
                  rounded={"full"}
                  bg={"#4B5666"}
                  color={"white"}
                >
                  4.5
                </Button>
              </Box>
            </Box>
          </Flex>
          {/* rating */}
        </Flex>

        <Flex flexDirection={"column"} width={"80%"}>
          {loading ? (
            <Spinner
              m={"auto"}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              columnGap={20}
              rowGap={10}
              mt={"60px"}
            >
              {products.map((el) => (
                <ProductCard
                  key={el.id}
                  _id={el._id}
                  name={el.name}
                  images={el.images}
                  price={el.price}
                />
              ))}
            </Grid>
          )}

          <Flex h="20vh" m="auto">
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#4B5666"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              disabled={c}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </Button>

            <Button
              /* flex={1} */
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#4B5666"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              disabled={c}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};
