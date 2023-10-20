import Axios from "axios";
import React, { ReactElement, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logged } from "../reducers/Logged";
import Button from "react-bootstrap/Button";
import "./SignIn.css";

export default function SignInState(): ReactElement {
  const [enteredEmail, setEmailState] = useState("");
  const [enteredPassword, setPasswordState] = useState("");
  const dispatch = useDispatch();

  const login = () => {
    localStorage.setItem("account", JSON.stringify(""));
    dispatch({ type: Logged.SIGN_IN });
    window.location.replace("/profile");
  };

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    email.current?.focus();
  }, []);

  return (
    <div className="container1">
      <div className="header">Sign in</div>
      <fieldset className="fieldset">
        <div className="email">
          <label className="email"> Email</label>
          <input
            className="input"
            type="text"
            name="email"
            onChange={(e) => {
              setEmailState(e.target.value);
            }}
            ref={email}
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
            ref={password}
          />
        </div>
        <Button className="submit" onClick={login}>
          Login
        </Button>
      </fieldset>

      <div className="create">
        <div className="dont">Dont have Account?</div>
        <Link to="/sign-up">
          <strong className="create">Create account</strong>
        </Link>
      </div>
    </div>
  );
}
