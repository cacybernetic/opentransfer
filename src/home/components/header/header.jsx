/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The header view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-04
*	@file header.jsx
*	@version 0.0.1
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import appLogo from "../../../../public/assets/logos/otr_light.png";
import lang from "../../../common/utils/language/language.js";

// Header view section.
export default function Header () {
  // Builds jsx elements.
  return <header>
    {/** App section */}
    <div className = "app">
      {/** Logo */}
      <img src = {appLogo} alt = "App logo." height = {64} width = {64}/>
      {/** Name */}
      <span>{lang.getText ("tr1")}</span>
    </div>
    {/** Right options */}
    <div className = "options">
      
    </div>
  </header>;
}
