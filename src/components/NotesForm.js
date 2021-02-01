import React, { useState } from "react";
import { startPostNotes } from "../action/notesAction";
import { useDispatch } from "react-redux";

function NotesForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "body") {
      setBody(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setError(!error);
    } else {
      const data = {
        title: title,
        body: body,
      };
      dispatch(startPostNotes(data));
      setTitle("");
      setBody("");
    }
  };
  return (
    <div>
      <form className="notesForm" onSubmit={handleSubmit}>
        <h2>Add your Notes</h2>
        <input
          className="notesinput"
          type="text"
          onChange={handleChange}
          name="title"
          value={title}
          placeholder="Title"
        /> 
        <br />
        {error && <p style={{ color: "red" }}>Title Cannot be Empty</p>}
        <textarea
          onChange={handleChange}
          name="body"
          value={body}
          placeholder="Body"
        ></textarea>
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default NotesForm;
