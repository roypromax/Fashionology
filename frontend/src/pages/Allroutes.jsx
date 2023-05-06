import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Productpage } from './Productpage'
import SingleProduct from './SingleProduct'
export const Allroutes = () => {
  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element=""/>
<Route path="*" element={<h1>404 page not found</h1>}/>
<Route path="/productpage" element={<Productpage/>}/>
<Route path="/productpage/:id" element={<SingleProduct/>}/>

    </Routes>
  )
}
