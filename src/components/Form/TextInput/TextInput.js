import React from "react"

const TextInput = ({ children: label, name, placeholder, value, setValue }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      value={value ? value : ""}
      onChange={event => setValue(event.target.value)}
    />
  </div>
)

export default TextInput
