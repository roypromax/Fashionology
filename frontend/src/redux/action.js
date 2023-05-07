import * as types from './actionType'
import axios from 'axios'

const getProducts = (products) => ({
    type : types.GET_PRODUCTS,
    payload: products,
}); 

export const loadProducts = () => {
      return function (dispatch) {
        axios.get(`http://localhost:2000/products`).then((resp)=>{
            console.log("resp",resp);
            dispatch(getProducts(resp.data))
        }).catch((error)=> console.log(error))
      }
} 