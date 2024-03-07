/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The features view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-06
*	@updated 2024-03-07
*	@file features.jsx
*	@version 0.0.2
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import screenshot1 from "/assets/images/screenshot_1.png";
import screenshot2 from "/assets/images/screenshot_2.png";
import screenshot3 from "/assets/images/screenshot_3.png";
import downArrowIcon from "/assets/icons/down_arrow.svg";
import transferIcon from "/assets/icons/exchange.svg";
import upArrowIcon from "/assets/icons/up_arrow.svg";
import checkedIcon from "/assets/icons/checked.svg";
import balanceIcon from "/assets/icons/money.svg";
import payIcon from "/assets/icons/pay.svg";

// Features view section.
export default function Features () {
  // Attributes.
  const [index, setIndex] = React.useState (0);
  const matrix = React.useRef (null);
  const infos = React.useRef (null);
  const features = [
    {
      description: lang.getText ("tr21"),
      title: lang.getText ("tr20"),
      screenshot: screenshot1,
      icon: balanceIcon
    },
    {
      description: lang.getText ("tr15"),
      title: lang.getText ("tr14"),
      screenshot: screenshot2,
      icon: transferIcon
    },
    {
      description: lang.getText ("tr17"),
      title: lang.getText ("tr16"),
      screenshot: screenshot3,
      icon: payIcon
    }
  ];

  // Overrides active index to the given position.
  const setFeature = React.useCallback (position => {
    // Whether passed position is not equal to active index.
    if (position !== index) {
      // Corrects passed position index.
      position = (
        position < 0 ? (features.length - 1) :
        (position >= features.length ? 0 : position)
      );
      // Adds `masked` class to matrix.
      if (matrix != null) matrix.current.classList.add ("masked");
      // Adds `masked` class to infos.
      if (infos != null) infos.current.classList.add ("masked");
      // Waits for 200ms.
      window.setTimeout (() => {
        // Destroys `masked` class to matrix.
        if (matrix != null) matrix.current.classList.remove ("masked");
        // Destroys `masked` class to infos.
        if (infos != null) infos.current.classList.remove ("masked");
        // Sets active index.
        setIndex (position);
      }, 200);
    }
  }, [index, features, matrix, infos]);

  // Builds jsx elements.
  return <section className = "features">
    {/** Big title */}
    <h2>{lang.getText ("tr2")}</h2>
    {/** Bottom bar */}
    <hr/>
    {/** Short description */}
    <span>{lang.getText ("tr13")}</span>
    {/** Content */}
    <div className = "features-content">
      {/** Feature */}
      <div className = "feature">
        {/** Slider */}
        <div className = "features-slider">
          {/** Vertical line */}
          <div className = "vline">
            {/** Feature 1 */}
            <div
              className = "container features-selected"
              title = {features[0].title}
            >
              <div className = "content">
                <img
                  alt = "Up arrow icon"
                  src = {upArrowIcon}
                  height = {8}
                  width = {16}
                />
                <img
                  alt = "Down arrow icon"
                  src = {downArrowIcon}
                  height = {8}
                  width = {16}
                />
              </div>
            </div>
            {/** Feature 2 */}
            <div
              title = {features[1].title}
              className = "container"
            >
              <div className = "content">
                <img
                  alt = "Up arrow icon"
                  src = {upArrowIcon}
                  height = {8}
                  width = {16}
                />
                <img
                  alt = "Down arrow icon"
                  src = {downArrowIcon}
                  height = {8}
                  width = {16}
                />
              </div>
            </div>
            {/** Feature 3 */}
            <div
              title = {features[1].title}
              className = "container"
            >
              <div className = "content">
                <img
                  alt = "Up arrow icon"
                  src = {upArrowIcon}
                  height = {8}
                  width = {16}
                />
                <img
                  alt = "Down arrow icon"
                  src = {downArrowIcon}
                  height = {8}
                  width = {16}
                />
              </div>
            </div>
          </div>
        </div>
        {/** Feature image */}
        <div className = "features-matrix" ref = {matrix}>
          {/** Shadow effect */}
          <div className = "shadow-effect"></div>
          {/** Screenshot */}
          <img
            src = {features[index].screenshot}
            alt = "Mobile app screenshot."
            height = {280}
            width = {220}
          />
        </div>
      </div>
      {/** Informations */}
      <div className = "features-infos" ref = {infos}>
        {/** Top title */}
        <div className = "features-top-title">
          {/** Icon */}
          <img
            alt = "Active feature icon."
            src = {features[index].icon}
            height = {64}
            width = {64}
          />
          {/** Text */}
          <h3>{features[index].title}</h3>
        </div>
        {/** Description */}
        <span>{features[index].description}</span>
        {/** Advantage 1 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr26")}</span>
        </div>
        {/** Advantage 2 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr27")}</span>
        </div>
        {/** Advantage 3 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr28")}</span>
        </div>
        {/** Advantage 4 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr29")}</span>
        </div>
        {/** Advantage 5 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr30")}</span>
        </div>
        {/** Advantage 6 */}
        <div className = "advantage">
          {/** Checked icon */}
          <img
            alt = "Checked list icon."
            src = {checkedIcon}
            height = {16}
            width = {16}
          />
          {/** Label */}
          <span>{lang.getText ("tr31")}</span>
        </div>
      </div>
    </div>
  </section>;
}
