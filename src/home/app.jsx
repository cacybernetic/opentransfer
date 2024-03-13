/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The main application entry.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-13
*	@version 0.0.4
*	@file app.jsx
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import language from "../common/utils/language/language.js";
import Features from "./components/features/features.jsx";
import Contacts from "./components/contacts/contacts.jsx";
import {scrollTo} from "../common/utils/scroll/scroll.js";
import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner.jsx";
import Footer from "./components/footer/footer.jsx";
import Arrows from "./components/arrows/arrows.jsx";
import Terms from "./components/terms/terms.jsx";
import FAQs from "./components/faqs/faqs.jsx";

// Open Transfer mobile app landing page.
export default function OpenTransfer() {
  // Attributes.
  const contacts = React.useRef(null);
  const license = React.useRef(null);
  const header = React.useRef(null);

  // Overrides active header menu option to another.
  const overrideOption = React.useCallback(position => {
    // Whether features is selected.
    if (position === 0) scrollTo ("section.features");
    // Whether faqs is selected.
    else if (position === 1) scrollTo ("section.faqs");
    // Whether contacts is selected.
    else contacts?.current?.togglePopup ();
  // Dependencies.
  }, [contacts])

  // Checks whether browser is offline or not.
  const checkNetworkState = React.useCallback(state => {
    // Whether navigator is offline.
    if (!state) {
      // Network error message.
      Swal.fire({
        title: language.getText("tr32"),
        html: language.getText("tr33"),
        confirmButtonText: "OK",
        focusConfirm: false,
        icon: "error"
      });
    // Otherwise.
    } else {
      // Closes the current active sweet modal.
      Swal.close ();
      // The network is now establish.
      vercelToast.createToast(
        language.getText("tr34"), {timeout: 5000}
      );
    }
  // Dependencies.
  }, [language]);

  // Called when component is mounted.
  React.useEffect(() => {
    // Whether browser is offline.
    if (!window.navigator.onLine) checkNetworkState(false);
    // Listens `offline` event.
    window.addEventListener("offline", () => (
      checkNetworkState(window.navigator.onLine)
    ));
    // Listens `online` event.
    window.addEventListener("online", () => (
      checkNetworkState(window.navigator.onLine)
    ));
  });

  // Builds final landing page.
  return <React.Fragment>
    {/** Header */}
    <Header
      onOptionClicked = {id => overrideOption(id)} ref = {header}
      onDownload = {() => license?.current?.togglePopup()}
    />
    {/** Banner */}
    <Banner
      onDownload = {() => license?.current?.togglePopup()}
      onEnter = {() => header?.current?.setOption(-1)}
    />
    {/** Features */}
    <Features onEnter = {() => header?.current?.setOption(0)}/>
    {/** FAQs */}
    <FAQs
      onEnter = {() => header?.current?.setOption(1)}
      onContactUsClicked = {() => overrideOption(2)}
    />
    {/** Contacts */}
    <Contacts ref = {contacts}/>
    {/** Footer */}
    <Footer onOptionClicked = {id => overrideOption(id)}/>
    {/** Terms and conditions */}
    <Terms ref = {license}/>
    {/** Help arrows */}
    <Arrows/>
  </React.Fragment>;
}
