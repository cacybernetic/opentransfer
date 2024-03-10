/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The contacts view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-09
*	@updated 2024-03-09
*	@file contacts.jsx
*	@version 0.0.1
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import whatsapp from "/assets/logos/whatsapp.svg";
import facebook from "/assets/logos/facebook.svg";
import closeIcon from "/assets/icons/close.svg";
import backIcon from "/assets/icons/back.svg";
import gmail from "/assets/logos/gmail.svg";

// Possible contact links view section.
export default function Contacts() {
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

  // Sends his jsx code.
  return <aside className = "contacts">
    {/** Back icon */}
    <img
      height = {32} width = {32}
      alt = "Back icon."
      src = {backIcon}
    />
    {/** Main content */}
    <div className = "cts-content">
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
            height = {32} width = {32}
            alt = "Close icon."
            src = {closeIcon}
          />
        </div>
        {/** Description */}
        <span>{lang.getText("tr77")}</span>
        {/** Networks */}
        <div className = "cts-networks">
          {/** Whatsapp */}
          {buildNetworkContact("Whatsapp", whatsapp)}
          {/** Google mail */}
          {buildNetworkContact("Gmail", gmail)}
          {/** Facebook */}
          {buildNetworkContact("Facebook", facebook)}
        </div>
      </div>
    </div>
  </aside>;
}
