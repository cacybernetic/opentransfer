/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The faqs view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-08
*	@updated 2024-03-12
*	@file faqs.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import {ScrollManager} from "../../../common/utils/scroll/scroll.js";
import lang from "../../../common/utils/language/language.js";
import substractIcon from "/assets/icons/sustract.svg";
import searchIcon from "/assets/icons/search.svg";
import clearIcon from "/assets/icons/close.svg";
import backIcon from "/assets/icons/back.svg";
import addIcon from "/assets/icons/add.svg";

// Question view.
function Question({data}) {
  // Attributes.
  const {show, question, answer, useHTML} = data;
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
      {(!useHTML ? <span>{answer}</span> : <span
        dangerouslySetInnerHTML = {{__html: answer}}
      ></span>)}
    </div>
  </div>;
}

// Frequently asked questions view section.
export default function FAQs({onContactUsClicked, onEnter}) {
  // Attributes.
  const [tag, setTag] = React.useState('');
  const popup = React.useRef(null);
  const input = React.useRef(null);
  const clear = React.useRef(null);
  const faqs = React.useRef(null);
  const faqsList = [
    {
      question: lang.getText("tr36"),
      answer: lang.getText("tr37"),
      useHTML: false,
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
      useHTML: true,
      show: false,
    },
    {
      question: lang.getText("tr42"),
      answer: lang.getText("tr43"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr44"),
      answer: lang.getText("tr45"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr46"),
      answer: lang.getText("tr47"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr48"),
      answer: lang.getText("tr49"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr50"),
      answer: lang.getText("tr51"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr52"),
      answer: lang.getText("tr53"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr54"),
      answer: lang.getText("tr55"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr56"),
      answer: lang.getText("tr57"),
      useHTML: true,
      show: false,
    },
    {
      question: lang.getText("tr58"),
      answer: lang.getText("tr59"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr60"),
      answer: lang.getText("tr61"),
      useHTML: false,
      show: false,
    },
    {
      question: lang.getText("tr62"),
      answer: lang.getText("tr63"),
      useHTML: false,
      show: false,
    }
  ];
  
  // Filters questions list regardless search tag.
  const filtered = React.useMemo(() => (
    tag.length <= 0 ? [...faqsList] : faqsList.filter(
      ({question, answer}) => (
        question.toLowerCase().includes(tag.toLowerCase()) ||
        answer.toLowerCase().includes(tag.toLowerCase())
      )
    )
  // Dependencies.
  ), [faqsList, tag]);

  // Clears search input content.
  const clearInput = React.useCallback(() => {
    // Whether input exists.
    if (input != null) {
      // Clears input text.
      input.current.value = '';
      // Hides clear button.
      clear?.current?.classList?.add("turn-off");
      // Sets search tag.
      setTag('');
    }
  // Dependencies.
  }, [setTag, input, clear]);

  // Toggles visibiity of faqs full questions popup.
  const toggleFaqsPopup = React.useCallback(() => {
    // Whether popup is already displayed.
    if (popup?.current?.classList?.contains("faqs-popup-displayed")) {
      // Hides it.
      popup?.current?.classList?.remove("faqs-popup-displayed");
      // Shows body scrollbar. 
      document.body.style.overflowY = '';
    // Otherwise.
    } else {
      // Shows it.
      popup?.current?.classList?.add("faqs-popup-displayed");
      // Hides body scrollbar.
      document.body.style.overflowY = "hidden";
    }
  // Dependencies.
  }, [popup]);

  // Called when input text value changed.
  const onInputValueChanged = React.useCallback(() => {
    // The current input value.
    const value = input?.current?.value?.trim();
    // Whether value exists.
    if (value != null && value.length > 0) {
      // Shows clear button.
      clear?.current?.classList?.remove("turn-off");
      // Sets search tag.
      setTag(value);
    // Otherwise.
    } else {
      // Hides clear button.
      clear?.current?.classList?.add("turn-off");
    }
  // Dependencies.
  }, [setTag, input, clear]);

  // Called when component get mounted.
  React.useEffect(() => {
    // The contact us link.
    const contactUsLink = document.querySelector ("span.faqs-contact-us");
    // Removes old `click` listener.
    contactUsLink.removeEventListener ("click", onContactUsClicked);
    // Listens `click` event on contact us link.
    contactUsLink.addEventListener ("click", onContactUsClicked);
    // Focus on the current section for scrolling.
    new ScrollManager({
      root: document.querySelector("div#root"),
      target: faqs.current,
      onEnter: onEnter,
      offsetTop: 240,
      scope: window
    });
  });

  // Builds jsx elements.
  return <section className = "faqs" ref = {faqs}>
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
      <Question data = {faqsList[6]}/><br/>
      {/** Learn more */}
      <button
        onClick = {() => toggleFaqsPopup()}
        title = {lang.getText("tr75")}
      >
        {/** Text content */}
        <span>{lang.getText("tr76")}</span>
      </button>
    </div>
    {/** Popup */}
    <aside className = "faqs-popup" ref = {popup}>
      {/** Back icon */}
      <img
        onClick = {() => toggleFaqsPopup()}
        height = {32} width = {32}
        alt = "Back icon."
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
            alt = "Search icon."
            src = {searchIcon}
          />
        </div>
        {/** Input */}
        <input
          onChange = {() => onInputValueChanged()}
          placeholder = {lang.getText("tr74")}
          type = "text" ref = {input}
          name = "searcher"
        />
        {/** Clear container */}
        <div className = "clear turn-off" ref = {clear}>
          {/** Clear icon */}
          <img
            onClick = {() => clearInput()}
            height = {24} width = {24}
            alt = "Clear icon."
            src = {clearIcon}
          />
        </div>
      </div>
      {/** Full questions */}
      <div className = "faqs-full-qst">
        {filtered.map((faq, index) => (
          <Question data = {faq} key = {index}/>
        ))}
      </div>
    </aside>
  </section>;
}
