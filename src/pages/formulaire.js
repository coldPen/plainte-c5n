import React, { useState } from "react";

import Form from "../components/Form/Form";
import First from "../components/Form/FormSteps/First";
import Second from "../components/Form/FormSteps/Second";

const Formulaire = () => {
  const [firstState, setFirstState] = useState({
    genre: "",
    nom: "",
    prenom: "",
    adresse: "",
    situation: "",
  });

  const [secondState, setSecondState] = useState({
    dateSignalement: "",
    dateDelogement: "",
    dateArrete: "",
  });

  const [formStep, setFormStep] = useState("STEP_1");

  return (
    <main>
      <Form>
        {
          {
            STEP_1: (
              <First
                state={firstState}
                setState={setFirstState}
                setFormStep={setFormStep}
              />
            ),
            STEP_2: (
              <Second
                situation={firstState.situation}
                state={secondState}
                setState={setSecondState}
              />
            ),
          }[formStep]
        }
      </Form>
    </main>
  );
};

export default Formulaire;
