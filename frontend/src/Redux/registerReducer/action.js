import axios from "axios";
import { SignUp_FAILURE, SignUp_REQUEST, SignUp_SUCCESS } from "./actionTypes";

export const SignUp =
  (
    data,
    onClose,
    toast,
    setName,
    setAddress,
    setPhoneNumber,
    setEmail,
    setPassword
  ) =>
  (dispatch) => {
    
    //POST

    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.address === "" ||
      data.phoneNumber === ""
    ) {
      toast({
        title: "Fail.",
        description: "Please Fill All the Fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch({ type: SignUp_REQUEST });
      axios
        .post("https://agile-sweatshirt-worm.cyclic.app/users/register", data)
        .then((res) => {
          console.log(res);
          dispatch({ type: SignUp_SUCCESS, payload: data });
        })
        .catch(() => {
          dispatch({ type: SignUp_FAILURE });
        });
      setName("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      toast({
        title: "Account created",
        description: "Registeration Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    }
  };
