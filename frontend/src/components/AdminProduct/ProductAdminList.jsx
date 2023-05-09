import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Redux/productsReducers/action";
import Nav from "../../pages/AdminNavbar";
import ProductAdminCart from "./ProductAdminCart";

const ProductAdminList = () => {
  const [ref, setRef] = useState(false);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.productsReducers);

  useEffect(() => {
    dispatch(getProducts());
  }, [ref]);


  const updateRef = () => {
    setRef((prev) => !prev);
  };

  return (
    <DivForm>
      <Nav />

      <h1
        style={{
          color: "#430707",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 20px",
        }}
      >
        All Products Data
      </h1>

      <DIV>
        {products.length > 0 &&
          products.map((el) => {
            return <ProductAdminCart key={el._id} {...el} fn={updateRef} />;
          })}
      </DIV>
    </DivForm>
  );
};

export default ProductAdminList;

const DivForm = styled.div``;

const DIV = styled.div`
  margin: 40px auto;
  margin: auto;
  margin-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;

  @media (max-width: 719px) {
    margin: 40px auto;
    margin: auto;
    align-items:center;
    margin-left: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media  (min-width: 720px) and (max-width: 1200px)  {
    margin: 40px auto;
    margin: auto;
    margin-left: 30px;
    align-items:center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
