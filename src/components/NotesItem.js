import React from "react";
import { startDeleteNotes } from "../action/notesAction";
import { useDispatch } from "react-redux";

const NotesItem = ({ data }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    const result = window.confirm("Are you Sure");
    if (result) {
      dispatch(startDeleteNotes(id));
    }
  };

  return (
    <div> 
      <h2>{data.title}</h2>
      <span>{data.body}</span>
      <button onClick={() => handleDelete(data._id)}>cancel</button>
    </div>
  );
};

export default NotesItem;
