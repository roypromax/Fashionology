import "./TotalWeightProducts.css";

import axios from "axios";
import React, { useEffect, useState } from "react";

const TotalWeightProducts = () => {
  const [product, setProduct] = useState([]);

  const AllProducts = () => {
    axios.get("http://localhost:8080/products").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };

  useEffect(() => {
    AllProducts();
  }, []);
  return (
    <div className="widget">
      <div className="left">
        <span className="title">All Products</span>
        <span className="counter">{product.length}</span>
      </div>
    </div>
  );
};

export default TotalWeightProducts;
