import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Redux/productsReducers/action";
import Nav from "../../pages/AdminNavbar";
import ProductAdminCart from "./ProductAdminCart";

const ProductAdminList = () => {
  const [ref, setRef] = useState(false);
const [page, setPage] = useState(1)

let c = false
if(page<2){
  c=true
}

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.productsReducers);

  useEffect(() => {
    dispatch(getProducts());
  }, [ref, page]);



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
      <DIVBTN>
          <button  disabled={c} onClick={()=>{setPage(page-1) }} >Prev</button>
          <button>{page}</button>
          <button   disabled={c} onClick={()=>{setPage(page+1) }}>Next</button>
        </DIVBTN>
    </DivForm>
  );
};

export default ProductAdminList;

const DIVBTN = styled.div`
margin-top:50px;
margin-bottom: 50px;
text-align: center;

button{
  padding: 10px 24px;
  font-size:20px;
  background-color: black;
  color: white;
  margin-left: 10px;
  border-radius:50px;
}
`;

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
