import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login =
  (userData, onClose, toast, setEmail, setPassword, navigate) => (dispatch) => {
    if (userData.email === "" || userData.password === "") {
      toast({
        title: "Fail.",
        description: "Please fill all the fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch({ type: LOGIN_REQUEST });
      return axios
        .post("https://agile-sweatshirt-worm.cyclic.app/users/login", userData)
        .then((response) => {
          const userData = {
            token: response.data.token,
            userName: response.data.user,
            userRole: response.data.userRole,
          };
          localStorage.setItem("userData", JSON.stringify(userData));

          dispatch({ type: LOGIN_SUCCESS, payload: userData });
      
          if (userData.userRole == "admin") {
            navigate("/adminhome",{ replace: true });
          }
          setEmail("");
          setPassword("");
          toast({
            title: "Login",
            description: "Login Successful",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          onClose();
        })
        .catch((err) => {
          dispatch({ type: LOGIN_FAILURE });
          toast({
            title: "Invalid Account",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };
