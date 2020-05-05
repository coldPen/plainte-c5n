import React, { useEffect, useRef } from "react";
import places from "places.js";

const AddressInput = ({
  children: label,
  name,
  placeholder,
  value,
  setValue,
  formState,
}) => {
  const inputEl = useRef(null);
  const placesRef = useRef(null);

  useEffect(() => {
    const placesAutocomplete = places({
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
      container: inputEl.current,
      type: "address",
      countries: ["FR"],
    });

    placesRef.current = placesAutocomplete;

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
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        ref={inputEl}
      />
    </div>
  );
};

export default AddressInput;
