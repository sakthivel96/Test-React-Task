import React,{ useState, useReducer } from "react";

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
    setUserName(event.target.value);

    props.setUserNameValue({userName});

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

    props.setPasswordValue({password})
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

  if (props.inputType === "Email") {
    return (
      <div>
        <input
          type="text"
          placeholder={props.placeholderText}
          onChange={setUsernameMet}
          
        />
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
