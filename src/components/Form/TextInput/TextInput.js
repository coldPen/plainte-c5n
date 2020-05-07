import React from "react";

const TextInput = ({ id, placeholder, value, setValue }) => (
  <input
    type="text"
    name={id}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={(event) => setValue(event.target.value)}
  />
);

export default TextInput;
