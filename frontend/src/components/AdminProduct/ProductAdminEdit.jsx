import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { editProduct } from "../../Redux/productsReducers/action";
import axios from 'axios'
// eve.holt@reqres.in

const ProductAdminEdit = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
//   const product = useSelector((store) =>{
// console.log(store.productsReducers.products);
//     store.productsReducers.products;
    
// })
    
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(data)
    dispatch(editProduct(data, data._id)).then(() => {
      setSuccess(true);
    });
  };

//   useEffect(() => {
//     const data = product.find((el) => el._id === id);
//     console.log(data);
//     setData(data);
//     // console.log(id);
//   }, []);

//   const datas = product.find((el) => el._id === id);
//   console.log(data);
//   setData(datas);

useEffect(()=>{
axios.get(`http://localhost:8080/products/${id}`)
.then((res)=>{
    console.log(res.data)
    setData(res.data)
}).catch((err)=>console.log(err))
},[])



console.log(data);
  return (
    <DIV>
     
      <form onSubmit={handleEdit}>

        <input
          text="text"
          value={data?.images}
          placeholder="Image"
          onChange={
            handleChange
          }
        name={"images"}
        />

        <input
          text="text"
          value={data.name}
          placeholder="Title"
          onChange={
            handleChange
          }
        name={"name"}
        />

        <input
          text="number"
          value={data.rating}
          placeholder="Rating"
          onChange={
            handleChange
          }
        name={"rating"}
        />

        <input
          text="number"
          value={data.price}
          placeholder="Price"
          onChange={
            handleChange
          }
        name={"price"}
        />

        <select
        name={"sizes"}
          id=""
          onChange={
            handleChange
          }
        >
          <option value="">Select Sizes</option>
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XS">XS</option>
        </select>

        <input
          text="number"
          value={data.quantity}
          placeholder="Quantity"
          onChange={
            handleChange
          }
        name={"quantity"}
        />

        <input
          text="text"
          value={data.color}
          placeholder="Color"
          onChange={
            handleChange
          }
        name={"color"}
        />

        <input
          text="text"
          value={data.mainCategory}
          placeholder="MainCategory"
          onChange={
            handleChange
          }
        name={"mainCategory"}
        />

        <input
          text="text"
          value={data.subCategory}
          placeholder="SubCategory"
          onChange={
            handleChange
          }
        name={"subCategory"}
        />

        <input
          text="text"
          value={data.brand}
          placeholder="Brand"
          onChange={
            handleChange
          }
        name={"brand"}
        />

        <input
          text="text"
          value={data.description}
          placeholder="Description"
          onChange={
            handleChange
          }
        name={"description"}
        />
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

export default ProductAdminEdit;

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
