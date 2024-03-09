/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The faqs view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-08
*	@updated 2024-03-09
*	@file faqs.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import substractIcon from "/assets/icons/sustract.svg";
import searchIcon from "/assets/icons/search.svg";
import clearIcon from "/assets/icons/close.svg";
import backIcon from "/assets/icons/back.svg";
import addIcon from "/assets/icons/add.svg";

// Question view.
function Question({data}) {
  // Attributes.
  const {show, question, answer} = data;
  const [isHidden, hide] = React.useState(!show);

  // Sends his jsx code.
  return <div className = {
    `faqs-question${(!isHidden ? " faqs-qst-deployed" : '')}`
  }>
    {/** Header */}
    <div
      onClick = {() => hide(!isHidden)}
      className = "faqs-qst-header"
    >
      {/** Question */}
      <h3>{question}</h3>
      {/** Icon container */}
      <span
        data-tts = "up"
        aria-label = {
          (isHidden ? lang.getText("tr72") : lang.getText("tr73"))
        }
      >
        {/** Vector icon */}
        <img
          src = {(isHidden ? addIcon : substractIcon)}
          onClick = {() => hide(!isHidden)}
          height = {26} width = {26}
          alt = "Right icon."
        />
      </span>
    </div>
    {/** Content*/}
    <div className = {
      `faqs-qst-content${(!isHidden ? " faqs-deployed" : '')}`
    }>
      {/** Separator */}
      <hr/>
      {/** Answer text */}
      <span>{answer}</span>
    </div>
  </div>;
}

// Frequently asked questions view section.
export default function FAQs() {
  // Attributes.
  const input = React.useRef(null);
  const clear = React.useRef(null);
  const faqsList = [
    {
      question: lang.getText("tr36"),
      answer: lang.getText("tr37"),
      show: false,
    },
    {
      question: lang.getText("tr38"),
      answer: lang.getText("tr39"),
      show: false,
    },
    {
      question: lang.getText("tr40"),
      answer: lang.getText("tr41"),
      show: false,
    },
    {
      question: lang.getText("tr42"),
      answer: lang.getText("tr43"),
      show: false,
    },
    {
      question: lang.getText("tr44"),
      answer: lang.getText("tr45"),
      show: false,
    },
    {
      question: lang.getText("tr46"),
      answer: lang.getText("tr47"),
      show: false,
    },
    {
      question: lang.getText("tr48"),
      answer: lang.getText("tr49"),
      show: false,
    },
    {
      question: lang.getText("tr50"),
      answer: lang.getText("tr51"),
      show: false,
    },
    {
      question: lang.getText("tr52"),
      answer: lang.getText("tr53"),
      show: false,
    },
    {
      question: lang.getText("tr54"),
      answer: lang.getText("tr55"),
      show: false,
    },
    {
      question: lang.getText("tr56"),
      answer: lang.getText("tr57"),
      show: false,
    },
    {
      question: lang.getText("tr58"),
      answer: lang.getText("tr59"),
      show: false,
    },
    {
      question: lang.getText("tr60"),
      answer: lang.getText("tr61"),
      show: false,
    },
    {
      question: lang.getText("tr62"),
      answer: lang.getText("tr63"),
      show: false,
    }
  ];

  // Clears search input content.
  const clearInput = () => {
    // Whether input exists.
    if (input != null) {
      // Clears input text.
      input.current.value = '';
      // Hides clear button.
      clear?.current?.classList?.add("turn-off");
    }
  }

  // Called when input text value changed.
  const onInputValueChanged = () => {
    // The current input value.
    const value = input?.current?.value?.trim();
    // Whether value exists.
    if (value != null && value.length > 0) {
      // Shows clear button.
      clear?.current?.classList?.remove("turn-off");
    // Otherwise.
    } else {
      // Hides clear button.
      clear?.current?.classList?.add("turn-off");
    }
  }

  // Builds jsx elements.
  return <section className = "faqs">
    {/** Big title */}
    <h2>{lang.getText("tr35")}</h2>
    {/** Bottom bar */}
    <hr/>
    {/** Short description */}
    <span dangerouslySetInnerHTML = {{
      __html: lang.getText("tr68")
    }}></span>
    {/** Content */}
    <div className = "faqs-content">
      {/** Question 1 */}
      <Question data = {faqsList[0]}/><br/>
      {/** Question 2 */}
      <Question data = {faqsList[3]}/><br/>
      {/** Question 3 */}
      <Question data = {faqsList[7]}/><br/>
      {/** Question 4 */}
      <Question data = {faqsList[1]}/><br/>
      {/** Question 5 */}
      <Question data = {faqsList[4]}/><br/>
      {/** Question 6 */}
      <Question data = {faqsList[6]}/>
    </div>
    {/** Popup */}
    <aside className = "faqs-popup">
      {/** Back icon */}
      <img
        height = {32} width = {32}
        alt = "Back icon"
        src = {backIcon}
      />
      {/** Text */}
      <span>{lang.getText("tr4")}</span>
      {/** Input container */}
      <div className = "faqs-input">
        {/** Search container */}
        <div className = "search">
          {/** Vector icon */}
          <img
            height = {24} width = {24}
            alt = "Search icon"
            src = {searchIcon}
          />
        </div>
        {/** Input */}
        <input
          onChange = {() => onInputValueChanged ()}
          placeholder = {lang.getText("tr74")}
          type = "text" ref = {input}
        />
        {/** Clear container */}
        <div className = "clear turn-off" ref = {clear}>
          {/** Clear icon */}
          <img
            onClick = {() => clearInput ()}
            height = {24} width = {24}
            alt = "Clear icon"
            src = {clearIcon}
          />
        </div>
      </div>
    </aside>
  </section>;
}
