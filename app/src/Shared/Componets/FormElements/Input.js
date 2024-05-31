import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
      case "TOUCH":
        return{
            ...state,
            isTouched: true
        }
    default:
      return state;
  }
}

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });
 const {id, onInput} = props
 const {value, isValid} = inputState

useEffect(()=>{
    onInput(id, value, isValid )
},[onInput, id, value, isValid])

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
const touchandler = () => {
  dispatch({ type: "TOUCH" });
};

  
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* Dynamic input using a variable caled element. the element can be a input or textarea where text area is a default with rows of 3 */}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;
