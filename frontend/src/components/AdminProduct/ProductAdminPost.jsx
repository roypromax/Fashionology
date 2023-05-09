import axios from 'axios';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Nav from '../../pages/AdminNavbar';

const initialState = {
  name: "",
  rating: 0,
  price: 0,
  sizes: [],
  quantity: 0,
  color: "",
  mainCategory: "",
  subCategory: "",
  images: [],
  brand: "",
  description: "",
};

const ProductAdminPost = () => {
  const [product, setProduct] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e)

    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  let userData = JSON.parse(localStorage.getItem("userData")) || []
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product, userData.token)
    axios.post("https://sleepy-erin-sheep.cyclic.app/products/add", product, {
         headers: { 
           "Content-Type": "application/json",
           Authorization:`Bearer ${userData.token}` 
}})
.then((res)=>console.log(res.data))
alert("Products Added Successfully")
    // dispatch(addProducts(product));
    // console.log(product)

    setProduct(initialState);
  };
  return (
    <DIVform style={{ height: "auto", width: "100%",  textAlign:'center'}}>
<Nav/>
<h2 style={{color: "#430707", fontSize: "30px", fontWeight: 'bold', marginTop:'20px'}}>Add Products Page</h2>

    <DIV>

      <form onSubmit={handleSubmit}>

      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%'}}>
      <span>Image :</span>
        <input
          text="text"
          value={product.images}
          placeholder="Image"
          onChange={(e) => {
            handleChange(e);
          }}
          name="images"
        />
      </div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%', }}>
      <span>Title :</span>
        <input
          text="text"
          value={product.name}
          placeholder="Title"
          onChange={(e) => {
            handleChange(e);
          }}
          name="name"
        />
        </div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
  }}>
      <span>Rate:</span>
        <input
          text="number"
          value={product.rating}
          placeholder="Rating"
          onChange={(e) => {
            handleChange(e);
          }}
          name="rating"
        /></div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',width:'100%'}}>
      <span>Price :</span>
        <input
          text="number"
          value={product.price}
          placeholder="Price"
          onChange={(e) => {
            handleChange(e);
          }}
          name="price"
        />
</div>

<div style={{display:'flex', justifyContent:'space-around', alignItems:'center',
 width:'100%',  }}>
      <span>Sizes :</span>

        <select
          name="sizes"
          id=""
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="">Select Sizes</option>
          <option value='S'>S</option>
          <option value='L'>L</option> 
          <option value='XL'>XL</option> 
          <option value='XXL'>XXL</option> 
          <option value='XS'>XS</option>
        </select>
        </div>
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
  fontSize:'16px'}}>
      <span>Quantity:</span>
        <input
          text="number"
          value={product.quantity}
          placeholder="Quantity"
          onChange={(e) => {
            handleChange(e);
          }}
          name="quantity"
        /></div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
fontSize:'16px'}}>
      <span>Color :</span>
        <input
          text="text"
          value={product.color}
          placeholder="Color"
          onChange={(e) => {
            handleChange(e);
          }}
          name="color"
        /></div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
  fontSize:'16px'}}>
      <span>MainCat:</span>
        <input
          text="text"
          value={product.mainCategory}
          placeholder="MainCategory"
          onChange={(e) => {
            handleChange(e);
          }}
          name="mainCategory"
        /></div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
    fontSize:'16px'}}>
      <span>SubCat :</span>
        <input
          text="text"
          value={product.subCategory}
          placeholder="SubCategory"
          onChange={(e) => {
            handleChange(e);
          }}
          name="subCategory"
        />
        </div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
    fontSize:'16px'}}>
      <span>Brand :</span>
        <input
          text="text"
          value={product.brand}
          placeholder="Brand"
          onChange={(e) => {
            handleChange(e);
          }}
          name="brand"
        /></div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'100%',  
    fontSize:'16px'}}>
      <span>Desc :</span>
        <input
          text="text"
          value={product.description}
          placeholder="Description"
          onChange={(e) => {
            handleChange(e);
          }}
          name="description"
        /></div>

        <button type="submit">Submit</button>
      </form>
    </DIV>
    </DIVform>
  );
};

export default ProductAdminPost;

const DIVform = styled.div``;

const DIV = styled.div`
  width: 90%;
  height: auto;
  padding-top:10px;
  background-color: lightgray;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 20px;
  input {
    width: 80%;
    height: 50px;
    border-radius:4px;
    border:1px solid gray;
    font-size: larger;
  }
  button {
    width: 20%;
    border:1px solid black;
    color: white;
    border-radius:4px;
    background-color:#430707;
    height: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  select {
    width: 80%;
    height: 30px;
    height: 50px;
    border-radius:4px;
    font-size: larger;
  }
`;
