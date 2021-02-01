import axios from "axios";

const getAccount = (data) => {
  return { type: "ACCOUNT_DETAILS", payload: data };
};

export const startGetAccount = () => {
  return (dispatch) => {
    axios
      .get("https://dct-user-auth.herokuapp.com/users/account", {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        dispatch(getAccount(response.data));
      })
      .catch((err) => { 
        alert(err.message);
      });
  };
};
