/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The about view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-14
*	@updated 2024-03-15
*	@file about.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import obrymec from "/assets/images/obrymec.jpg";
import mokira from "/assets/images/mokira.jpeg";
import backIcon from "/assets/icons/back.svg";

// About view section.
export default React.forwardRef(({onBack}, ref) => {
  // Attributes.
  const popup = React.useRef(null);

  // Toggles visibility of about section.
  const toggleAbout = React.useCallback(() => {
    // Whether popup is already displayed.
    if (popup?.current?.classList?.contains("about-displayed")) {
      // Hides it.
      popup?.current?.classList?.remove("about-displayed");
      // Shows body scrollbar. 
      document.body.style.overflowY = '';
      // Calls `back` event callback.
      onBack();
    // Otherwise.
    } else {
      // Shows it.
      popup?.current?.classList?.add("about-displayed");
      // Hides body scrollbar.
      document.body.style.overflowY = "hidden";
    }
  // Dependencies.
  }, [popup]);

  // Called when component get mounted.
  React.useEffect(() => {
    // Exports public methods.
    ref.current = {toggleAbout};
  });

  // Builds jsx elements.
  return <aside className = "about" ref = {popup}>
    {/** */}
    <span>{lang.getText("tr3")}</span>
    {/** App foundation */}
    <span dangerouslySetInnerHTML = {{
      __html: `${lang.getText("tr40")}<br/>${lang.getText("tr41")}`
    }}></span>
    {/** Little top space */}
    <br/>
    {/** Sponsors */}
    <div className = "sponsors">
      {/** Developers */}
      <span>{lang.getText("tr91")}</span>
    </div>
    {/** Avatars */}
    <div className = "avatars">
      {/** Arnold Mokira */}
      <div className = "mokira">
        {/** Avatar */}
        <img
          alt = "Mokira developer avatar profil."
          height = {64} width = {64}
          src = {mokira}
        />
        {/** Data */}
        <div className = "data">
          {/** Title */}
          <h6>Arnold Mokira T.</h6>
          {/** Role */}
          <h6>Designer</h6>
        </div>
      </div>
      {/** Prince Obrymec */}
      <div className = "obrymec">
        {/** Avatar */}
        <img
          alt = "Obrymec developer avatar profil."
          height = {64} width = {64}
          src = {obrymec}
        />
        {/** Data */}
        <div className = "data">
          {/** Title */}
          <h6>Prince Obrymec T.</h6>
          {/** Role */}
          <h6>Developer</h6>
        </div>
      </div>
    </div>
    {/** Little top space */}
    <br/>
    {/** Comeback */}
    <div className = "return">
      {/** Back button */}
      <button onClick = {toggleAbout}>
        {/** Back arrow */}
        <img
          height = {24} width = {24}
          alt = "Back arrow icon."
          src = {backIcon}
        />
        {/** Text */}
        <span>{lang.getText("tr92")}</span>
      </button>
    </div>
  </aside>;
});
