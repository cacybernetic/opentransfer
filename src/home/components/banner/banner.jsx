/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The banner view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-05
*	@updated 2024-04-03
*	@file banner.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import {ScrollManager} from "../../../common/utils/scroll/scroll.js";
import screenshot1en from "/assets/images/screenshot_1_en.png";
import screenshot1fr from "/assets/images/screenshot_1_fr.png";
import lang from "../../../common/utils/language/language.js";
import arrowIcon from "/assets/icons/bottom_arrow.svg";
import background from "/assets/images/background.png";
import androidIcon from "/assets/icons/android.svg";
import warningIcon from "/assets/icons/warn.svg";

// Banner view section.
export default function Banner({onEnter, onDownload}) {
  // Attributes.
  const activeLangId = lang.getActiveLanguage()?.id;
  const banner = React.useRef(null);

  // Called when component get mounted.
  React.useEffect(() => {
    // Focus on the current section for scrolling.
    new ScrollManager({
      root: document.querySelector("div#root"),
      target: banner.current,
      offsetBottom: 240,
      onEnter: onEnter,
      offsetTop: 240,
      scope: window
    });
  });

  // Builds jsx elements.
  return <section className = "banner" ref = {banner}>
    {/** Background */}
    <img alt = "Background image." src = {background}/>
    {/** Banner container */}
    <div className = "banner-content">
      {/** Left part */}
      <div className = "banner-left-part">
        {/** Text */}
        <span>{lang.getText("tr8")}</span>
        {/** Description */}
        <span>{lang.getText("tr9")}</span>
        {/** Downloads */}
        <div className = "banner-downloads">
          {/** Android apk */}
          <a onClick = {() => onDownload()}>
            <div>
              <img
                src = {androidIcon} height = {24}
                alt = "Android APK icon."
                width = {24}
              />
            </div>
            <div>
              <span>{lang.getText("tr6")}</span>
              <span>{lang.getText("tr12")}</span>
            </div>
            <div>
              <img
                src = {arrowIcon} height = {24}
                alt = "Download icon."
                width = {24}
              />
            </div>
          </a>
        </div>
        {/** Warning message */}
        <div className = "warning">
          {/** Icon */}
          <img
            alt = "App compatibility warning icon."
            src = {warningIcon} height = {18}
            width = {18}
          />
          {/** Message */}
          <span>{lang.getText("tr93")}</span>
        </div>
      </div>
      {/** Right part */}
      <div className = "banner-right-part">
        {/** Mobile app home screen */}
        <img
          src = {(activeLangId === 0 ? screenshot1en : screenshot1fr)}
          alt = "Application home screen."
          height = {480}
          width = {320}
        />
      </div>
    </div>
  </section>;
}
