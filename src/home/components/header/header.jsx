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
import lang from "../../../common/utils/language/language.js";

// Header view section.
export default function Header () {
  // Builds jsx elements.
  return <React.Fragment>
    {lang.getText ("tr1")}
  </React.Fragment>;
}
