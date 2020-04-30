import React from "react"

const IndexPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-viridian-green">
    <img
      src="https://via.placeholder.com/500x300"
      alt="Visuel de la campagne de plainte"
    />
    <p className="text-white mt-10 text-center font-rockwell text-xl tracking-wider w-1/2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aspernatur
      explicabo corrupti ea. Rerum doloremque placeat voluptatum. Voluptatibus
      ab eligendi vero omnis natus doloribus adipisci! Hic excepturi non amet
      corporis.
    </p>
    <button className="bg-new-yellow mt-4 px-4 py-3 font-rockwell text-2xl tracking-wider transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      Je porte plainte
    </button>
  </div>
)

export default IndexPage
