import React, { useState, useEffect } from "react"

import Form from "../components/Form/Form"
import TextInput from "../components/Form/TextInput/TextInput"
import PlaceInput from "../components/Form/PlaceInput/PlaceInput"
import RadioGroup from "../components/Form/RadioGroup/RadioGroup"
import DateInput from "../components/Form/DateInput/DateInput"
import SubmitButton from "../components/Form/SubmitButton/SubmitButton"

// Load everything from markdown & GraphQL later
import { genres, situations } from "../data/formInputs"

const Formulaire = () => {
  useEffect(() => {
    console.group()
    console.log("genre", genre)
    console.log("nom", nom)
    console.log("prenom", prenom)
    console.log("adresse", adresse)
    console.log("situation", situation)
    console.log(
      '(situation === "CAS_A2" ? dateSignalement : true)',
      situation === "CAS_A2" ? dateSignalement : true
    )
    console.log(
      '(situation === "CAS_A3" ? dateDelogement && dateArrete : true)',
      situation === "CAS_A3" ? dateDelogement && dateArrete : true
    )
    console.groupEnd()
  })

  const [genre, setGenre] = useState(null)
  const [nom, setNom] = useState(null)
  const [prenom, setPrenom] = useState(null)
  const [adresse, setAdresse] = useState(null)
  const [situation, setSituation] = useState(null)
  const [dateSignalement, setDateSignalement] = useState(null)
  const [dateDelogement, setDateDelogement] = useState(null)
  const [dateArrete, setDateArrete] = useState(null)

  const onSituationChange = situation => {
    setDateSignalement(null)
    setDateDelogement(null)
    setDateArrete(null)

    setSituation(situation)
  }

  const isformValid =
    genre &&
    nom &&
    prenom &&
    adresse &&
    situation &&
    (situation === "CAS_A2" ? dateSignalement : true) &&
    (situation === "CAS_A3" ? dateDelogement && dateArrete : true)

  return (
    <main>
      <Form>
        <RadioGroup
          options={genres}
          name="genre"
          value={genre}
          setValue={setGenre}
        >
          Je suis :
        </RadioGroup>
        <TextInput
          name="nom"
          placeholder="Gaudin"
          value={nom}
          setValue={setNom}
        >
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
        <SubmitButton disabled={!isformValid}>Confirmer</SubmitButton>
      </Form>
    </main>
  )
}

export default Formulaire
