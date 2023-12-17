import Axios from "axios";
import React, { ReactElement, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logged } from "../reducers/Logged";
import Button from "react-bootstrap/Button";
import "./SignIn.css";

export default function SignInState(): ReactElement {
  const [enteredUsername, setUsernameState] = useState("");
  const [enteredPassword, setPasswordState] = useState("");
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const response = await Axios.post("http://127.0.0.1:8000/api/sign-in/", {
        username: enteredUsername,
        password: enteredPassword,
      }, {
        withCredentials: true,
      });

      console.log(response.data.access);

      const token = response.data.access;

      localStorage.setItem("jwtToken", token);

      dispatch({ type: Logged.SIGN_IN });
      window.location.replace("/profile");
    } catch (error) {
      console.error("Login failed", error);
    }
  };


  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    username.current?.focus();
  }, []);

  return (
    <div className="container1">
      <div className="header">Sign in</div>
      <fieldset className="fieldset">
        <div className="username">
          <label className="username">Username</label>
          <input
            className="input"
            type="text"
            name="username"
            onChange={(e) => {
              setUsernameState(e.target.value);
            }}
            ref={username}
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
