/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The arrows view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-12
*	@updated 2024-03-13
*	@file arrows.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import downArrowIcon from "/assets/icons/down_arrow.svg";
import upArrowIcon from "/assets/icons/up_arrow.svg";
import {
  getScrollPercent, scrollTo
} from "../../../common/utils/scroll/scroll.js";

// Arrows view section.
export default function Arrows() {
  // Attributes.
  const downArrow = React.useRef(null);
  const upArrow = React.useRef(null);
  const arrows = React.useRef(null);
  let percent = getScrollPercent();
  let timer = null;

  // Manages `scroll` event motion to display right arrow.
  const manageScroll = React.useCallback(() => {
    // The current scroll percent.
    const scrollPercent = getScrollPercent();
    // Whether timer exists.
    if (timer != null) {
      // Destroys old timer process.
      window.clearTimeout(timer);
      // Resets timer value.
      timer = null;
    }
    // Whether we detect a scroll to top.
    if (scrollPercent < percent) {
      // Hides down arrow.
      downArrow.current?.classList.remove("arrows-displayed");
      // Shows up arrow.
      upArrow.current?.classList.add("arrows-displayed");
      // Displays arrows container.
      arrows.current?.classList.remove("turn-off");
    // Whether we detect a scroll to bottom.
    } else if (scrollPercent > percent) {
      // Hides up arrow.
      upArrow.current?.classList.remove("arrows-displayed");
      // Shows down arrow.
      downArrow.current?.classList.add("arrows-displayed");
      // Displays arrows container.
      arrows.current?.classList.remove("turn-off");
    }
    // Erases old percent.
    percent = scrollPercent;
    // Starts a timer.
    timer = window.setTimeout(() => {
      // Hides down arrow.
      downArrow.current?.classList.remove("arrows-displayed");
      // Hides up arrow.
      upArrow.current?.classList.remove("arrows-displayed");
      // Hides arrows container.
      arrows.current?.classList.add("turn-off");
    }, 2000);
  // Dependencies.
  }, [getScrollPercent, downArrow, upArrow, percent, timer]);

  // Called before component get mounted.
  React.useEffect(() => {
    // Removes `scroll` event from the old callback.
    window.removeEventListener("scroll", manageScroll);
    // Listens `scroll` event.
    window.addEventListener("scroll", manageScroll);
  });

  // Builds jsx elements.
  return <aside className = "arrows turn-off" ref = {arrows}>
    {/** Up arrow */}
    <div
      ref = {upArrow} onClick = {() => {
        // Hides up arrow.
        upArrow.current?.classList.remove("arrows-displayed");
        // Go to banner.
        scrollTo("section.banner");
      }}
    >
      {/** Vector icon */}
      <img
        height = {26} width = {26}
        alt = "Up arrow icon."
        src = {upArrowIcon}
      />
    </div>
    {/** Down arrow */}
    <div
      ref = {downArrow} onClick = {() => {
        // Hides down arrow.
        downArrow.current?.classList.remove("arrows-displayed");
        // Go to footer.
        scrollTo("footer.footer");
      }}
    >
      {/** Vector icon */}
      <img
        height = {26} width = {26}
        alt = "Down arrow icon."
        src = {downArrowIcon}
      />
    </div>
  </aside>;
}
