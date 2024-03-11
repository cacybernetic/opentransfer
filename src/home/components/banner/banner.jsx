/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The banner view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-05
*	@updated 2024-03-11
*	@file banner.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import {ScrollManager} from "../../../common/utils/scroll/scroll.js";
import lang from "../../../common/utils/language/language.js";
import homeScreen from "/assets/images/home_screen.png";
import arrowIcon from "/assets/icons/bottom_arrow.svg";
import background from "/assets/images/background.png";
import androidIcon from "/assets/icons/android.svg";

// Banner view section.
export default function Banner({onEnter}) {
  // Attributes.
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
          <a href = '#'>
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
      </div>
      {/** Right part */}
      <div className = "banner-right-part">
        {/** Mobile app home screen */}
        <img
          alt = "Application home screen."
          src = {homeScreen}
          height = {480}
          width = {320}
        />
      </div>
    </div>
  </section>;
}
