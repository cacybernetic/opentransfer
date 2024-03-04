/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The main application entry.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-04
*	@version 0.0.1
*	@file app.jsx
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import Header from "./components/header/header.jsx";

// Open Transfer mobile app landing page.
export default function OpenTransfer () {
  // Builds final landing page.
  return <React.Fragment>
    {/** Header section */}
    <Header/>
  </React.Fragment>;
}
