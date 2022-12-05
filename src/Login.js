import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="rhapsodylogo.svg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO RHAPSODY</a>
    </div>
  );
}

export default Login;
