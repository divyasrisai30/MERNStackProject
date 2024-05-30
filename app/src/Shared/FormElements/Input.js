import React, { useReducer } from "react";


import "./Input.css";


function inputReducer(state, action){
    switch(action.type){
        case ("CHANGE"):
            return {
                ...state,
                value: action.val,
                isValid: true
            }
        default:
            return state
    }
}
const Input = props =>{
    const [inputState, dispatch]= useReducer(inputReducer, {value:'',isValid: false})
    const changeHandler = event=>{
        dispatch({type:"CHANGE",  val: event.target.value})
    }
    const element = props.element==='input'? 
    (<input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value}/>)
    :(<textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value}/>);
    return (
        <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element} 
            {/* Dynamic input using a variable caled element. the element can be a input or textarea where text area is a default with rows of 3 */}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
        
    )

}
export default Input;