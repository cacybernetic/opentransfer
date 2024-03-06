/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The main application entry.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-06
*	@version 0.0.2
*	@file app.jsx
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import Features from "./components/features/features.jsx";
import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner.jsx";

// Open Transfer mobile app landing page.
export default function OpenTransfer () {
  // Attributes.
  const [option, setOption] = React.useState (0);

  // Builds final landing page.
  return <React.Fragment>
    {/** Header section */}
    <Header option = {option} onOptionClicked = {id => setOption (id)}/>
    {/** Banner section */}
    <Banner/>
    {/** Features section */}
    <Features/>
  </React.Fragment>;
}
