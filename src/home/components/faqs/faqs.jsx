/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The faqs view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-08
*	@updated 2024-03-08
*	@file faqs.jsx
*	@version 0.0.1
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import substractIcon from "/assets/icons/sustract.svg";
import addIcon from "/assets/icons/add.svg";

// Question view.
function Question({show, question, answer}) {
  // Attributes.
  const [isHidden, hide] = React.useState(!show);

  // Sends his jsx code.
  return <div className = "faqs-question">
    {/** Header */}
    <div className = "header">
      {/** Question */}
      <h3>{question}</h3>
      {/** icon */}
      <img
        src = {isHidden ? addIcon : substractIcon}
        height = {32} width = {32}
        alt = "Right icon."
      />
    </div>
    {/** Content*/}
    <div className = "content">
      {/** Answer text */}
      <span>{answer}</span>
    </div>
  </div>;
}

// Frequently asked questions view section.
export default function FAQs() {
  // Attributes.
  const faqsList = [
    {
      question: lang.getText("tr36"),
      answer: lang.getText("tr37"),
      show: false,
    }
  ];

  // Builds jsx elements.
  return <section className = "faqs">
    {/** Big title */}
    <h2>{lang.getText("tr35")}</h2>
    {/** Bottom bar */}
    <hr/>
    {/** Short description */}
    <span>{lang.getText("tr68")}</span>
    {/** Content */}
    <div className = "faqs-content">
      {/** First question */}

    </div>
  </section>;
}
