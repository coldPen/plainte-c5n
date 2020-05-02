import React from "react"

import Radio from "./Radio/Radio"

const Radios = ({ children: question, name, options, value, setValue }) => (
  <div>
    <p>{question}</p>
    {options.map(({ label, id }) => (
      <Radio name={name} id={id} value={value} setValue={setValue} key={id}>
        {label}
      </Radio>
    ))}
  </div>
)

export default Radios
