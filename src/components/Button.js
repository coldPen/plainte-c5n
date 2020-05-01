import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const { theme } = require("../../tailwind.config")

const Button = ({ children, isLink, to }) => {
  const classes = `text-white bg-imperial-red mt-4 px-4 py-3 font-rockwell text-2xl tracking-wider transition duration-200 ease-in-out transform hover:underline hover:translate-y-1 hover:scale-110 shadow-xs hover:shadow-2xl hover:rotate-3 hover:bg-new-yellow hover:text-black`

  const newYellow = theme.extend.colors["new-yellow"]

  return isLink ? (
    to === "/formulaire" ? (
      <AniLink paintDrip hex={newYellow} to={to} className={classes}>
        {children}
      </AniLink>
    ) : (
      <AniLink to={to} className={classes}>
        {children}
      </AniLink>
    )
  ) : (
    <button className={classes}>{children}</button>
  )
}

export default Button
