import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProducts } from "../../Redux/productsReducers/action";
import axios from 'axios'

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
    axios.post("http://localhost:8080/products/add", product, {
         headers: { 
           "Content-Type": "application/json",
           Authorization:`Bearer ${userData.token}` 
}})
.then((res)=>console.log(res.data))

    // dispatch(addProducts(product));
    // console.log(product)

    setProduct(initialState);
  };
  return (
    <DIV>
      <h2>Add Product Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          text="text"
          value={product.images}
          placeholder="Image"
          onChange={(e) => {
            handleChange(e);
          }}
          name="images"
        />

        <input
          text="text"
          value={product.name}
          placeholder="Title"
          onChange={(e) => {
            handleChange(e);
          }}
          name="name"
        />

        <input
          text="number"
          value={product.rating}
          placeholder="Rating"
          onChange={(e) => {
            handleChange(e);
          }}
          name="rating"
        />

        <input
          text="number"
          value={product.price}
          placeholder="Price"
          onChange={(e) => {
            handleChange(e);
          }}
          name="price"
        />

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

        <input
          text="number"
          value={product.quantity}
          placeholder="Quantity"
          onChange={(e) => {
            handleChange(e);
          }}
          name="quantity"
        />

        <input
          text="text"
          value={product.color}
          placeholder="Color"
          onChange={(e) => {
            handleChange(e);
          }}
          name="color"
        />

        <input
          text="text"
          value={product.mainCategory}
          placeholder="MainCategory"
          onChange={(e) => {
            handleChange(e);
          }}
          name="mainCategory"
        />

        <input
          text="text"
          value={product.subCategory}
          placeholder="SubCategory"
          onChange={(e) => {
            handleChange(e);
          }}
          name="subCategory"
        />

        <input
          text="text"
          value={product.brand}
          placeholder="Brand"
          onChange={(e) => {
            handleChange(e);
          }}
          name="brand"
        />

        <input
          text="text"
          value={product.description}
          placeholder="Description"
          onChange={(e) => {
            handleChange(e);
          }}
          name="description"
        />
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

export default ProductAdminPost;

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 20px;

  input {
    width: 80%;
    height: 40px;
    font-size: larger;
  }
  button {
    width: 20%;
    height: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  select {
    width: 50%;
    height: 30px;
    font-size: larger;
  }
`;
