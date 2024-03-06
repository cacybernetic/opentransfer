/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The features view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-06
*	@updated 2024-03-06
*	@file features.jsx
*	@version 0.0.1
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";

// Features view section.
export default function Features () {
  // Builds jsx elements.
  return <section className = "features">
    {/** Big title */}
    <h2>{lang.getText ("tr2")}</h2>
    {/** Bottom bar */}
    <hr/>
    {/** Short description */}
    <span>{lang.getText ("tr13")}</span>
    
  </section>;
}
