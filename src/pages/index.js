import React from "react"

import Hero from "../components/Hero"
import Paragraph from "../components/Paragraph"
import Button from "../components/Button"

const IndexPage = () => (
  <Hero>
    <img
      src="https://via.placeholder.com/500x300"
      alt="Visuel de la campagne de plainte"
    />
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore
      harum ad laborum est, consequatur dolore vero repellat molestias
      repudiandae distinctio asperiores consectetur at numquam veritatis nostrum
      doloremque perferendis vitae.
    </Paragraph>
    <Button isLink to="/formulaire">
      Je porte plainte
    </Button>
  </Hero>
)

export default IndexPage
