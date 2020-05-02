import React from "react"

import Paragraph from "../components/Paragraph"
import CTA from "../components/CTA/CTA"

const IndexPage = () => (
  <main className="flex flex-col items-center justify-center h-screen bg-viridian-green">
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
    <CTA to="/formulaire">Je porte plainte</CTA>
  </main>
)

export default IndexPage
