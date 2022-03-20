import React from "react";
import "./login.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

const Login = () => {
  const defaultUserName = "admin";
  const defaultPassword = "admin";

  const [userName, setUserName] = useState("-");
  const [password, setPassword] = useState("-");

  const [isOnSubmit, setIsOnSubmit] = useState(false);

  const loginSubmit = (event) => {
    event.preventDefault();
    if (
      userName.length === 0 ||
      password.length === 0 ||
      userName === " " ||
      password === " "
    ) {
      setIsOnSubmit(false);
      /*dispatch({
        type: "Input",
        isValidEmail: false,
      });
      dispatch({
        type: "InputPassword",
        isValidPassword: false,
      });
      */
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
          setUserNameValue={setUserName}
        />

        <div> Name {userName}</div>
        <br />
        <Input
          inputType="Password"
          placeholderText="Password"
          errorText="Enter Valid Password"
          setPasswordValue={setPassword}
        />
        <div> Password {password}</div>
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
