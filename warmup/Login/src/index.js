import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

import "./styles.css";

const App = () => <Login />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
