import React from "react";

import TextInput from "../TextInput/TextInput";
// import PlaceInput from "../PlaceInput/PlaceInput";
import GeoInput from "../GeoInput/GeoInput";
import RadioGroup from "../RadioGroup/RadioGroup";
import FormButton from "../FormButton/FormButton";

// Load everything from markdown & GraphQL later
import { genres, situations } from "../../../data/formInputs";

const First = ({ state, setState, setFormStep }) => {
  const { genre, nom, prenom, adresse, situation } = state;

  const isformValid = genre && nom && prenom && adresse && situation;

  return (
    <div>
      <div>
        <p>Je suis :</p>
        <RadioGroup
          options={genres}
          name="genre"
          value={genre}
          setValue={(genre) => setState({ ...state, genre })}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom :</label>
        <TextInput
          id="nom"
          placeholder="Gaudin"
          value={nom}
          setValue={(nom) => setState({ ...state, nom })}
        />
      </div>
      <div>
        <label htmlFor="prénom">Prénom</label>
        <TextInput
          id="prénom"
          placeholder="Jean-Claude"
          value={prenom}
          setValue={(prenom) => setState({ ...state, prenom })}
        />
      </div>
      <div>
        <label htmlFor="adresse">Adresse postale actuelle :</label>
        <GeoInput
          id="adresse"
          placeholder="Quai du Port, 13002 Marseille"
          value={adresse}
          setValue={(adresse) => setState({ ...state, adresse })}
        />
        {/* <PlaceInput
          id="adresse"
          placeholder="Quai du Port, 13002 Marseille"
          value={adresse}
          setValue={(adresse) => setState({ ...state, adresse })}
          formState={state}
        /> */}
      </div>
      <div>
        <p>Ma situation actuelle :</p>
        <RadioGroup
          options={situations}
          name="situation"
          value={situation}
          setValue={(situation) => setState({ ...state, situation })}
        />
      </div>
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
