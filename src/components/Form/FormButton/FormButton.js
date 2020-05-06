import React from "react";

const SubmitButton = ({ children, disabled, setFormStep }) => (
  <button
    type="submit"
    disabled={disabled}
    className="disabled:opacity-50 disabled:cursor-not-allowed bg-imperial-red"
    onClick={setFormStep}
  >
    {children}
  </button>
);

export default SubmitButton;
