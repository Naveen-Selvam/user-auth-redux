import axios from "axios";

const registerUser = (data) => {
  return { type: "REGISTER", payload: data };
};
const error = (data) => {
  return { type: "ERROR", payload: data };
};
export const startRegisterUser = (data) => {
  return (dispatch) => {
    axios
      .post("https://dct-user-auth.herokuapp.com/users/register", data)
      .then((response) => {
        dispatch(registerUser(response.data)); 
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startLoginUser = (data) => {
  return (dispatch) => {
    axios
      .post("https://dct-user-auth.herokuapp.com/users/login", data)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        } else if (response.data.errors) {
          dispatch(error(response.data));
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
