import React from "react"

import Checkbox from "./Checkbox/Checkbox"

const Checkboxes = ({ children: question, options }) => (
  <div>
    <p>{question}</p>
    {options.map(({ id, label }) => (
      <Checkbox name={id}>{label}</Checkbox>
    ))}
  </div>
)

export default Checkboxes
