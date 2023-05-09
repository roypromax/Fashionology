import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

function getInitialState() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData,"reducer")
  if (userData) {
    return {
      isLoading: false,
      isLogin: false,
      isError: false,
      token: userData.token,
      userName: userData.userName,
      userRole:userData.userRole ,
    };
  } else {
    return {
      isLoading: false,
      isLogin: false,
      isError: false,
      token: "",
      userName: "",
      userRole: "user",
    };
  }
}

export const reducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isAuth: true,
        token: payload.token,
        userName: payload.userName,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

