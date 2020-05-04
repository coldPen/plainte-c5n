import React from "react"

const SubmitButton = ({ children, disabled }) => (
  <button
    className="disabled:opacity-50 disabled:cursor-not-allowed bg-imperial-red"
    disabled={disabled}
  >
    {children}
  </button>
)

export default SubmitButton
