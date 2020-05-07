import React from "react";

import Radio from "./Radio/Radio";

const Radios = ({ name, options, value, setValue }) =>
  options.map(({ label, id }) => (
    <Radio name={name} id={id} value={value} setValue={setValue} key={id}>
      {label}
    </Radio>
  ));

export default Radios;
