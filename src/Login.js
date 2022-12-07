import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import rhapsodylogo from './rhapsodylogo.jpeg'

function Login() {
  return (
    <div className="login">
      <img
        src={rhapsodylogo}
        alt=""
      />
      <a href={accessUrl}>LOGIN TO RHAPSODY</a>
    </div>
  );
}

export default Login;
