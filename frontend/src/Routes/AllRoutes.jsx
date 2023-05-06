import React from 'react'
import { Routes,Route} from 'react-router-dom'
import SingleProduct from '../pages/SingleProduct'
import { Home } from '../pages/Home'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
    </Routes>
  )
}
