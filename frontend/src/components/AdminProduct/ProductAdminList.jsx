import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../Redux/productsReducers/action'
import styled from 'styled-components'
import ProductAdminCart from './ProductAdminCart';


const ProductAdminList = () => {

    const dispatch = useDispatch()

    const {products }= useSelector((store)=>store.productsReducers)


    useEffect(()=>{
        dispatch(getProducts())
    },[])

  return (
    <DIV>
      {
        products.length>0 && products.map((el)=>{
            return <ProductAdminCart  key={el.id} {...el}/>
        })
      }
    </DIV>
  )
}

export default ProductAdminList

const DIV = styled.div`
margin: 40px auto;
margin:auto;
margin-left: 30px;
display: grid;
grid-template-columns: auto auto auto auto;
gap : 20px
`