import React from "react";
import "./login.css";
import { useState, useReducer } from "react";
import ReactDOM from "react-dom";

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
<<<<<<< Updated upstream
  console.log(userName)
=======

  const [inputState, dispatch] = useReducer(valid, {
    inputType: "",
    validEmail: true,
    validPassword: true,
  });

  //const [emailValidate, setEmailValidate] = useState(true)
  //const [passwordValidate, setPasswordValidate] = useState(true)

>>>>>>> Stashed changes
  const [isOnSubmit, setIsOnSubmit] = useState(false);

  const setUsernameMet = (event) => {
  
  };
  
  const setPasswordMet = (event) => {
    // setPassword(event.target.value);
    // if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,15}$/.test(
        // event.target.value
      // )
    // ) {
      
      // dispatch({
        // type: "Input",
        // isValidPassword: true,
      // });
    // } else {
      // dispatch({
        // type: "Input",
        // isValidPassword: false,
      // });
    // }
  };

  const loginSubmit = (event) => {
    event.preventDefault();
<<<<<<< Updated upstream
    if ((userName.trim()).length === 0 || (password.trim()).length === 0) {
=======
    if (userName.length === 0 || password.length === 0) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <Input
          inputType="Email"
          placeholderText="Email"
          errorText="Enter Valid Email"
          input={setUserName}
=======
        <input type="text" placeholder="Email" input={setUserName} 
>>>>>>> Stashed changes
        />
        {!inputState.validEmail?
        <div>Enter Valid Email</div>:null}
        <br />

<<<<<<< Updated upstream
        <Input
          inputType="Password"
          placeholderText="Password"
          errorText="Enter Valid Password"
          input={setPassword}
=======
        {/* <p>Name  fd {userName}</p> */}

        <input type="password" placeholder="Password"  onChange={setPasswordMet}
>>>>>>> Stashed changes
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