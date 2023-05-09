import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductAdminCart = ({
  name,
  rating,
  price,
  sizes,
  quantity,
  color,
  mainCategory,
  subCategory,
  images,
  brand,
  description,
  _id,
  fn,
}) => {
  // const dispatch = useDispatch()

  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  const handleDelete = (id) => {
    axios
      .delete(`https://sleepy-erin-sheep.cyclic.app/products/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          " Authorization": `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        fn();
      })
      .catch((err) => console.log(err));
  };

  return (
    <DivForm>
      <DIV>
        <div>
          <img src={images[0]} alt={name} />
          <p>Title: {name}</p>
          <h3>Rating: {rating}</h3>
          <h3>Price: {price}</h3>
          {/* <p>Sizes: {sizes}</p> */}
          <select>
            <option>Sizes: {sizes[0]}</option>
            <option>Sizes: {sizes[1]}</option>
            <option>Sizes: {sizes[2]}</option>
            <option>Sizes: {sizes[3]}</option>
            <option>Sizes: {sizes[4]}</option>
            <option>Sizes: {sizes[5]}</option>
          </select>
          <p>Quantity: {quantity}</p>
          <p>Color: {color}</p>
          <p>MainCategory: {mainCategory}</p>
          <p>SubCategory: {subCategory}</p>
          <p>Brand: {brand}</p>
          <p>Description: {description.substring(0,20)+"..."}</p>
          <button style={{ width: "30%", backgroundColor: "green" }}>
            <Link to={`/adminedit/${_id}`}>Edit</Link>
          </button>
          <button
            style={{ marginLeft: "50px", width: "30%", backgroundColor: "red" }}
            onClick={() => handleDelete(_id)}
          >
            DELETE
          </button>
        </div>

      </DIV>
      
    </DivForm>
  );
};

export default ProductAdminCart;

const DivForm = styled.div``;

const DIV = styled.div`
  border: 1px solid gray;
  padding: 10px;
  height: auto;
  width: 300px;

  button {
    border-radius: 2px;
    padding: 10px;
    color: white;
    margin-top: 40px;
  }
  img {
    width: 90%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
