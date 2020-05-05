import React, { useEffect } from "react";

import TextInput from "../TextInput/TextInput";
import PlaceInput from "../PlaceInput/PlaceInput";
import RadioGroup from "../RadioGroup/RadioGroup";
import DateInput from "../DateInput/DateInput";
import FormButton from "../FormButton/FormButton";

// Load everything from markdown & GraphQL later
import { genres, situations } from "../../../data/formInputs";

const First = ({ state, setState }) => {
  const {
    genre,
    nom,
    prenom,
    adresse,
    situation,
    dateSignalement,
    dateDelogement,
    dateArrete,
  } = state;

  const isformValid =
    genre &&
    nom &&
    prenom &&
    adresse &&
    situation &&
    (situation === "CAS_A2" ? dateSignalement : true) &&
    (situation === "CAS_A3" ? dateDelogement && dateArrete : true);

  const onSituationChange = (situation) => {
    setState({
      ...state,
      situation,
      dateSignalement: "",
      dateDelogement: "",
      dateArrete: "",
    });
  };

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
        setValue={onSituationChange}
      >
        Ma situation actuelle :
      </RadioGroup>
      {
        {
          CAS_A2: (
            <DateInput
              name="date-signalement"
              value={dateSignalement}
              setValue={(dateSignalement) =>
                setState({ ...state, dateSignalement })
              }
            >
              Date du signalement :
            </DateInput>
          ),
          CAS_A3: (
            <>
              <DateInput
                name="date-delogement"
                value={dateDelogement}
                setValue={(dateDelogement) =>
                  setState({ ...state, dateDelogement })
                }
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
        }[situation]
      }
      <FormButton disabled={!isformValid}>Confirmer</FormButton>
    </div>
  );
};

export default First;
