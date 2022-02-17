import React, { useState } from "react";

export default function Search() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" value={text} onChange={handleChange} />
      {text}
    </div>
  );
}
