import React, { useEffect } from "react";
import { startGetNotes } from "../action/notesAction";
import { useDispatch, useSelector } from "react-redux";
import NotesItem from "./NotesItem";

const NotesList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetNotes());
  }, []);

  const datas = useSelector((state) => state.notes);

  return (
    <div>
      <h2>Notes List - {datas.length}</h2>
      {datas.map((data) => {
        return <NotesItem key={data._id} data={data} />;
      })}
    </div>
  );
}; 

export default NotesList;
