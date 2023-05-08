import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Redux/productsReducers/action";
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
    <DIV>
      {products.length > 0 &&
        products.map((el) => {
          return <ProductAdminCart key={el._id} {...el} fn={updateRef}/>;

        })}
    </DIV>
  );
};

export default ProductAdminList;

const DIV = styled.div`
  margin: 40px auto;
  margin: auto;
  margin-left: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;
