/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The contacts view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-09
*	@updated 2024-03-13
*	@file contacts.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import whatsapp from "/assets/logos/whatsapp.svg";
import closeIcon from "/assets/icons/close.svg";
import backIcon from "/assets/icons/back.svg";
import gmail from "/assets/logos/gmail.svg";

// Possible contact links view section.
export default React.forwardRef(({}, ref) => {
  // Attributes.
  const popup = React.useRef(null);

  // Toggles visibiity of faqs full questions popup.
  const togglePopup = React.useCallback(() => {
    // Whether popup is already displayed.
    if (popup?.current?.classList?.contains("cts-displayed")) {
      // Hides it.
      popup?.current?.classList?.remove("cts-displayed");
      // Shows body scrollbar. 
      document.body.style.overflowY = '';
    // Otherwise.
    } else {
      // Shows it.
      popup?.current?.classList?.add("cts-displayed");
      // Hides body scrollbar.
      document.body.style.overflowY = "hidden";
    }
  // Dependencies.
  }, [popup]);

  // Builds a network contact for customers.
  const buildNetworkContact = (text, logo) => (
    <div className = "network">
      {/** Logo container */}
      <div className = "logo">
        {/** Vector logo */}
        <img
          height = {64} width = {64}
          alt = "Network logo."
          src = {logo}
        />
      </div>
      {/** Label */}
      <span>{text}</span>
    </div>
  );

  // Called when component get mounted.
  React.useEffect(() => {
    // Exports public methods.
    ref.current = {togglePopup};
  });

  // Sends his jsx code.
  return <aside
    className = "contacts" ref = {popup}
    onClick = {togglePopup}
  >
    {/** Back icon */}
    <img
      alt = "Back icon." src = {backIcon}
      height = {32} width = {32}
    />
    {/** Main content */}
    <div
      onClick = {e => e.stopPropagation()}
      className = "cts-content"
    >
      {/** Title */}
      <div className = "cts-title">
        {/** Text */}
        <span>{lang.getText("tr5")}</span>
      </div>
      {/** Available contacts */}
      <div className = "cts-container">
        {/** Close icon*/}
        <div className = "close">
          {/** Vector image */}
          <img
            alt = "Close icon." src = {closeIcon}
            height = {32} width = {32}
            onClick = {togglePopup}
          />
        </div>
        {/** Description */}
        <span>{lang.getText("tr77")}</span>
        {/** Networks */}
        <div className = "cts-networks">
          {/** Whatsapp */}
          <a
            href = "https://chat.whatsapp.com/InLJpXa5Z4IBwFoVpM1e78"
            onClick = {togglePopup}
            target = "_blank"
          >{buildNetworkContact("Whatsapp", whatsapp)}</a>
          {/** Google mail */}
          <a
            href = "mailto:ca.cybernetic@gmail.com"
            onClick = {togglePopup}
            target = "_blank"
          >{buildNetworkContact("Gmail", gmail)}</a>
        </div>
      </div>
    </div>
  </aside>;
});
