import { useState } from "react";
import React from "react";
import "./note.css";

const AddNote = () => {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("Your Note has been saved!");
  };

  const handleClear = (e) => {
    e.preventDefault();
    var response = prompt(
      "You are trying to delete the note. Enter Y to Proceed: "
    );
    if (response == "Y" || response == "y") {
      setNote("");
      alert("Note deleted!");
    }
  };

  return (
    <div class="notes">
      <h2>Notes</h2>
      <div class=""></div>

      <form>
        <div className="container">
          <div className="comment">
            <textarea
              className="textinput"
              placeholder="Have your say"
              onChange={handleChange}
            >
              {note}
            </textarea>
            <br />
            <div>
              <button className="btn btn-primary" onClick={handleClick}>
                Save
              </button>
              <button className="btn btn-danger" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
