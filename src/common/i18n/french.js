/**
* @project Open Transfer - https://cacybernetic.github.io/open_transfer
* @fileoverview Defines french language textuals data.
* @author Obrymec - obrymecsprinces@gmail.com
* @supported DESKTOP & MOBILE
* @created 2024-03-04
* @updated 2024-03-05
* @file french.js
* @version 0.0.1
* @type {French}
*/

/**
 * @description The french language's data.
 * @constant {{
 *  data: Object<String, String>,
 *  keywords: Array<String>,
 *  name: String
 * }}
 * @public
 * @field
 */
const french = {
  name: "french",
  keywords: [
    "français",
    "france",
    "québec",
    "europe",
    "europa",
    "fr",
    "qc"
  ],
  data: {
    tr1: "Open Transfer",
    tr2: "Fonctionalités",
    tr3: "Support",
    tr4: "FAQs",
    tr5: "Contactez-nous",
    tr6: "Télécharger",
    tr7: "Télécharger la version APK.",
    tr8: "Ne saisissez plus manuellement les codes USSD",
    tr9: `
      Enfin une solution alternative aux pénibles codes 
      USSD grâce à un support digital moderne adapté aux 
      problèmes couramment relevés sur le terrain.
    `,
    tr10: "L’obtenir sur",
    tr11: "Google Play",
    tr12: "Android APK"
  }
}

/**
 * @description Exports this
 *  field by default.
 * @exports french
 */
export default french;
