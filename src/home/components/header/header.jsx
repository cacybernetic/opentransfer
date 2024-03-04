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
import downloadIcon from "../../../../public/assets/icons/download.svg";
import appLogo from "../../../../public/assets/logos/otr_light.png";
import menuIcon from "../../../../public/assets/icons/menu.svg";
import lang from "../../../common/utils/language/language.js";

// Header view section.
export default function Header ({option, onOptionClicked}) {
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
      {/** Language selection */}
      <select>
        <option value = "fr">FR</option>
        <option value = "en">EN</option>
      </select>
      {/** Features */}
      <span
        className = {(option === 0 ? "header-active" : '')}
        onClick = {() => onOptionClicked (0)}
      >
        {lang.getText ("tr2")}
      </span>
      {/** Support */}
      <span
        className = {(option === 1 ? "header-active" : '')}
        onClick = {() => onOptionClicked (1)}
      >
        {lang.getText ("tr3")}
      </span>
      {/** FAQs */}
      <span
        className = {(option === 2 ? "header-active" : '')}
        onClick = {() => onOptionClicked (2)}
      >
        {lang.getText ("tr4")}
      </span>
      {/** Contact us */}
      <span
        className = {(option === 3 ? "header-active" : '')}
        onClick = {() => onOptionClicked (3)}
      >
        {lang.getText ("tr5")}
      </span>
      {/** Download button */}
      <a className = "header-btn" href = "#">
        {/** Icon */}
        <img
          alt = "Icon for download button."
          height = {18} width = {18}
          src = {downloadIcon}
        />
        {/** Text */}
        <span>{lang.getText ("tr6")}</span>
      </a>
      {/** Emburger menu */}
      <img
        alt = "Emburger menu icon."
        className = "emburger-menu"
        height = {42} width = {42}
        src = {menuIcon}
      />
    </div>
  </header>;
}
