/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The features view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-06
*	@updated 2024-04-15
*	@file features.jsx
*	@version 0.0.4
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import {ScrollManager} from "../../../common/utils/scroll/scroll.js";
import screenshot1fr4 from "/assets/images/screenshot_2_fr.mp4";
import screenshot1en4 from "/assets/images/screenshot_2_en.mp4";
import screenshot2fr4 from "/assets/images/screenshot_3_fr.mp4";
import screenshot2en4 from "/assets/images/screenshot_3_en.mp4";
import screenshot3fr4 from "/assets/images/screenshot_4_fr.mp4";
import screenshot3en4 from "/assets/images/screenshot_4_en.mp4";
import screenshot1en from "/assets/images/screenshot_2_en.png";
import screenshot1fr from "/assets/images/screenshot_2_fr.png";
import screenshot2en from "/assets/images/screenshot_3_en.png";
import screenshot2fr from "/assets/images/screenshot_3_fr.png";
import screenshot3en from "/assets/images/screenshot_4_en.png";
import screenshot3fr from "/assets/images/screenshot_4_fr.png";
import lang from "../../../common/utils/language/language.js";
import rightArrowIcon from "/assets/icons/arrow_right.svg";
import leftArrowIcon from "/assets/icons/left_arrow.svg";
import downArrowIcon from "/assets/icons/down_arrow.svg";
import transferIcon from "/assets/icons/exchange.svg";
import upArrowIcon from "/assets/icons/up_arrow.svg";
import checkedIcon from "/assets/icons/checked.svg";
import balanceIcon from "/assets/icons/money.svg";
import payIcon from "/assets/icons/pay.svg";

// Features view section.
export default function Features({onEnter}) {
  // Attributes.
  const activeLangId = lang.getActiveLanguage()?.id;
  const [index, setIndex] = React.useState(1);
  const feature = React.useRef(null);
  const matrix = React.useRef(null);
  const infos = React.useRef(null);
  const features = [
    {
      screenshot: (activeLangId === 0 ? screenshot1en : screenshot1fr),
			video: (activeLangId === 0 ? screenshot1en4 : screenshot1fr4),
      description: lang.getText("tr21"),
      title: lang.getText("tr20"),
      icon: balanceIcon
    },
    {
      screenshot: (activeLangId === 0 ? screenshot2en : screenshot2fr),
			video: (activeLangId === 0 ? screenshot2en4 : screenshot2fr4),
      description: lang.getText("tr15"),
      title: lang.getText("tr14"),
      icon: transferIcon
    },
    {
      screenshot: (activeLangId === 0 ? screenshot3en : screenshot3fr),
			video: (activeLangId === 0 ? screenshot3en4 : screenshot3fr4),
      description: lang.getText("tr17"),
      title: lang.getText("tr16"),
      icon: payIcon
    }
  ];

  // Generates an advantage.
  const buildAdvantage = React.useCallback(text => (
    <div className = "advantage">
      {/** Checked icon */}
      <img
        alt = "Checked list icon."
        src = {checkedIcon}
        height = {16}
        width = {16}
      />
      {/** Label */}
      <span>{lang.getText(text)}</span>
    </div>
  // Dependencies.
  ), [checkedIcon, lang]);

  // Overrides active index to the given position.
  const setFeature = React.useCallback(position => {
    // Whether passed position isn't equal to active index.
    if (position !== index) {
      // Adds `masked` class to matrix.
      if (matrix != null) matrix.current.classList.add("masked");
      // Adds `masked` class to infos.
      if (infos != null) infos.current.classList.add("masked");
			// Removes the old video clip.
			document.querySelector("div.preview > video").remove();
      // Gets lines.
      const lines = document.querySelectorAll(
        "div.features-slider > div.line"
      );
      // Corrects passed position index.
      position = (
        position < 0 ? (features.length - 1) :
        (position >= features.length ? 0 : position)
      );
      // Removing `selected` class from old active feature line.
      for (let line of lines) {
        // Destroys it.
        line.children[index].classList.remove("features-selected");
      }
      // Waits for 200ms.
      window.setTimeout(() => {
        // Destroys `masked` class to matrix.
        if (matrix != null) matrix.current.classList.remove("masked");
        // Destroys `masked` class to infos.
        if (infos != null) infos.current.classList.remove("masked");
				// Creates a source tag.
				const source = document.createElement("source");
				// Creates a video tag.
				const video = document.createElement("video");
				// Loads target video.
				source.src = features[position].video;
				// Sets video type.
				source.type = "video/mp4";
				// Launch video automatically.
				video.autoplay = true;
				// Disables sound emission.
				video.muted = true;
				// Enables infinite play.
				video.loop = true;
				// Adds loaded video.
				video.appendChild(source);
				// Adds video clip.
				document.querySelector("div.preview").appendChild(video);
        // Adding `selected` class to new active feature.
        for (let line of lines) {
          // Adds it.
          line.children[position].classList.add("features-selected");
        }
        // Sets active index.
        setIndex(position);
      }, 200);
    }
  // Dependencies.
  }, [index, features, matrix, infos]);

  // Generates feature point selection.
  const buildFeature = React.useCallback((pos, active, tooltip, turn) => (
    <div
      className = {`container${(active ? " features-selected" : '')}`}
      aria-label = {features[pos].title}
      onClick = {() => setFeature(pos)}
      data-tts = {tooltip}
    >
      {/** Arrows hoster */}
      <div className = "content">
        {/** Top arrow icon */}
        <img
          src = {(turn ? leftArrowIcon : upArrowIcon)}
          onClick = {() => setFeature(index - 1)}
          alt = "Up arrow icon."
          height = {8}
          width = {16}
        />
        {/** Bottom arrow icon */}
        <img
          src = {(turn ? rightArrowIcon : downArrowIcon)}
          onClick = {() => setFeature(index + 1)}
          alt = "Down arrow icon."
          height = {8}
          width = {16}
        />
      </div>
    </div>
  // Dependencies.
  ), [
    rightArrowIcon, leftArrowIcon, downArrowIcon,
    upArrowIcon, features, setFeature
  ]);

  // Generates carousel slider.
  const buildCarouselSlider = React.useCallback((tooltip, turn) => (
    <div className = "features-slider">
      {/** Line */}
      <div className = "line">
        {/** Balance consultation */}
        {buildFeature(0, false, tooltip, turn)}
        {/** Money transfer */}
        {buildFeature(1, true, tooltip, turn)}
        {/** Shop payment */}
        {buildFeature(2, false, tooltip, turn)}
      </div>
    </div>
  // Dependencies.
  ), [buildFeature]);

  // Called when component get mounted.
  React.useEffect(() => {
    // Focus on the current section for scrolling.
    new ScrollManager({
      root: document.querySelector("div#root"),
      target: feature.current,
      offsetBottom: 240,
      onEnter: onEnter,
      offsetTop: 240,
      scope: window
    });
  });

  // Builds jsx elements.
  return <section className = "features" ref = {feature}>
    {/** Big title */}
    <h2>{lang.getText("tr2")}</h2>
    {/** Bottom bar */}
    <hr/>
    {/** Short description */}
    <span dangerouslySetInnerHTML = {{
      __html: lang.getText("tr13")
    }}></span>
    {/** Content */}
    <div className = "features-content">
      {/** Active feature */}
      <div className = "active-feature">
        {/** Slider */}
        <div className = "vertical-carousel">
          {/** Carousel slider */}
          {buildCarouselSlider("right", false)}
        </div>
        {/** Feature image */}
        <div className = "features-matrix" ref = {matrix}>
          {/** Shadow effect */}
          <div className = "shadow-effect"></div>
          {/** Screenshot */}
					<div className = "preview">
						{/** Image */}
						<img
							src = {features[index].screenshot}
							alt = "Mobile app screenshot."
							height = {280}
							width = {220}
						/>
						{/** Video */}
						<video autoPlay muted loop>
							<source
								src = {features[index].video}
								type = "video/mp4"
							/>
						</video>
					</div>
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
        {buildAdvantage("tr26")}
        {/** Advantage 2 */}
        {buildAdvantage("tr27")}
        {/** Advantage 3 */}
        {buildAdvantage("tr28")}
        {/** Advantage 4 */}
        {buildAdvantage("tr29")}
        {/** Advantage 5 */}
        {buildAdvantage("tr30")}
        {/** Advantage 6 */}
        {buildAdvantage("tr31")}
        {/** Slider */}
        <div className = "horizontal-carousel">
          {/** Carousel slider */}
          {buildCarouselSlider("up", true)}
        </div>
      </div>
    </div>
  </section>;
}
