import React from "react";

// Load everything from markdown & GraphQL later
import { genres, situations } from "../../../data/formInputs";

const FormStep1 = ({}) => (
  <div>
    <RadioGroup options={genres} name="genre" value={genre} setValue={setGenre}>
      Je suis :
    </RadioGroup>
    <TextInput name="nom" placeholder="Gaudin" value={nom} setValue={setNom}>
      Nom :
    </TextInput>
    <TextInput
      name="prénom"
      placeholder="Jean-Claude"
      value={prenom}
      setValue={setPrenom}
    >
      Prénom :
    </TextInput>
    <PlaceInput
      name="adresse"
      placeholder="Quai du Port, 13002 Marseille"
      value={adresse}
      setValue={setAdresse}
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
            setValue={setDateSignalement}
          >
            Date du signalement :
          </DateInput>
        ),
        CAS_A3: (
          <>
            <DateInput
              name="date-delogement"
              value={dateDelogement}
              setValue={setDateDelogement}
            >
              Date du délogement :
            </DateInput>
            <DateInput
              name="date-arrete"
              value={dateArrete}
              setValue={setDateArrete}
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

export default FormStep1;
