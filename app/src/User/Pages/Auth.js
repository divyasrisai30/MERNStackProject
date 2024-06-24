import React, { useContext, useState } from "react";
import Input from "../../Shared/Componets/FormElements/Input";
import { useForm } from "../../Shared/hooks/form-hook";
import Card from "../../Shared/Componets/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import Button from "../../Shared/Componets/FormElements/Button";

import "./Auth.css";
import { AuthContext } from "../../Places/Context/auth-context";

const Auth = () => {
    const auth= useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if(!isLoginMode){
        // !isLoginMode === in sign in modes. so now we are moving from signin mode to login mode

        setFormData({
            ...formState.inputs,
            name : undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    }else{
        // is in loginmode
        setFormData({
            ...formState.inputs,
            name:{
                value:'',
                isValid:false
            }
        }
            ,false
        )
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter the name"
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {!isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </form>
      <Button onClick={switchModeHandler}>
        Switch To {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;
