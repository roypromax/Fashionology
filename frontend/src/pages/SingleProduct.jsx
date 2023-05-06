import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import style from "./SingleProduct.module.css";
import { Navbar } from '../components/Navbar';
import Carousel from '../components/Home-Components/Carousel';
import { Footer } from '../components/Footer';

const url = "http://localhost:8080";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(()=>{
    axios.get(`${url}/products/${id}`)
        .then(res=>{
            console.log(res);
            setProduct(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
  },[id])

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  }

  const mainImage = product?.images[mainImageIndex];

  if(product===null){
    return ""
  }

  return (
    <>
      <Navbar/>
      <div className={style.mainProductDiv}>
        <div className={style.imagesSection}>
          <img className={style.mainImage} src={mainImage} alt={product.name} />
          <div className={style.thumbnailImages}>
            <img onClick={()=>{handleThumbnailClick(0)}} className={style.thumbnailImage} src={product.images[0]} alt={product.name}/>
            <img onClick={()=>{handleThumbnailClick(1)}} className={style.thumbnailImage} src={product.images[1]} alt={product.name}/>
            <img onClick={()=>{handleThumbnailClick(2)}} className={style.thumbnailImage} src={product.images[2]} alt={product.name}/>
          </div>
        </div>
      
        <div className={style.productDetailsSection}>
          <h1 className={style.productName}>{product.name}</h1>
          <div className={style.ratingDiv}>{product.rating}★</div>
          <p className={style.productPrice}>${product.price.toFixed(2)}</p>
          <p>COLOR : {product.color}</p>
          <div className={style.sizeSection}>
            <span>Select Size: </span>
            {product.sizes.map((size) => (
              <label className={style.sizesSelectionLabel} key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
          <p className={style.productDescription}>{product.description}</p>
          <button className={style.addToCartButton}>Add to Cart</button>
        </div>
      </div>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default SingleProduct;
