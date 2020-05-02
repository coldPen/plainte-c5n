import React, { useState } from "react"

import Form from "../components/Form/Form"
import TextInput from "../components/Form/TextInput/TextInput"
import RadioGroup from "../components/Form/RadioGroup/RadioGroup"
import SubmitButton from "../components/Form/SubmitButton/SubmitButton"

// Load everything from markdown & GraphQL later
import { genres, situations } from "../data/formInputs"

const Formulaire = () => {
  const [genre, setGenre] = useState(null)
  const [nom, setNom] = useState(null)
  const [prenom, setPrenom] = useState(null)
  const [adresse, setAdresse] = useState(null)
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
        <TextInput
          name="adresse"
          placeholder="Quai du Port, 13002 Marseille"
          value={adresse}
          setValue={setAdresse}
        >
          Adresse postale actuelle :
        </TextInput>
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
