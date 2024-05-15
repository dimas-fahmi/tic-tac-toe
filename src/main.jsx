import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game";

// CSS Initializations
import "./css/reset.css";
import "./css/directives.css";
import "./css/var.css";
import "./css/style.css";
import "./css/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
