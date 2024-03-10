/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The footer view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-10
*	@updated 2024-03-10
*	@file footer.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import whatsapp from "/assets/logos/light_whatsapp.svg";
import gmail from "/assets/logos/light_gmail.svg";
import appLogo from "/assets/logos/otr_light.png";

// Footer view section.
export default function Footer({onOptionClicked}) {
  // Builds jsx elements.
  return <footer className = "footer">
    {/** Top container */}
    <div className = "foot-top">
      {/** App logo */}
      <img
        onClick = {() => window.location.reload()}
        src = {appLogo} alt = "Mobile app logo."
        height = {48} width = {48}
      />
      {/** Global options */}
      <div className = "global-options">
        {/** Features */}
        <span
          onClick = {() => onOptionClicked(0)}
        >{lang.getText("tr2")}</span>
        {/** FAQs */}
        <span
          onClick = {() => onOptionClicked(1)}
        >{lang.getText("tr4")}</span>
        {/** Contact us */}
        <span
          onClick = {() => onOptionClicked(2)}
        >{lang.getText("tr5")}</span>
      </div>
      {/** Right elements */}
      <div className = "right-tags">
        {/** Whatsapp logo */}
        <img
          alt = "Whatsapp light logo."
          height = {28} width = {28}
          src = {whatsapp}
        />
        {/** Gmail logo */}
        <img
          height = {28} width = {28}
          alt = "Gmail light logo."
          src = {gmail}
        />
      </div>
    </div>
    {/** Bottom container */}
    <div className = "foot-bottom">
      {/** Separator */}
      <hr/>
      {/** Copyright */}
      <span>{lang.getText("tr80")}</span>
    </div>
  </footer>;
}
