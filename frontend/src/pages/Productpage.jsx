import React, { useState } from 'react'
import axios from 'axios'
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import { Box, Button, Center, Flex, Grid, Text } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';


export const Productpage = () => {
  
  const [page,setPage] = useState(1);
  let c = false
if(page<2){
  c=true
}
    const location = useLocation();
    const { category } = queryString.parse(location.search);
    const subcategory=[];
    const [products, setProducts] = React.useState([]);
    const [order,setorder]=React.useState("")
    const [subCategory,setSubCategory]=React.useState("")
    const handleSort= (e) =>{
      setorder(e.target.value)
          }

          const handlecategory= (e) =>{
            setSubCategory(e.target.value)
                }
    const object={}

    React.useEffect(() => {
        axios.get(`http://localhost:8080/products?mainCategory=${category}&limit=5&page=${page}&order=${order}&subCategory=${subCategory}`).then((response) => {
            
          setProducts(response.data);
          for(let key in object){
            subcategory.push(key)
          }
          console.log(response)
        });
      }, [page,order]);
    
      React.useEffect(() => {
        axios.get(`http://localhost:8080/products?mainCategory=${category}`).then((response) => {
            
         
          for(let i=0 ; i<response.data.length-1; i++){
            if(object[response.data[i].subCategory]===undefined){
              object[response.data[i].subCategory]=1
            }else{
              object[response.data[i].subCategory]++
            }
            
          }
          console.log(object)
        });
      }, [page]);
return (
    <>
    <Navbar/>
    <Box><Box onChange={handleSort}>
            <input type="radio" name="order" value={"asc"}   defaultChecked={order==="asc"}/>
            <label>Ascending</label>
            <input type="radio" name="order" value={"desc"}   defaultChecked={order==="desc"}/>
            <label>Descending</label>

        </Box>
        <Box onChange={handlecategory}>
        {subcategory.map((el)=>(<><input type="radio" name="subcategory" value={el}   defaultChecked={subCategory===el}/>
            <label>Ascending</label></>))}
        </Box>
        </Box>
        <Flex flexDirection={'row'}>
       
   
      <Box display={'flex'} flexDirection={'column'}>
        
      <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
      {products.map((el)=>(<ProductCard key={el.id} _id={el._id} name={el.name} images={el.images} price={el.price}/>))}

    </Grid>
   
      
    
    <Flex h="20vh"  m='auto' >
     
    <Button
        
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        
        bg={'#4B5666'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        disabled={c} onClick={()=>{setPage(page-1) }}>
        Prev
      </Button>
      
      <Button
        
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#4B5666'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}
        disabled={c} onClick={()=>{setPage(page+1) }}>
        Next
      </Button>
    </Flex>
      </Box>
      
    
        </Flex>
    
    <Footer/>
   </>
  )
}
