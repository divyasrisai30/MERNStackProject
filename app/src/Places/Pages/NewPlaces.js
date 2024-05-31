import React, { useCallback, useReducer } from "react";

import Input from "../../Shared/Componets/FormElements/Input";
import {  VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import Button from "../../Shared/Componets/FormElements/Button"


import "./NewPlaces.css";

const formReducer=(state, action)=>{
  switch(action.type){
  case 'INPUT_CHANGE':
    //logic to ruturn
    let formIsValid = true;
    for(const inputId in state.inputs){
        if(inputId=== action.inputId){
          formIsValid = formIsValid && action.isValid;
        }
        else{
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
    }
    return{
      ...state,
      inputs:{
        ...state.inputs,
        [action.inputId] : {
          value: action.value,
          isValid: action.isValid
        }
      },
      isValid: formIsValid

    }
  default:
    return action
  }

}

export default function NewPlaces() {
  const [formState, dispatch]=useReducer(formReducer, {
    inputs:{
      title:{
        value:"",
        isValid: false
      },
      description:{
        value:"",
        isValid: false
      }
    },
    isValid: false
  })

  const inputhandler = useCallback((id, value, isValid)=>{
    dispatch({
      type:"INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id
    })
  }, [dispatch])

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
