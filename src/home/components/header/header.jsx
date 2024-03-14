/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The header view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-13
*	@file header.jsx
*	@version 0.0.5
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import {getScrollPercent} from "../../../common/utils/scroll/scroll.js";
import lang from "../../../common/utils/language/language.js";
import rightArrowIcon from "/assets/icons/right_arrow.svg";
import downloadIcon from "/assets/icons/download.svg";
import appLogo from "/assets/logos/otr_light.png";
import closeIcon from "/assets/icons/close.svg";
import menuIcon from "/assets/icons/menu.svg";

// Header view section.
export default React.forwardRef(({onOptionClicked, onDownload}, ref) => {
  // Attributes.
  const activeLangId = lang.getActiveLanguage()?.id?.toString();
  const [state, setState] = React.useState(false);
  const [option, setOption] = React.useState(-1);
  const dropdown = React.useRef(null);
  const hook = React.useRef(null);
  const menu = React.useRef(null);

  // Overrides active language.
  const setActiveLanguage = React.useCallback(event => {
    // Sets active language data.
    lang.setActiveLanguage(parseInt(event.target.value));
    // Reloads web page.
    window.location.reload();
  // Dependencies.
  }, [lang]);

  // Overrides active menu option to anoter option.
  const changeOption = React.useCallback(pos => {
    // Throws `onOptionClicked` event.
    onOptionClicked(pos);
    // Sets active option.
    setOption(pos);
  // Dependencies.
  }, [onOptionClicked, setOption]);

  // Generates menu option for large screens.
  const buildOption = React.useCallback((index, text) => (
    <span
      className = {(option === index ? "header-active" : '')}
      onClick = {() => changeOption(index)}
    >{lang.getText(text)}</span>
  // Dependencies.
  ), [changeOption, option, lang]);

  // Calculates header background color and backdrop filter.
  const computeBgColor = React.useCallback(() => {
    // The header tag.
    const header = document.querySelector("header.header");
    // The color opacity.
    let opacity = ((getScrollPercent() - 30) / 20);
    // Corrects generated opacity.
    opacity = (opacity > 1.0 ? 1.0 : opacity);
    // Updates header background color.
    header.style.backgroundColor = `rgba(26, 86, 48, ${opacity})`;
    // Whether we have an opacity.
    if (opacity > 0.0) header.style.backdropFilter = "blur(4px)";
    // Otherwise.
    else header.style.backdropFilter = "none";
  // Dependencies.
  }, [getScrollPercent]);

  // Shows/Hides contextual menu.
  const toggleMenu = React.useCallback(() => {
    // Whether we must show it.
    if (!state) {
      // Destroys `turn-off` class from hook.
      hook?.current?.classList.remove("turn-off");
      // Destroys `turn-off` class from menu.
      menu?.current?.classList.remove("turn-off");
      // Changes state.
      setState(true);
    // Otherwise.
    } else {
      // Adds `turn-off` class from hook.
      hook?.current?.classList.add("turn-off");
      // Adds `turn-off` class from menu.
      menu?.current?.classList.add("turn-off");
      // Changes state.
      setState(false);
    }
  // Dependencies.
  }, [setState, state, hook, menu]);

  // Manages contextual menu toggle.
  const manageMenuToggle = React.useCallback(() => {
    // Whether current is bigger than 736.
    if (window.innerWidth > 736 && state) toggleMenu();
  // Dependencies.
  }, [toggleMenu, state]);

  // Hides contextual menu whether it shown.
  const closeMenu = React.useCallback(() => {
    // Whether menu is displayed.
    if (state) toggleMenu();
  // Dependencies.
  }, [toggleMenu, state]);

  // Called when a contextual menu option get clicked.
  const onMenuOptionClicked = React.useCallback(pos => {
    // Hides contextual menu.
    window.setTimeout(toggleMenu, 200);
    // Overrides active menu option.
    changeOption(pos);
  // Dependencies.
  }, [changeOption, toggleMenu]);

  // Generates contextual menu option for small screens.
  const buildContextualOption = React.useCallback((index, text) => (
    <div onClick = {() => onMenuOptionClicked(index)}>
      {/** Label */}
      <span>{lang.getText(text)}</span>
      {/** Right arrow */}
      <img
        alt = "Option menu right arrow."
        className = "emburger-menu"
        height = {24} width = {24}
        src = {rightArrowIcon}
      />
    </div>
  // Dependencies.
  ), [onMenuOptionClicked, rightArrowIcon, lang]);

  // Called before component get mounted.
  React.useLayoutEffect(() => {
    // Exports public features.
    ref.current = {setOption};
  });

  // Called when component is mounted.
  React.useEffect(() => {
    // Destroys old `resize` event callback.
    window.removeEventListener("resize", manageMenuToggle);
    // Destroys old `scroll` event callback.
    window.removeEventListener("scroll", computeBgColor);
    // Listens `resize` event.
    window.addEventListener("resize", manageMenuToggle);
    // Listens `scroll` event.
    window.addEventListener("scroll", computeBgColor);
    // Manages toggle whether that's possible.
    manageMenuToggle();
    // Computes header background color.
    computeBgColor();
  });

  // Builds jsx elements.
  return <header className = "header">
    {/** App section */}
    <div className = "app">
      {/** Logo */}
      <img
        onClick = {() => window.location.reload()}
        src = {appLogo} alt = "App logo."
        height = {64} width = {64}
      />
      {/** Name */}
      <span
        onClick = {() => window.location.reload()}
      >{lang.getText("tr1")}</span>
    </div>
    {/** Right options */}
    <div className = "header-options">
      {/** Language selection */}
      <select
        onClick = {closeMenu} name = "language"
        ref = {dropdown} value = {activeLangId}
        onChange = {setActiveLanguage}
      >
        <option value = '0'>EN</option>
        <option value = '1'>FR</option>
      </select>
      {/** Features */}
      {buildOption(0, "tr2")}
      {/** FAQs */}
      {buildOption(1, "tr4")}
      {/** About */}
      {buildOption(2, "tr3")}
      {/** Contact us */}
      {buildOption(3, "tr5")}
      {/** Download button */}
      <a className = "header-btn" onClick = {() => {
        // Throws `download` event.
        onDownload();
        // Hides opened menu.
        closeMenu();
      }}>
        {/** Icon */}
        <img
          alt = "Icon for download button."
          height = {18} width = {18}
          src = {downloadIcon}
        />
        {/** Text */}
        <span>{lang.getText("tr6")}</span>
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
      <div className = "header-menu-hook turn-off" ref = {hook}></div>
    </div>
    {/** Contextual menu */}
    <div className = "header-contextual-menu turn-off" ref = {menu}>
      {/** Features */}
      {buildContextualOption(0, "tr2")}
      {/** FAQs */}
      {buildContextualOption(1, "tr4")}
      {/** About */}
      {buildContextualOption(2, "tr3")}
      {/** Contact us */}
      {buildContextualOption(3, "tr5")}
    </div>
  </header>;
});
