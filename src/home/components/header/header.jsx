/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The header view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-06
*	@file header.jsx
*	@version 0.0.4
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import rightArrowIcon from "/assets/icons/right_arrow.svg";
import downloadIcon from "/assets/icons/download.svg";
import appLogo from "/assets/logos/otr_light.png";
import closeIcon from "/assets/icons/close.svg";
import menuIcon from "/assets/icons/menu.svg";

// Header view section.
export default function Header ({option, onOptionClicked}) {
  // Attributes.
  const [state, setState] = React.useState (false);
  const hook = React.useRef (null);
  const menu = React.useRef (null);

  // Hides contextual menu whether it shown.
  const closeMenu = () => {
    // Whether menu is displayed.
    if (state) toggleMenu ();
  };

  // Called when a contextual menu option get clicked.
  const onMenuOptionClicked = pos => {
    // Throws `onOptionClicked` event.
    onOptionClicked (pos);
    // Hides contextual menu.
    window.setTimeout (toggleMenu, 200); 
  };

  // Shows/Hides contextual menu.
  const toggleMenu = () => {
    // Whether we must show it.
    if (!state) {
      // Destroys `turn-off` class from hook.
      if (hook != null) hook.current.classList.remove ("turn-off");
      // Destroys `turn-off` class from menu.
      if (menu != null) menu.current.classList.remove ("turn-off");
      // Changes state.
      setState (true);
    // Otherwise.
    } else {
      // Adds `turn-off` class from hook.
      if (hook != null) hook.current.classList.add ("turn-off");
      // Adds `turn-off` class from menu.
      if (menu != null) menu.current.classList.add ("turn-off");
      // Changes state.
      setState (false);
    }
  };

  // Called when component is mounted.
  React.useEffect (() => {
    // Listens window resizement.
    window.addEventListener ("resize", () => {
      // Whether current is bigger than 736.
      if (window.innerWidth > 736 && state) {
        // Hides contextual menu.
        toggleMenu ();
      }
    });
  });

  // Builds jsx elements.
  return <header>
    {/** App section */}
    <div className = "app">
      {/** Logo */}
      <img
        onClick = {() => window.location.reload ()}
        src = {appLogo} alt = "App logo."
        height = {64} width = {64}
      />
      {/** Name */}
      <span>{lang.getText ("tr1")}</span>
    </div>
    {/** Right options */}
    <div className = "header-options">
      {/** Language selection */}
      <select onClick = {closeMenu}>
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
      <a className = "header-btn" href = "#" onClick = {closeMenu}>
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
        style = {{transform: `scale(${(!state ? 1.0 : 1.36)})`}}
        src = {(!state ? menuIcon : closeIcon)}
        alt = "Emburger menu icon."
        className = "emburger-menu"
        height = {42} width = {42}
        onClick = {toggleMenu}
      />
      {/** Hook */}
      <div
        className = "header-menu-hook turn-off"
        ref = {hook}
      ></div>
    </div>
    {/** Contextual menu */}
    <div
      className = "header-contextual-menu turn-off"
      ref = {menu}
    >
      {/** Features */}
      <div onClick = {() => onMenuOptionClicked (0)}>
        {/** Label */}
        <span>{lang.getText ("tr2")}</span>
        {/** Right arrow */}
        <img
          alt = "Option menu right arrow."
          className = "emburger-menu"
          height = {24} width = {24}
          src = {rightArrowIcon}
        />
      </div>
      {/** Support */}
      <div onClick = {() => onMenuOptionClicked (1)}>
        {/** Label */}
        <span>{lang.getText ("tr3")}</span>
        {/** Right arrow */}
        <img
          alt = "Option menu right arrow."
          className = "emburger-menu"
          height = {24} width = {24}
          src = {rightArrowIcon}
        />
      </div>
      {/** FAQs */}
      <div onClick = {() => onMenuOptionClicked (2)}>
        {/** Label */}
        <span>{lang.getText ("tr4")}</span>
        {/** Right arrow */}
        <img
          alt = "Option menu right arrow."
          className = "emburger-menu"
          height = {24} width = {24}
          src = {rightArrowIcon}
        />
      </div>
      {/** Contact us */}
      <div onClick = {() => onMenuOptionClicked (3)}>
        {/** Label */}
        <span>{lang.getText ("tr5")}</span>
        {/** Right arrow */}
        <img
          alt = "Option menu right arrow."
          className = "emburger-menu"
          height = {24} width = {24}
          src = {rightArrowIcon}
        />
      </div>
    </div>
  </header>;
}
