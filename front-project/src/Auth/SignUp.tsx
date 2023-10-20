import React, { ReactElement, useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function SignUp(): ReactElement {
  const [username, setUsernameState] = useState("");
  const [email, setEmailState] = useState("");
  const [password, setPasswordState] = useState("");

  const handleSubmit = () => {
    window.location.replace("/sign-in");
  };

  return (
    <div className="container1">
      <div className="header">Register</div>

      <fieldset className="fieldset">
        <label className="username">Username</label>
        <input
          className="input"
          type="text"
          name="username"
          onChange={(e) => {
            setUsernameState(e.target.value);
          }}
        />

        <div className="email">
          <label className="email">Email</label>
          <input
            className="input"
            type="text"
            name="email"
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <label className="password">Password</label>
          <input
            className="input"
            type="text"
            name="title"
            onChange={(e) => {
              setPasswordState(e.target.value);
            }}
          />
        </div>

        <Button onClick={handleSubmit} className="submit">
          Register
        </Button>
      </fieldset>
    </div>
  );
}
