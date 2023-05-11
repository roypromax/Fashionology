import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Redux/productsReducers/action";
import Nav from "../../pages/AdminNavbar";
import AdminSidebar from "../../pages/AdminSidebar/AdminSidebar";
import ProductAdminCart from "./ProductAdminCart";
import Productpagination from "./Productpagination";

const ProductAdminList = () => {
  const [ref, setRef] = useState(false);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("");

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let limit = 8;

  const [total, setTotal] = useState(0);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.productsReducers);

  useEffect(() => {
    dispatch(getProducts(page, limit, order));
    // getProductsdata(page)
  }, [ref, page, limit, order]);

  const updateRef = () => {
    setRef((prev) => !prev);
  };

  const paginate = (val) => {
    setPage(page + val);
  };

  return (
    <DivForm>
      <Nav />
      <DIVSidebar>
  
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
    


         

          <DIVSEL>
            <select onChange={(e) => setOrder(e.target.value)}>
              <option value="desc">High to low</option>
              <option value="asc">Low to High</option>
            </select>
          </DIVSEL>

          <DIV>
            {products.length > 0 &&
              products.map((el) => {
                return <ProductAdminCart key={el._id} {...el} fn={updateRef} />;
              })}
       
        </DIV>
      </DIVSidebar>
      <div>
        <Productpagination
          page={page}
          paginate={paginate}
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

const DIVSEL = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 50px;
  select {
    width: 50%;
    height: 50px;
    border: 1px solid black;
  }
`;
const DIVSidebar = styled.div`

`;
