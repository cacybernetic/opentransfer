/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @fileoverview Defines english language textuals data.
* @author Obrymec - obrymecsprinces@gmail.com
* @supported DESKTOP & MOBILE
* @created 2024-03-04
* @updated 2024-03-05
* @file english.js
* @type {English}
* @version 0.0.1
*/

/**
 * @description The engish language's data.
 * @constant {{
 *  data: Object<String, String>,
 *  keywords: Array<String>,
 *  name: String
 * }}
 * @public
 * @field
 */
const english = {
  name: "english",
  keywords: [
    "united kingdom",
    "united states",
    "anglais",
    "en_us",
    "us",
    "uk",
    "en"
  ],
  data: {
    tr1: "Open Transfer",
    tr2: "Features",
    tr3: "Support",
    tr4: "FAQs",
    tr5: "Contact us",
    tr6: "Download",
    tr7: "Download APK version.",
    tr8: "No longer manually enter USSD codes",
    tr9: `
      Finally, an alternative solution to painful USSD 
      codes thanks to modern digital support adapted 
      to the problems commonly encountered in the field.
    `,
    tr10: "Get it on",
    tr11: "Google Play",
    tr12: "Android APK"
  }
};

/**
 * @description Exports this
 *  field by default.
 * @exports english
 */
export default english;
