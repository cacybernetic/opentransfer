/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @fileoverview The application root node creation.
* @author Obrymec - obrymecsprinces@gmail.com
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-13
*	@version 0.0.2
*	@file main.jsx
*/

// Dependencies.
import ReactDOM from "react-dom/client";
import App from "./home/app.jsx";
import React from "react";

// Let's create root node.
ReactDOM.createRoot (
  document.getElementById ("root")
).render (
  <React.StrictMode><App/></React.StrictMode>
);
