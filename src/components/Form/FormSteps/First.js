import React from "react";

import TextInput from "../TextInput/TextInput";
import PlaceInput from "../PlaceInput/PlaceInput";
import RadioGroup from "../RadioGroup/RadioGroup";
import FormButton from "../FormButton/FormButton";

// Load everything from markdown & GraphQL later
import { genres, situations } from "../../../data/formInputs";

const First = ({ state, setState, setFormStep }) => {
  const { genre, nom, prenom, adresse, situation } = state;

  const isformValid = genre && nom && prenom && adresse && situation;

  return (
    <div>
      <RadioGroup
        options={genres}
        name="genre"
        value={genre}
        setValue={(genre) => setState({ ...state, genre })}
      >
        Je suis :
      </RadioGroup>
      <TextInput
        name="nom"
        placeholder="Gaudin"
        value={nom}
        setValue={(nom) => setState({ ...state, nom })}
      >
        Nom :
      </TextInput>
      <TextInput
        name="prénom"
        placeholder="Jean-Claude"
        value={prenom}
        setValue={(prenom) => setState({ ...state, prenom })}
      >
        Prénom :
      </TextInput>
      <PlaceInput
        name="adresse"
        placeholder="Quai du Port, 13002 Marseille"
        value={adresse}
        setValue={(adresse) => setState({ ...state, adresse })}
        formState={state}
      >
        Adresse postale actuelle :
      </PlaceInput>
      <RadioGroup
        options={situations}
        name="situation"
        value={situation}
        setValue={(situation) => setState({ ...state, situation })}
      >
        Ma situation actuelle :
      </RadioGroup>
      <FormButton
        disabled={!isformValid}
        setFormStep={() => setFormStep("STEP_2")}
      >
        Confirmer
      </FormButton>
    </div>
  );
};

export default First;
