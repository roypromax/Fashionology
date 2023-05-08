import { Checkout } from "../components/Checkout";
import { PrivateRoute } from "../components/PrivateRoute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Productpage } from "./Productpage";
import SingleProduct from "./SingleProduct";
import ProductAdminList from "../components/AdminProduct/ProductAdminList";
import ProductAdminPost from "../components/AdminProduct/ProductAdminPost";
import Cart from "./Cart";

export const Allroutes = () => {
  return (
    <Routes>
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
    </Routes>
  );
};
