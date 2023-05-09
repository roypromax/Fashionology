<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Productpage } from './Productpage'
import SingleProduct from './SingleProduct'
import ProductAdminList from '../components/AdminProduct/ProductAdminList'
import ProductAdminPost from '../components/AdminProduct/ProductAdminPost'
import Cart from './Cart'
import ProductAdminEdit from '../components/AdminProduct/ProductAdminEdit'
import AdminHomePage from './AdminHomePage'
=======
import { Checkout } from "../components/Checkout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Productpage } from "./Productpage";
import SingleProduct from "./SingleProduct";
import ProductAdminList from "../components/AdminProduct/ProductAdminList";
import ProductAdminPost from "../components/AdminProduct/ProductAdminPost";
import Cart from "./Cart";
import { PrivateRoute } from "../components/PrivateRoute";
>>>>>>> b9eba181cd813e85fbce6e92c40f27618b57165a

export const Allroutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
<Route path="/" element={<Home/>}/>
<Route path="/login" element=""/>
<Route path="*" element={<h1>404 page not found</h1>}/>
<Route path="/productpage" element={<Productpage/>}/>
<Route path="/productpage/:id" element={<SingleProduct/>}/>
<Route path="/adminget" element={<ProductAdminList/>}/>
<Route path="/adminpost" element={<ProductAdminPost/>}/>
<Route path="/adminedit/:id" element={<ProductAdminEdit/>}/>
<Route path="/adminhome" element={<AdminHomePage/>}/>
<Route path="/cart" element={<Cart/>}/>
=======
      <Route path="/" element={<Home />} />
      <Route path="/login" element="" />
      <Route path="*" element={<h1>404 page not found</h1>} />
      <Route path="/productpage" element={<Productpage />} />
      <Route path="/productpage/:id" element={<SingleProduct />} />
      <Route path="/adminget" element={<ProductAdminList />} />
      <Route path="/adminpost" element={<ProductAdminPost />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
>>>>>>> b9eba181cd813e85fbce6e92c40f27618b57165a
    </Routes>
  );
};
