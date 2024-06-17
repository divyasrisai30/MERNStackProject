import { useCallback, useReducer } from "react";

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
    case 'SET_DATA':
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      }

    default:
      return action
    }
  
  }

export const useForm = (initialInputs, initialFormValidity) =>{ 
    // custome form should always start with small letters
    const [formState, dispatch]=useReducer(formReducer, {

        // inputs and isValid should not be hard coded
        inputs: initialInputs,
        isValid: initialFormValidity
      })

      const inputhandler = useCallback((id, value, isValid)=>{
        dispatch({
          type:"INPUT_CHANGE",
          value: value,
          isValid: isValid,
          inputId: id
        })
      }, [])
      const setFormData = useCallback((inputData, formValidity)=>{
        dispatch({
          type: 'SET_DATA',
          inputs: inputData,
          formIsValid: formValidity
        })
      },[])
    //   since it is a custom hook we need to have a return
    return [formState, inputhandler, setFormData]

}