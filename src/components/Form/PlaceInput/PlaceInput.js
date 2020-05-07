import React, { useEffect, useRef } from "react";
import places from "places.js";

const PlaceInput = ({
  id,
  placeholder,
  value,
  setValue,
  formState,
  searchType,
}) => {
  const inputEl = useRef(null);
  const placesRef = useRef(null);

  useEffect(() => {
    const placesAutocomplete = places({
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
      container: inputEl.current,
      language: "fr",
      type: "address",
      countries: ["FR"],
      style: false,
    });

    placesRef.current = placesAutocomplete;

    placesRef.current.on("suggestions", (e) => {
      console.log(e.suggestions);
    });

    return () => {
      placesRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    const setValueFromPlaces = () => setValue(placesRef.current.getVal());

    placesRef.current.on("change", setValueFromPlaces);
    placesRef.current.on("clear", setValueFromPlaces);

    return () => {
      placesRef.current.off("change", setValueFromPlaces);
      placesRef.current.off("clear", setValueFromPlaces);
    };
  }, [formState]);

  useEffect(() => {
    if (placesRef.current) placesRef.current.setVal(value);
  }, [value]);

  return (
    <input
      type="text"
      name={id}
      id={id}
      placeholder={placeholder}
      ref={inputEl}
    />
  );
};

export default PlaceInput;
