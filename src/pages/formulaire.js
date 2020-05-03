import React, { useState } from "react"

import Form from "../components/Form/Form"
import TextInput from "../components/Form/TextInput/TextInput"
import PlaceInput from "../components/Form/PlaceInput/PlaceInput"
import RadioGroup from "../components/Form/RadioGroup/RadioGroup"
import SubmitButton from "../components/Form/SubmitButton/SubmitButton"

// Load everything from markdown & GraphQL later
import { genres, situations } from "../data/formInputs"

const Formulaire = () => {
  const [genre, setGenre] = useState(null)
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [adresse, setAdresse] = useState("")
  const [situation, setSituation] = useState(null)
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
          setValue={setSituation}
        >
          Ma situation actuelle :
        </RadioGroup>
        <SubmitButton>Confirmer</SubmitButton>
      </Form>
    </main>
  )
}

export default Formulaire
