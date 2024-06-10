import React from "react";

import Input from "../../Shared/Componets/FormElements/Input";
import {  VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import Button from "../../Shared/Componets/FormElements/Button"


import "./NewPlaces.css";
import { useForm } from "../../Shared/hooks/form-hook";



export default function NewPlaces() {
  // using custom hooks
  const [formState, inputhandler]=useForm({
    // Dynaic input
    // initialInputs
      title:{
        value:"",
        isValid: false
      },
      description:{
        value:"",
        isValid: false
      },
      address:{
        value:"",
        isValid: false
      }
    },
    // initialFormValidity
    false

  );



  const placeSubmitHandler = (event)=>{
    event.preventDefault();
    console.log(formState.inputs) //send this to backend after connectivity
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler} >
      <Input
      id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title. "
        onInput={inputhandler}
      ></Input>
      <Input
      id='description'
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters). "
        onInput={inputhandler}
      ></Input>
      <Input
      id='address'
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address). "
        onInput={inputhandler}
      ></Input>
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
}
