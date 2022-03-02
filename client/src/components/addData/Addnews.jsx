import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function Addnews() {
  const [ispopup, setpopup] = useState(false);
  const [input, setInput] = useState({
    image: "",
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    axios.post("/addnews", input);

    setInput({
      image: "",
      title: "",
      content: "",
    });

    setpopup(true);
  }

  return (
    <div id="news">
      <div
        className={`alert ${ispopup ? "show-alert" : "hide-alert"}`}
        onTransitionEnd={() => setpopup(false)}
      >
        <h3> Data is Saved! </h3>
      </div>
      <h1>Add News</h1>
      <input
        name="image"
        value={input.image}
        onChange={handleChange}
        placeholder="Image"
      />
      <input
        name="title"
        value={input.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        value={input.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
}

export default Addnews;
