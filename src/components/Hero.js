import React from "react"

const Hero = props => (
  <div className="flex flex-col items-center justify-center h-screen bg-viridian-green">
    {props.children}
  </div>
)

export default Hero
