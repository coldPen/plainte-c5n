import React from "react";

import DateInput from "../DateInput/DateInput";

const Second = ({ situation, state, setState }) => {
  const { dateSignalement, dateDelogement, dateArrete } = state;

  const isFormValid =
    (situation === "CAS_A2" ? dateSignalement : true) &&
    (situation === "CAS_A3" ? dateDelogement && dateArrete : true);

  return {
    CAS_A1: <></>,
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
