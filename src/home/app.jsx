/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The main application entry.
* @supported DESKTOP & MOBILE
*	@created 2024-03-04
*	@updated 2024-03-08
*	@version 0.0.2
*	@file app.jsx
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import language from "../common/utils/language/language.js";
import Features from "./components/features/features.jsx";
import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner.jsx";
import FAQs from "./components/faqs/faqs.jsx";

// Open Transfer mobile app landing page.
export default function OpenTransfer() {
  // Attributes.
  const [option, setOption] = React.useState(0);

  // Checks whether browser is offline or not.
  const checkNetworkState = state => {
    // Whether navigator is offline.
    if (!state) {
      // Network error message.
      Swal.fire ({
        title: language.getText("tr32"),
        html: language.getText("tr33"),
        confirmButtonText: "OK",
        focusConfirm: false,
        icon: "error"
      });
    // Otherwise.
    } else {
      // Closes the current
      // active sweet modal.
      Swal.close ();
      // The network is now
      // establish.
      vercelToast.createToast (
        language.getText("tr34"),
        {timeout: 5000}
      );
    }
  };

  // Called when component is mounted.
  React.useEffect(() => {
    // Whether browser is offline.
    if (!window.navigator.onLine) checkNetworkState (false);
    // Listens `offline` event.
    window.addEventListener("offline", () => (
      checkNetworkState (window.navigator.onLine)
    ));
    // Listens `online` event.
    window.addEventListener("online", () => (
      checkNetworkState (window.navigator.onLine)
    ));
  });

  // Builds final landing page.
  return <React.Fragment>
    {/** Header */}
    <Header option = {option} onOptionClicked = {id => setOption(id)}/>
    {/** Banner */}
    <Banner/>
    {/** Features */}
    <Features/>
    {/** FAQs */}
    <FAQs/>
  </React.Fragment>;
}
