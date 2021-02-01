import axios from "axios";

const postNotes = (data) => {
  return { type: "POST", payload: data };
};
const getNotes = (data) => {
  return { type: "GET", payload: data };
};
const deleteNotes = (data) => {
  return { type: "DELETE", payload: data }; 
};

export const startPostNotes = (data) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/api/notes", data, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(postNotes(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startGetNotes = (data) => {
  return (dispatch) => {
    axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(getNotes(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const startDeleteNotes = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(deleteNotes(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
