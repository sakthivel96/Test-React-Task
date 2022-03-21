import React, { useState, useReducer } from "react";

const valid = (state, action) => {
  switch (action.type) {
    case "Input":
      return {
        ...state,
        //value: action.val,
        validEmail: action.isValidEmail,
      };
    case "InputPassword":
      return {
        ...state,
        validPassword: action.isValidPassword,
      };
    default:
      return {
        state,
      };
  }
};
const Input = (props) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [inputState, dispatch] = useReducer(valid, {
    validEmail: true,
    validPassword: true,
  });

  const setUsernameMet = (event) => {
    //parentToChild(event.target.value);
    setUserName(event.target.value);
    inputEmailChangeHandler(event.target.value)

    if (
      /^\S+@\S+\.\S+$/.test(event.target.value) ||
      event.target.value.length === 0
    ) {
      dispatch({ type: "Input", isValidEmail: true });
    } else {
      dispatch({ type: "Input", isValidEmail: false });
    }
    
  };
  const setPasswordMet = (event) => {
    setPassword(event.target.value);
    inputPasswordChangeHandler(event.target.value)

    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,15}$/.test(
        event.target.value
      ) ||
      event.target.value.length === 0
    ) {
      dispatch({
        type: "InputPassword",
        isValidPassword: true,
      });
    } else {
      dispatch({
        type: "InputPassword",
        isValidPassword: false,
      });
    }
    
  };

  const inputEmailChangeHandler = (val) => {
    props.input(val)
  }
  const inputPasswordChangeHandler = (val) => {
    props.input(val)
  }
  if (props.inputType === "Email") {
    return (
      <div>
        <input
          type="text"
          placeholder={props.placeholderText}
          onChange={setUsernameMet}
        />
        Name {userName}
        {!inputState.validEmail && <div>{props.errorText}</div>}
      </div>
    );
  }
  if (props.inputType === "Password") {
    return (
      <div>
        <input
          type="password"
          placeholder={props.placeholderText}
          onChange={setPasswordMet}
        />
        {!inputState.validPassword && <div>{props.errorText}</div>}
      </div>
    );
  }

};

export default Input;
