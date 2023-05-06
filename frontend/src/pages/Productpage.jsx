import React from 'react'
import axios from 'axios'
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import { Box, Center, Grid } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
export const Productpage = () => {
    const location = useLocation();
    const { category } = queryString.parse(location.search);
    
    const [products, setProducts] = React.useState([]);
    

    React.useEffect(() => {
        axios.get(`http://localhost:8080/products?mainCategory=${category}`).then((response) => {
            
          setProducts(response.data);
          console.log(response)
        });
      }, []);
    

return (
    <>
    <Navbar/>
    <Center>
    
      <Box display={'flex'} flexDirection={'column'}>
        <Sidebar/>
      <Grid templateColumns='repeat(3, 1fr)' columnGap={70} rowGap={50} >
      {products.map((el)=>(<ProductCard key={el.id} _id={el._id} name={el.name} images={el.images} price={el.price}/>))}
    </Grid>
    
      </Box>
      
    </Center>
    <Footer/>
   </>
  )
}
