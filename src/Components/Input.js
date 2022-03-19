import React from "react";

const Input = (props) => {
  if (props.inputType === "Email") {
    return (
      <div>
        <input
          type="text"
          placeholder={props.placeholderText}
          onChange={props.inputType === "Email"&&props.onChange}
        />
        {!props.isValid && <div>{props.errorText}</div>}
      </div>
    );
  }
  if (props.inputType === "Password") {
    return (
      <div>
        <input
          type="password"
          placeholder={props.placeholderText}
          onChange={props.inputType === "Password" && props.onChange}
        />
        {!props.isValid && <div>{props.errorText}</div>}
      </div>
    );
  }
  return <input type="text" />;
  /*<Input
          inputType="Email"
          placeholderText="Email Id..."
          errorText="Enter the valid Email Id"
          onChange={setUsernameMet}
          isValid={inputState.validEmail}
        />
        <br />
        <Input
          inputType="Password"
          placeholderText="Password..."
          errorText="Password mush have at least one Upper Case on, Lower Case, one
          Number and one Special characters. Password Min 8 Max 15"
          onChange={setPasswordMet}
          isValid={
            inputState.validPassword
          }
        />*/
};

export default Input;
