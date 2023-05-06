import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login =
  (userData, onClose, toast, setEmail, setPassword) => (dispatch) => {
    if (userData.email === "" || userData.password === "") {
      toast({
        title: "Fail.",
        description: "Please fill all the fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }else{
      dispatch({type:LOGIN_REQUEST})
      return axios.get("").then((response)=>{
        const user = response.data.find((element)=>{
          if(element.email ===userData.email && )
        })
      })
    }
  };
