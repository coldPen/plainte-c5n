import React, { useState } from "react";

import Form from "../components/Form/Form";
import First from "../components/Form/FormSteps/First";

const Formulaire = () => {
  const [firstState, setFirstState] = useState({
    genre: "",
    nom: "",
    prenom: "",
    adresse: "",
    situation: "",
    dateSignalement: "",
    dateDelogement: "",
    dateArrete: "",
  });

  const [currentFormStep, setCurrentFormStep] = useState("STEP_1");

  return (
    <main>
      <Form>
        {
          {
            STEP_1: <First state={firstState} setState={setFirstState} />,
          }[currentFormStep]
        }
      </Form>
    </main>
  );
};

export default Formulaire;
