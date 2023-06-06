
import axios from 'axios'
import { PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, DELETE_PRODUCT} from './actionType';

// const productDeleted = () => ({
//    type:DELETE_PRODUCT,
//  });

// post

let userData = JSON.parse(localStorage.getItem("userData")) || []

export const addProducts = () => (dispatch) => {
          dispatch({type:PRODUCT_REQUEST})
         //  console.log(userData);
      axios.post("https://agile-sweatshirt-worm.cyclic.app/products/add", {
         headers: {
           "Content-Type": "application/json",
           Authorization:`Bearer ${userData.token}`
}}).then((res)=>{
   console.log(res)
         dispatch({type:ADD_PRODUCT_SUCCESS})

      }).catch(()=>{
         dispatch({type:PRODUCT_FAILURE})
      })
}


//get

export const getProducts =(page, limit, order) => (dispatch) => {
   dispatch({type:PRODUCT_REQUEST})
   axios.get(`https://agile-sweatshirt-worm.cyclic.app/products?limit=${limit}&page=${page}&order=${order}`).then((res)=>{
      dispatch({type: GET_PRODUCT_SUCCESS, payload:res.data})
   }).catch(()=>{
      dispatch({type: PRODUCT_FAILURE})
   })
}

// patch

export const editProduct = (dataObj, id) => (dispatch) => {
  dispatch({type:PRODUCT_REQUEST})
  
   return axios.patch(`https://agile-sweatshirt-worm.cyclic.app/products/update/${id}`, dataObj,{
      headers: { 
         "Content-Type": "application/json",
         Authorization:`Bearer ${userData.token}` 
}
   }).then((res)=>{
      // console.log(res);
      dispatch({type: PATCH_PRODUCT_SUCCESS})
   }).catch(()=>{
      dispatch({type: PRODUCT_FAILURE})
   })
}


// delete product

// export const deleteProduct = (id) => {
//    return function (dispatch) {
//      axios
//        .delete(`http://localhost:8080/products/delete/${id}`)
//        .then((resp) => {
//          console.log("resp", resp);
//          dispatch(productDeleted());
//          dispatch(getProducts());
//        })
//        .catch((error) => console.log(error));
//    };
//  };


