import React, { useState } from "react";

const WithLogin = Componente => () => {
  const [state, setState] = useState({
    email: { value: "", isValid: false, key: "email", error: "" },
    pass: { value: "", isValid: false, key: "pass", error: "" }
  });

  const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSend = evt => {
    console.log(evt);
  };

  const handleValue = evt => {
    setState({
      ...state,
      [evt.target.id]: {
        ...state[evt.target.id],
        value: evt.target.value,
        isValid:
          evt.target.id === "email" ? isValidEmail(evt.target.value) : true
      }
    });
    console.log(state);
  };

  return (
    <Componente handleSend={handleSend} handleValue={handleValue} {...state} />
  );
};

export default WithLogin;
