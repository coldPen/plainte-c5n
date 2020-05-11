import React, { useState, useEffect } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";

import useDebounce from "../../../hooks/useDebounce";

const geoSearch = (value) => {
  return axios
    .get(`https://api-adresse.data.gouv.fr/search/?q=${value}&citycode=13055`)
    .then((resp) => resp.data);
};

const GeoInput = ({ id, placeholder, value, setValue }) => {
  const [searchExp, setSearchExp] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchExp = useDebounce(searchExp, 500);

  useEffect(() => {
    if (debouncedSearchExp) {
      setIsSearching(true);
      const encodedSearchExp = encodeURIComponent(debouncedSearchExp).replace(
        /%20/g,
        "+"
      );
      geoSearch(encodedSearchExp).then((response) => {
        setIsSearching(false);
        const results = response.features.map(
          (feature) => feature.properties.label
        );
        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchExp]);

  const onSuggestionsFetchRequested = ({ value }) => setResults(value);
  const onSuggestionsClearRequested = () => setResults([]);

  return (
    <Autosuggest
      suggestions={results}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
    />
    // <>
    //   <input
    //     type="text"
    //     name={id}
    //     id={id}
    //     placeholder={placeholder}
    //     //   value={value}
    //     onChange={(event) => setSearchExp(event.target.value)}
    //   />
    //   {isSearching && <div>Searching ...</div>}
    //   <ul>
    //     {results.map((result) => (
    //       <li>{result}</li>
    //     ))}
    //   </ul>
    // </>
  );
};

export default GeoInput;
