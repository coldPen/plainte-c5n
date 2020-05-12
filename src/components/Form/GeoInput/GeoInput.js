import React, { Component } from "react";
import axios from "axios";
import Autosuggest from "react-autosuggest";
import debounce from "lodash/debounce";

// import useDebounce from "../../../hooks/useDebounce";

const geoSearch = (value) =>
  axios
    .get(`https://api-adresse.data.gouv.fr/search/?q=${value}&citycode=13055`)
    .then((resp) => resp.data);

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}

class GeoInput extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      isLoading: false,
    };

    this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 500);
  }

  loadSuggestions(value) {
    this.setState({
      isLoading: true,
    });

    const encodedValue = encodeURIComponent(value).replace(/%20/g, "+");

    geoSearch(encodedValue)
      .then((response) =>
        response.features.map((feature) => feature.properties.label)
      )
      .then((suggestions) => {
        if (value === this.state.value) {
          this.setState({
            isLoading: false,
            suggestions,
          });
        } else {
          // Ignore suggestions if input value changed
          this.setState({
            isLoading: false,
          });
        }
      });
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedLoadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions, isLoading } = this.state;
    const inputProps = {
      placeholder: "Type something",
      value,
      onChange: this.onChange,
    };
    const status = isLoading ? "Loading..." : "Type to load suggestions";

    return (
      <div>
        <div className="status">
          <strong>Status:</strong> {status}
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

// const GeoInput = ({ id, placeholder, value, setValue }) => {
//   const [searchExp, setSearchExp] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);

//   const debouncedSearchExp = useDebounce(searchExp, 500);

//   useEffect(() => {
//     if (debouncedSearchExp) {
//       setIsSearching(true);
//       const encodedSearchExp = encodeURIComponent(debouncedSearchExp).replace(
//         /%20/g,
//         "+"
//       );
//       geoSearch(encodedSearchExp).then((response) => {
//         setIsSearching(false);
//         const results = response.features.map(
//           (feature) => feature.properties.label
//         );
//         setSuggestions(results);
//       });
//     } else {
//       setSuggestions([]);
//     }
//   }, [debouncedSearchExp]);

//   return (
//     <>
//       <input
//         type="text"
//         name={id}
//         id={id}
//         placeholder={placeholder}
//         //   value={value}
//         onChange={(event) => setSearchExp(event.target.value)}
//       />
//       {isSearching && <div>Searching ...</div>}
//       <ul>
//         {suggestions.map((suggestion) => (
//           <li>{suggestion}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default GeoInput;
