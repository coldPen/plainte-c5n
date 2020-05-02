import React from "react"

const Radio = ({ children: label, name, id, value, setValue }) => (
  <div>
    <input
      type="radio"
      name={name}
      id={id}
      value={id}
      checked={value ? value === id : false}
      onChange={event => setValue(event.target.value)}
    />
    <label htmlFor={id}>{label}</label>
  </div>
)

export default Radio
