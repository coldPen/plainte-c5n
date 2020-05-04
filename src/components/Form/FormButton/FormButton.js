import React from "react";

const SubmitButton = ({ children, disabled, onSubmit }) => (
  <button
    type="submit"
    disabled={disabled}
    className="disabled:opacity-50 disabled:cursor-not-allowed bg-imperial-red"
  >
    {children}
  </button>
);

export default SubmitButton;
