import React from "react";
import "./login.css";
import { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import Input from "./Input"

const valid = (state, action) => {
  switch (action.type) {
    case "Input":
      return {
        ...state,
        //value: action.val,
        validEmail: action.isValidEmail,
        validPassword: action.isValidPassword,
      };
    default:
      return {
        state,
      };
  }
};
const Login = () => {
  const defaultUserName = "admin";
  const defaultPassword = "admin";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const [inputState, dispatch] = useReducer(valid, {
    inputType: "",
    validEmail: true,
    validPassword: true,
  });


  const [isOnSubmit, setIsOnSubmit] = useState(false);


  const loginSubmit = (event) => {
    event.preventDefault();
    if ((userName.trim()).length === 0 || (password.trim()).length === 0) {
    setIsOnSubmit(false);
      dispatch({
        type: "Input",
        isValidEmail: false,
        isValidPassword: false,
      });

      //setEmailValidate(false)
      //setPasswordValidate(false)

      setUserName(" ");
      setPassword(" ");
    } else setIsOnSubmit(true);
  };

  if (userName === "" && isOnSubmit) {
    const content = (
      <div className="result-div">Username and password not empty </div>
    );
    alert(`UserName and Password not be empty`);
    return ReactDOM.createPortal(content, document.getElementById("alert-div"));
    
  } else if (
    (userName !== defaultUserName || password !== defaultPassword) &&
    isOnSubmit
  ) {
    const content = (
      <div className="result-div">Wrong Username or Password </div>
    );
    alert(`Wrong Username or Password`);
    return ReactDOM.createPortal(content, document.getElementById("alert-div"));
  } else if (
    userName === defaultUserName &&
    password === defaultPassword &&
    isOnSubmit
  ) {
    const content = <div className="result-div">Login Successful</div>;
    alert(`Login Successful`);
    return ReactDOM.createPortal(content, document.getElementById("alert-div"));
  }

  return (
    <div className="login-form">
      <p>Login Form test working!!!</p>
      <form onSubmit={loginSubmit}>
        <Input
          inputType="Email"
          placeholderText="Email"
          errorText="Enter Valid Email"
          input={setUserName}
        />
        {!inputState.validEmail?
        <div>Enter Valid Email</div>:null}
        <br />

        <Input
          inputType="Password"
          placeholderText="Password"
          errorText="Enter Valid Password"
          input={setPassword}
          />
        {!inputState.validPassword?
        <div>Enter Valid Password</div>:null}
        <br />

        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;