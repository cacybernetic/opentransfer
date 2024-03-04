/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @fileoverview The application root node creation.
* @author Obrymec - obrymecsprinces@gmail.com
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-04
*	@version 0.0.1
*	@file main.jsx
*/

// Dependencies.
import ReactDOM from "react-dom/client";
import App from "./shared/app.jsx";
import React from "react";

// Let's create root node.
ReactDOM.createRoot (
  document.getElementById ("root")
).render (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
