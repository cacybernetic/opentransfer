/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The features view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-06
*	@updated 2024-03-06
*	@file features.jsx
*	@version 0.0.1
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import screenshot1 from "/assets/images/screenshot_1.png";
import checkedIcon from "/assets/icons/checked.svg";
import balanceIcon from "/assets/icons/money.svg";

// Features view section.
export default function Features () {
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
        {/** Screenshot */}
        <img
          alt = "Mobile app screenshot."
          src = {screenshot1}
          height = {280}
          width = {220}
        />
      </div>
      {/** Informations */}
      <div className = "features-infos">
        {/** Top title */}
        <div className = "top-title">
          {/** Icon */}
          <img
            alt = "Active feature icon."
            src = {balanceIcon}
            height = {32}
            width = {32}
          />
          {/** Text */}
          <h3>{lang.getText ("tr20")}</h3>
        </div>
        {/** Description */}
        <span>{lang.getText ("tr21")}</span>
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
