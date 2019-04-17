import React from "react";
import WithLogin from "./WithLogin";

const Login = ({ handleSend, handleValue, email, pass }) => (
  <div className="App">
    <form className="login">
      <h1 className="title">Login</h1>
      <input
        className="input"
        type="mail"
        placeholder="Email"
        value={email.value}
        id={email.key}
        onChange={evt => handleValue(evt)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={pass.value}
        id={pass.key}
        onChange={evt => handleValue(evt)}
      />
      <button className="send" onClick={() => handleSend}>
        Send
      </button>
    </form>
  </div>
);

export default WithLogin(Login);
