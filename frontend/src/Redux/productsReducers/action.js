
import axios from 'axios'
import { PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, DELETE_PRODUCT} from './actionType';

const productDeleted = () => ({
   type:DELETE_PRODUCT,
 });

// post

export const addProducts = (data) => (dispatch) => {
          dispatch({type:PRODUCT_REQUEST})
      axios.post("http://localhost:8080/products/add", data).then(()=>{
         dispatch({type:ADD_PRODUCT_SUCCESS})
      }).catch(()=>{
         dispatch({type:PRODUCT_FAILURE})
      })
}


//get

export const getProducts =(paramObj) => (dispatch) => {
   dispatch({type:PRODUCT_REQUEST})
   axios.get("http://localhost:8080/products", paramObj).then((res)=>{
      dispatch({type: GET_PRODUCT_SUCCESS, payload:res.data})
   }).catch(()=>{
      dispatch({type: PRODUCT_FAILURE})
   })
}

// patch

export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({type:PRODUCT_REQUEST})
  
   return axios.patch(`http://localhost:8080/products/${id}`, dataObj).then(()=>{
      dispatch({type: PATCH_PRODUCT_SUCCESS})
   }).catch(()=>{
      dispatch({type: PRODUCT_FAILURE})
   })
}


// delete product

export const deleteProduct = (id) => {
   return function (dispatch) {
     axios
       .delete(`http://localhost:8080/products/${id}`)
       .then((resp) => {
         console.log("resp", resp);
         dispatch(productDeleted());
         dispatch(getProducts());
       })
       .catch((error) => console.log(error));
   };
 };