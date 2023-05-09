import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Redux/productsReducers/action";
import Nav from "../../pages/AdminNavbar";
import ProductAdminCart from "./ProductAdminCart";
import Productpagination from "./Productpagination";
import axios from "axios";

const ProductAdminList = () => {
  const [ref, setRef] = useState(false);
  const [page, setPage] = useState(1);


  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let limit = 4;

  const [total, setTotal] = useState(0);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();


  const { products } = useSelector((store) => store.productsReducers);
  useEffect(() => {
    dispatch(getProducts());
    getProductsdata(page)
  }, [ref, page]);

  const updateRef = () => {
    setRef((prev) => !prev);
  };

  
  const getProductsdata = () => {

    setLoading(true)
    axios.get(`https://sleepy-erin-sheep.cyclic.app/products?_limit=${limit}&_page=${page}`)

    .then((res)=>{
      console.log(res);

     return res.json()
    })
    .then((data)=>{
      setProduct(data)
      setLoading(false)
    })
    .catch(()=>{
      setError(true)
      setLoading(false)
    })
  }

  // useEffect(()=>{
  //   getProductsdata(page)
  // },[page])

  const paginate = (val) => {
    setPage(page+val)
  }


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
      {/* <DIVBTN>
          <button   disabled={page === 1} onClick={()=>setPage(page-1) } >Prev</button>
          <button disabled={page === 1}>{page}</button>
          <button   disabled={page === totalPage} onClick={()=>setPage(page+1)}>Next</button>
        </DIVBTN> */}

      <div>
      <Productpagination page={page} paginate={paginate} 
      // lastPage={lastPage}

      />
     </div>
    </DivForm>
  );
};

export default ProductAdminList;

const DIVBTN = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;

  button {
    padding: 10px 24px;
    font-size: 20px;
    background-color: black;
    color: white;
    margin-left: 10px;
    border-radius: 50px;
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
    align-items: center;
    margin-left: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media (min-width: 720px) and (max-width: 1200px) {
    margin: 40px auto;
    margin: auto;
    margin-left: 30px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
