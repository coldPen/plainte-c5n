import React from "react"

const Button = props => (
  <button className="bg-new-yellow mt-4 px-4 py-3 font-rockwell text-2xl tracking-wider rounded transition duration-200 ease-in-out transform hover:translate-y-1 hover:scale-110 shadow-xs hover:shadow-2xl hover:rotate-5">
    {props.children}
  </button>
)

export default Button
