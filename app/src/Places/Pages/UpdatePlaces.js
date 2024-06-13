import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Input from "../../Shared/Componets/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import Button from "../../Shared/Componets/FormElements/Button";

import "../Components/PlaceForm.css"

import { useForm } from "../../Shared/hooks/form-hook";


const DUMMY_PLACES = [
  {
    //array of objects
    id: "p1",
    title: "Empire state Building",
    description:
      "The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931.",
    imageUrl:
      "https://www.google.com/imgres?q=empire%20state%20building&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FEmpire_State_Building_%2528aerial_view%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&docid=XfQII-lYE0auyM&tbnid=QiJPq55a7Ph-KM&vet=12ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA..i&w=846&h=1270&hcb=2&ved=2ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7508102,
      lng: -73.9898989,
    },
    creator: "u1",
  },
  {
    //array of objects
    id: "p2",
    title: "Empire state Building",
    description:
      "The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931.",
    imageUrl:
      "https://www.google.com/imgres?q=empire%20state%20building&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FEmpire_State_Building_%2528aerial_view%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&docid=XfQII-lYE0auyM&tbnid=QiJPq55a7Ph-KM&vet=12ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA..i&w=846&h=1270&hcb=2&ved=2ahUKEwiJ1OOxlKOGAxXilu4BHVeeDRkQM3oECB4QAA",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7508102,
      lng: -73.9898989,
    },
    creator: "u2",
  },
];
const UpdatePlaces = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler]=useForm({
    title:{
      value: identifiedPlace.title,
      isValid: true
    },
    description:{
      value: identifiedPlace.description,
      isValid: true
    }
  }, true
  )

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Cound not find place</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE]}
        errorText = "Please enter a valid title"

        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}

      />
      <Input
        id="description"
        element="textarea"
        label="Title"
        validators={[ VALIDATOR_MINLENGTH(5)]}
        errorText = "Please enter a valid description (min 5 characters)"

        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disable={!formState.isValid}>UPDATE PLACES</Button>

    </form>
  );
};

export default UpdatePlaces;
