import React from "react";

const Checkbox = ({ children: label, name }) => (
  <div>
    <input type="checkbox" name={name} id={name} />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;
