import React, { useState, useEffect } from "react";

import Form from "../components/Form/Form";
import TextInput from "../components/Form/TextInput/TextInput";
import PlaceInput from "../components/Form/PlaceInput/PlaceInput";
import RadioGroup from "../components/Form/RadioGroup/RadioGroup";
import DateInput from "../components/Form/DateInput/DateInput";
import FormButton from "../components/Form/FormButton/FormButton";

import FormStep1 from "../components/Form/FormSteps/FormStep1";

import formContext from "../context";

const Formulaire = () => {
  useEffect(() => {
    console.group();
    console.log("genre", genre);
    console.log("nom", nom);
    console.log("prenom", prenom);
    console.log("adresse", adresse);
    console.log("situation", situation);
    console.log(
      '(situation === "CAS_A2" ? dateSignalement : true)',
      situation === "CAS_A2" ? dateSignalement : true
    );
    console.log(
      '(situation === "CAS_A3" ? dateDelogement && dateArrete : true)',
      situation === "CAS_A3" ? dateDelogement && dateArrete : true
    );
    console.groupEnd();
  });

  const [genre, setGenre] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [situation, setSituation] = useState("");
  const [dateSignalement, setDateSignalement] = useState("");
  const [dateDelogement, setDateDelogement] = useState("");
  const [dateArrete, setDateArrete] = useState("");

  const [currentFormStep, setCurrentFormStep] = useState("STEP_1");

  const onSituationChange = (situation) => {
    setDateSignalement(null);
    setDateDelogement(null);
    setDateArrete(null);

    setSituation(situation);
  };

  const isformValid =
    genre &&
    nom &&
    prenom &&
    adresse &&
    situation &&
    (situation === "CAS_A2" ? dateSignalement : true) &&
    (situation === "CAS_A3" ? dateDelogement && dateArrete : true);

  return (
    <main>
      <formContext.Provider value={}>
        <Form>
          {
            {
              STEP_1: <FormStep1 />,
            }[currentFormStep]
          }
        </Form>
      </formContext.Provider>
    </main>
  );
};

export default Formulaire;
