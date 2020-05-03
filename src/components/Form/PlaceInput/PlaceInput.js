import React, { useEffect, useRef } from "react"
import places from "places.js"

const AddressInput = ({
  children: label,
  name,
  placeholder,
  value,
  setValue,
}) => {
  const inputEl = useRef(null)
  let placesAutocomplete = null

  useEffect(() => {
    console.log("[PlaceInput] componentDidMount")
    placesAutocomplete = places({
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
      container: inputEl.current,
    })
    placesAutocomplete.on("change", () => {
      console.log(placesAutocomplete.getVal())
      // setValue(placesAutocomplete.getVal())
    })
  }, [])

  useEffect(() => {
    console.log("[PlaceInput] componentDidUpdate")
    placesAutocomplete.setVal(value)
  })

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        // onChange={event => setValue(event.target.value)}
        ref={inputEl}
      />
    </div>
  )
}

export default AddressInput
