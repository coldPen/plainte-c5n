import React from "react";

const DateInput = ({ children: label, name, value, setValue }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        name={name}
        id={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        max={currentDate}
      />
    </div>
  );
};

export default DateInput;
