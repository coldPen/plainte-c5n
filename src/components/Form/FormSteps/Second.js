import React from "react";

import PlaceInput from "../PlaceInput/PlaceInput";
import DateInput from "../DateInput/DateInput";

import { slugify } from "../../../utils";

const Second = ({ situation, state, setState }) => {
  const { rues, dateSignalement, dateDelogement, dateArrete } = state;

  const isFormValid =
    (situation === "CAS_A2" ? dateSignalement : true) &&
    (situation === "CAS_A3" ? dateDelogement && dateArrete : true);

  const setRues = (rue) => {
    if (rue) setState({ ...state, rues: [...state.rues, rue] });
  };

  return {
    CAS_A1: (
      <>
        <div>
          <label htmlFor="rues">
            Dans quelles rues avez-vous observé un ou plusieurs immeubles en
            péril ?
          </label>
          <PlaceInput
            id="rues"
            value={rues}
            setValue={setRues}
            formState={state}
          />
        </div>
        <ul>
          {rues.map((rue) => (
            <li key={slugify(rue)}>{rue}</li>
          ))}
        </ul>
      </>
    ),
    CAS_A2: (
      <DateInput
        name="date-signalement"
        value={dateSignalement}
        setValue={(dateSignalement) => setState({ ...state, dateSignalement })}
      >
        Date du signalement :
      </DateInput>
    ),
    CAS_A3: (
      <>
        <DateInput
          name="date-delogement"
          value={dateDelogement}
          setValue={(dateDelogement) => setState({ ...state, dateDelogement })}
        >
          Date du délogement :
        </DateInput>
        <DateInput
          name="date-arrete"
          value={dateArrete}
          setValue={(dateArrete) => setState({ ...state, dateArrete })}
        >
          Date de l'arrêté de péril :
        </DateInput>
      </>
    ),
  }[situation];
};

export default Second;
