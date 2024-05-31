import React from "react";

import Input from "../../Shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../Shared/util/validators";

import "./NewPlaces.css";

export default function NewPlaces() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title. "
      ></Input>
    </form>
  );
}
