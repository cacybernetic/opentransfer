/**
* @project Open Transfer - https://cacybernetic.github.io/opentransfer
* @author Obrymec - obrymecsprinces@gmail.com
* @fileoverview The terms view section.
* @supported DESKTOP & MOBILE
*	@created 2024-03-11
*	@updated 2024-03-23
*	@file terms.jsx
*	@version 0.0.3
*/

// React dependencies.
import React from "react";

// Custom dependencies.
import lang from "../../../common/utils/language/language.js";
import downloadIcon from "/assets/icons/download.svg";
import closeIcon from "/assets/icons/close.svg";

// License view section.
export default React.forwardRef(({}, ref) => {
  // Attributes.
  const [isPolicyOk, setPolicyState] = React.useState(false);
  const [isTermsOk, setTermsState] = React.useState(false);
  const [value, setValue] = React.useState('1');
  const terms = React.useRef(null);
  const popup = React.useRef(null);

  // Calculates popup size. 
  const computePopupSizes = React.useCallback(() => {
		// Adjusts popup height.
		popup.current.style.height = `${(window.innerHeight - 96)}px`;
		// Adjusts popup width.
		popup.current.style.width = `${(window.innerWidth - 32)}px`;
  // Dependencies.
  }, [popup]);

  // Toggles visibility of license popup.
  const togglePopup = React.useCallback(() => {
    // Whether popup is already displayed.
    if (terms.current?.classList?.contains("license-displayed")) {
      // Hides it.
      terms.current?.classList?.remove("license-displayed");
      // Shows body scrollbar. 
      document.body.style.overflowY = '';
    // Otherwise.
    } else {
      // Shows it.
      terms.current?.classList?.add("license-displayed");
      // Hides body scrollbar.
      document.body.style.overflowY = "hidden";
      // Resets privacy policy state.
      setPolicyState(false);
      // Resets terms and conditions state.
      setTermsState(false);
    }
  // Dependencies.
  }, [terms]);

  // Called when component get mounted.
  React.useEffect(() => {
    // Listens `resize` event.
    window.addEventListener("resize", computePopupSizes);
    // Exports public methods.
    ref.current = {togglePopup};
    // Computes popup sizes.
    computePopupSizes();
  });

  // Builds jsx elements.
  return <aside
    className = "license" ref = {terms} onClick = {togglePopup}
  >
    {/** Popup */}
    <div
      className = "popup" onClick = {e => e.stopPropagation()}
      ref = {popup}
    >
      {/** Header */}
      <div className = "license-header">
        {/** Dropdown */}
        <select
          onChange = {e => setValue(e.target.value)}
          name = "law" value = {value}
        >
          {/** Terms & conditions */}
          <option value = '1'>Terms and Conditions</option>
          {/** Privacy policy */}
          <option value = '2'>Privacy Policy</option>
        </select>
        {/** Close */}
        <img
          height = {32} width = {32} alt = "Close icon."
          src = {closeIcon} onClick = {togglePopup}
        />
      </div>
      {/** Middle content */}
      <div className = "middle-content">
        {/** Terms and conditions */}
        <div className = {`terms-and-conditions reset-style${
          (value !== '1' ? " turn-off" : '')
        }`}>
          <p>Last updated: March 11, 2024</p>
          <p>Please read these terms and conditions
          carefully before using Our Service.</p>
          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>The words of which the initial letter is
          capitalized have meanings defined under the
          following conditions. The following definitions
          shall have the same meaning regardless of
          whether they appear in singular or in plural.</p>
          <h3>Definitions</h3>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li>
              <p><strong>Application</strong> means the
              software program provided by the Company
              downloaded by You on any electronic device,
              named Open Transfer</p>
            </li>
            <li>
              <p><strong>Application Store</strong> means
              the digital distribution service operated
              and developed by Apple Inc. (Apple App Store)
              or Google Inc. (Google Play Store) in which
              the Application has been downloaded.</p>
            </li>
            <li>
              <p><strong>Affiliate</strong> means an entity
              that controls, is controlled by or is under
              common control with a party, where &quot;control&quot;
              means ownership of 50% or more of the shares,
              equity interest or other securities entitled
              to vote for election of directors or other
              managing authority.</p>
            </li>
            <li>
              <p><strong>Country</strong> refers to: New
              York, United States</p>
            </li>
            <li>
              <p><strong>Company</strong> (referred to as
              either &quot;the Company&quot;, &quot;We&quot;,
              &quot;Us&quot; or &quot;Our&quot; in this
              Agreement) refers to Console Art Cybernetic,
              1 Cupertino, CA 95014.</p>
            </li>
            <li>
              <p><strong>Device</strong> means any device
              that can access the Service such as a
              computer, a cellphone or a digital tablet.</p>
            </li>
            <li>
              <p><strong>Service</strong> refers to the
              Application.</p>
            </li>
            <li>
              <p><strong>Terms and Conditions</strong>
              (also referred as &quot;Terms&quot;) mean
              these Terms and Conditions that form the
              entire agreement between You and the
              Company regarding the use of the Service.</p>
            </li>
            <li>
              <p><strong>Third-party Social Media Service</strong>
              means any services or content (including data,
              information, products or services) provided
              by a third-party that may be displayed,
              included or made available by the Service.</p>
            </li>
            <li>
              <p><strong>You</strong> means the individual
              accessing or using the Service, or the company,
              or other legal entity on behalf of which such
              individual is accessing or using the Service,
              as applicable.</p>
            </li>
          </ul>
          <h2>Acknowledgment</h2>
          <p>These are the Terms and Conditions governing
          the use of this Service and the agreement that
          operates between You and the Company. These Terms
          and Conditions set out the rights and obligations
          of all users regarding the use of the Service.</p>
          <p>Your access to and use of the Service is
          conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and
          Conditions apply to all visitors, users and
          others who access or use the Service.</p>
          <p>By accessing or using the Service You agree to
          be bound by these Terms and Conditions. If You
          disagree with any part of these Terms and Conditions
          then You may not access the Service.</p>
          <p>You represent that you are over the age of 18.
          The Company does not permit those under 18 to use
          the Service.</p>
          <p>Your access to and use of the Service is also
          conditioned on Your acceptance of and compliance
          with the Privacy Policy of the Company. Our Privacy
          Policy describes Our policies and procedures on
          the collection, use and disclosure of Your personal
          information when You use the Application or the
          Website and tells You about Your privacy rights
          and how the law protects You. Please read Our
          Privacy Policy carefully before using Our Service.</p>
          <h2>Links to Other Websites</h2>
          <p>Our Service may contain links to third-party
          web sites or services that are not owned or
          controlled by the Company.</p>
          <p>The Company has no control over, and assumes
          no responsibility for, the content, privacy
          policies, or practices of any third party web
          sites or services. You further acknowledge and
          agree that the Company shall not be responsible
          or liable, directly or indirectly, for any damage
          or loss caused or alleged to be caused by or in
          connection with the use of or reliance on any
          such content, goods or services available on or
          through any such web sites or services.</p>
          <p>We strongly advise You to read the terms and
          conditions and privacy policies of any third-party
          web sites or services that You visit.</p>
          <h2>Termination</h2>
          <p>We may terminate or suspend Your access immediately,
          without prior notice or liability, for any reason
          whatsoever, including without limitation if You
          breach these Terms and Conditions.</p>
          <p>Upon termination, Your right to use the Service
          will cease immediately.</p>
          <h2>Limitation of Liability</h2>
          <p>Notwithstanding any damages that You might incur,
          the entire liability of the Company and any of its
          suppliers under any provision of this Terms and
          Your exclusive remedy for all of the foregoing
          shall be limited to the amount actually paid by
          You through the Service or 100 USD if You haven't
          purchased anything through the Service.</p>
          <p>To the maximum extent permitted by applicable
          law, in no event shall the Company or its suppliers
          be liable for any special, incidental, indirect, or
          consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of
          data or other information, for business interruption,
          for personal injury, loss of privacy arising out of
          or in any way related to the use of or inability to
          use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in
          connection with any provision of this Terms), even
          if the Company or any supplier has been advised of
          the possibility of such damages and even if the
          remedy fails of its essential purpose.</p>
          <p>Some states do not allow the exclusion of implied
          warranties or limitation of liability for incidental
          or consequential damages, which means that some of
          the above limitations may not apply. In these states,
          each party's liability will be limited to the greatest
          extent permitted by law.</p>
          <h2>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
          Disclaimer</h2>
          <p>The Service is provided to You &quot;AS IS&quot;
          and &quot;AS AVAILABLE&quot; and with all faults and
          defects without warranty of any kind. To the maximum
          extent permitted under applicable law, the Company,
          on its own behalf and on behalf of its Affiliates
          and its and their respective licensors and service
          providers, expressly disclaims all warranties,
          whether express, implied, statutory or otherwise,
          with respect to the Service, including all implied
          warranties of merchantability, fitness for a
          particular purpose, title and non-infringement,
          and warranties that may arise out of course of
          dealing, course of performance, usage or trade
          practice. Without limitation to the foregoing,
          the Company provides no warranty or undertaking,
          and makes no representation of any kind that the
          Service will meet Your requirements, achieve any
          intended results, be compatible or work with any
          other software, applications, systems or services,
          operate without interruption, meet any performance
          or reliability standards or be error free or that
          any errors or defects can or will be corrected.</p>
          <p>Without limiting the foregoing, neither the
          Company nor any of the company's provider makes
          any representation or warranty of any kind,
          express or implied: (i) as to the operation
          or availability of the Service, or the information,
          content, and materials or products included thereon;
          (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability,
          or currency of any information or content provided
          through the Service; or (iv) that the Service, its
          servers, the content, or e-mails sent from or on
          behalf of the Company are free of viruses, scripts,
          trojan horses, worms, malware, timebombs or other
          harmful components.</p>
          <p>Some jurisdictions do not allow the exclusion
          of certain types of warranties or limitations
          on applicable statutory rights of a consumer,
          so some or all of the above exclusions and
          limitations may not apply to You. But in such
          a case the exclusions and limitations set
          forth in this section shall be applied to
          the greatest extent enforceable under
          applicable law.</p>
          <h2>Governing Law</h2>
          <p>The laws of the Country, excluding its conflicts
          of law rules, shall govern this Terms and Your use
          of the Service. Your use of the Application may
          also be subject to other local, state, national,
          or international laws.</p>
          <h2>Disputes Resolution</h2>
          <p>If You have any concern or dispute about the
          Service, You agree to first try to resolve the
          dispute informally by contacting the Company.</p>
          <h2>For European Union (EU) Users</h2>
          <p>If You are a European Union consumer, you will
          benefit from any mandatory provisions of the law
          of the country in which You are resident.</p>
          <h2>United States Legal Compliance</h2>
          <p>You represent and warrant that (i) You are not
          located in a country that is subject to the United
          States government embargo, or that has been
          designated by the United States government as
          a &quot;terrorist supporting&quot; country,
          and (ii) You are not listed on any United States
          government list of prohibited or restricted
          parties.</p>
          <h2>Severability and Waiver</h2>
          <h3>Severability</h3>
          <p>If any provision of these Terms is held to be
          unenforceable or invalid, such provision will be
          changed and interpreted to accomplish the objectives
          of such provision to the greatest extent possible
          under applicable law and the remaining provisions
          will continue in full force and effect.</p>
          <h3>Waiver</h3>
          <p>Except as provided herein, the failure to exercise
          a right or to require performance of an obligation
          under these Terms shall not affect a party's ability
          to exercise such right or require such performance
          at any time thereafter nor shall the waiver of a
          breach constitute a waiver of any subsequent breach.</p>
          <h2>Translation Interpretation</h2>
          <p>These Terms and Conditions may have been translated
          if We have made them available to You on our Service.
          You agree that the original English text shall prevail
          in the case of a dispute.</p>
          <h2>Changes to These Terms and Conditions</h2>
          <p>We reserve the right, at Our sole discretion,
          to modify or replace these Terms at any time. If
          a revision is material We will make reasonable
          efforts to provide at least 30 days' notice prior
          to any new terms taking effect. What constitutes
          a material change will be determined at Our sole
          discretion.</p>
          <p>By continuing to access or use Our Service after
          those revisions become effective, You agree to be
          bound by the revised terms. If You do not agree
          to the new terms, in whole or in part, please
          stop using the website and the Service.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms
          and Conditions, You can contact us:</p>
          <ul>
            <li><p>By email: ca.cybernetic@gmail.com</p></li>
            <li>
              <p>By phone number:
              https://chat.whatsapp.com/InLJpXa5Z4IBwFoVpM1e78</p>
            </li>
          </ul>
        </div>
        {/** Privacy policy */}
        <div className = {`privacy-policy reset-style${
          (value !== '2' ? " turn-off" : '')
        }`}>
          <p>Last updated: March 11, 2024</p>
          <p>This Privacy Policy describes Our policies
          and procedures on the collection, use and
          disclosure of Your information when You use
          the Service and tells You about Your privacy
          rights and how the law protects You.</p>
          <p>We use Your Personal data to provide and
          improve the Service. By using the Service,
          You agree to the collection and use of
          information in accordance with this Privacy
          Policy.</p>
          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>The words of which the initial letter is
          capitalized have meanings defined under the
          following conditions. The following definitions
          shall have the same meaning regardless of whether
          they appear in singular or in plural.</p>
          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li><p><strong>Account</strong> means a unique
            account created for You to access our Service
            or parts of our Service.</p></li>
            <li><p><strong>Affiliate</strong> means an
            entity that controls, is controlled by or is
            under common control with a party, where
            &quot;control&quot; means ownership of 50%
            or more of the shares, equity interest or
            other securities entitled to vote for election
            of directors or other managing authority.</p></li>
            <li><p><strong>Application</strong> refers to
            Open Transfer, the software program provided
            by the Company.</p></li>
            <li><p><strong>Company</strong> (referred to
            as either &quot;the Company&quot;, &quot;We&quot;,
            &quot;Us&quot; or &quot;Our&quot; in this Agreement)
            refers to Console Art Cybernetic, 1 Cupertino,
            CA 95014.</p></li>
            <li><p><strong>Country</strong> refers to:
            New York,  United States</p></li>
            <li><p><strong>Device</strong> means any device
            that can access the Service such as a computer,
            a cellphone or a digital tablet.</p></li>
            <li><p><strong>Personal Data</strong> is any
            informationthat relates to an identified or
            identifiable individual.</p></li>
            <li><p><strong>Service</strong> refers to
            the Application.</p></li>
            <li><p><strong>Service Provider</strong> means
            any natural or legal person who processes the
            data on behalf of the Company. It refers to
            third-party companies or individuals employed
            by the Company to facilitate the Service, to
            provide the Service on behalf of the Company,
            to perform services related to the Service or
            to assist the Company in analyzing how the
            Service is used.</p></li>
            <li><p><strong>Usage Data</strong> refers to
            data collected automatically, either generated
            by the use of the Service or from the Service
            infrastructure itself (for example, the
            duration of a page visit).</p></li>
            <li><p><strong>You</strong> means the individual
            accessing or using the Service, or the company,
            or other legal entity on behalf of which such
            individual is accessing or using the Service,
            as applicable.</p></li>
          </ul>
          <h2>Collecting and Using Your Personal Data</h2>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>While using Our Service, We may ask You to
          provide Us with certain personally identifiable
          information that can be used to contact or
          identify You. Personally identifiable information
          may include, but is not limited to:</p>
          <ul><li>Usage Data</li></ul>
          <h4>Usage Data</h4>
          <p>Usage Data is collected automatically when
          using the Service.</p>
          <p>Usage Data may include information such as
          Your Device's Internet Protocol address
          (e.g. IP address), browser type, browser
          version, the pages of our Service that You visit,
          the time and date of Your visit, the time spent
          on those pages, unique device identifiers and
          other diagnostic data.</p>
          <p>When You access the Service by or through a
          mobile device, We may collect certain information
          automatically, including, but not limited to, the
          type of mobile device You use, Your mobile device
          unique ID, the IP address of Your mobile device,
          Your mobile operating system, the type of mobile
          Internet browser You use, unique device
          identifiers and other diagnostic data.</p>
          <p>We may also collect information that Your browser
          sends whenever You visit our Service or when You
          access the Service by or through a mobile device.</p>
          <h4>Information Collected while Using the Application</h4>
          <p>While using Our Application, in order to provide
          features of Our Application, We may collect,
          with Your prior permission:</p>
          <ul>
            <li>Information from your Device's
            phone book (contacts list)</li>
            <li>Pictures and other information
            from your Device's camera and photo
            library</li>
          </ul>
          <p>We use this information to provide features
          of Our Service, to improve and customize Our
          Service. The information may be uploaded to
          the Company's servers and/or a Service
          Provider's server or it may be simply stored
          on Your device.</p>
          <p>You can enable or disable access to this
          information at any time, through Your
          Device settings.</p>
          <h3>Use of Your Personal Data</h3>
          <p>The Company may use Personal Data for the
          following purposes:</p>
          <ul>
            <li><p><strong>To provide and maintain our
            Service</strong>, including to monitor the
            usage of our Service.</p></li>
            <li><p><strong>To manage Your Account:</strong>
            to manage Your registration as a user of the
            Service. The Personal Data You provide can
            give You access to different functionalities
            of the Service that are available to You as
            a registered user.</p></li>
            <li><p><strong>For the performance of a
            contract:</strong> the development,
            compliance and undertaking of the purchase
            contract for the products, items or services
            You have purchased or of any other contract
            with Us through the Service.</p></li>
            <li><p><strong>To contact You:</strong> To
            contact You by email, telephone calls, SMS,
            or other equivalent forms of electronic
            communication, such as a mobile application's
            push notifications regarding updates or
            informative communications related to the
            functionalities, products or contracted
            services, including the security updates,
            when necessary or reasonable for their
            implementation.</p></li>
            <li><p><strong>To provide You</strong> with
            news, special offers and general information
            about other goods, services and events which
            we offer that are similar to those that you
            have already purchased or enquired about
            unless You have opted not to receive such
            information.</p></li>
            <li><p><strong>To manage Your requests:</strong>
            To attend and manage Your requests to Us.</p></li>
            <li><p><strong>For business transfers:</strong>
            We may use Your information to evaluate or conduct
            a merger, divestiture, restructuring,
            reorganization, dissolution, or other sale or
            transfer of some or all of Our assets, whether
            as a going concern or as part of bankruptcy,
            liquidation, or similar proceeding, in which
            Personal Data held by Us about our Service
            users is among the assets transferred.</p></li>
            <li><p><strong>For other purposes</strong>: We may
            use Your information for other purposes, such as
            data analysis, identifying usage trends,
            determining the effectiveness of our promotional
            campaigns and to evaluate and improve our Service,
            products, services, marketing and your
            experience.</p></li>
          </ul>
          <p>We may share Your personal information
          in the following situations:</p>
          <ul>
            <li><strong>With Service Providers:</strong> We
            may share Your personal information with Service
            Providers to monitor and analyze the use of our
            Service,  to contact You.</li>
            <li><strong>For business transfers:</strong> We
            may share or transfer Your personal information
            in connection with, or during negotiations of,
            any merger, sale of Company assets, financing,
            or acquisition of all or a portion of Our
            business to another company.</li>
            <li><strong>With Affiliates:</strong> We may
            share Your information with Our affiliates,
            in which case we will require those affiliates
            to honor this Privacy Policy. Affiliates include
            Our parent company and any other subsidiaries,
            joint venture partners or other companies that
            We control or that are under common control
            with Us.</li>
            <li><strong>With business partners:</strong> We
            may share Your information with Our business
            partners to offer You certain products,
            services or promotions.</li>
            <li><strong>With other users:</strong> when You
            share personal information or otherwise interact
            in the public areas with other users, such
            information may be viewed by all users and may
            be publicly distributed outside.</li>
            <li><strong>With Your consent</strong>: We may
            disclose Your personal information for any other
            purpose with Your consent.</li>
          </ul>
          <h3>Retention of Your Personal Data</h3>
          <p>The Company will retain Your Personal Data
          only for as long as is necessary for the
          purposes set out in this Privacy Policy. We
          will retain and use Your Personal Data to the
          extent necessary to comply with our legal
          obligations (for example, if we are required
          to retain your data to comply with applicable
          laws), resolve disputes, and enforce our legal
          agreements and policies.</p>
          <p>The Company will also retain Usage Data for
          internal analysis purposes. Usage Data is
          generally retained for a shorter period of time,
          except when this data is used to strengthen the
          security or to improve the functionality of Our
          Service, or We are legally obligated to retain
          this data for longer time periods.</p>
          <h3>Transfer of Your Personal Data</h3>
          <p>Your information, including Personal Data,
          is processed at the Company's operating offices
          and in any other places where the parties
          involved in the processing are located. It
          means that this information may be transferred
          to — and maintained on — computers located
          outside of Your state, province, country or
          other governmental jurisdiction where the data
          protection laws may differ than those from Your
          jurisdiction.</p>
          <p>Your consent to this Privacy Policy followed
          by Your submission of such information represents
          Your agreement to that transfer.</p>
          <p>The Company will take all steps reasonably
          necessary to ensure that Your data is treated
          securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data
          will take place to an organization or a country
          unless there are adequate controls in place
          including the security of Your data and other
          personal information.</p>
          <h3>Delete Your Personal Data</h3>
          <p>You have the right to delete or request that
          We assist in deleting the Personal Data that We
          have collected about You.</p>
          <p>Our Service may give You the ability to
          delete certain information about You from
          within the Service.</p>
          <p>You may update, amend, or delete Your
          information at any time by signing in to
          Your Account, if you have one, and visiting
          the account settings section that allows you
          to manage Your personal information. You may
          also contact Us to request access to, correct,
          or delete any personal information that You
          have provided to Us.</p>
          <p>Please note, however, that We may need to
          retain certain information when we have a
          legal obligation or lawful basis to do so.</p>
          <h3>Disclosure of Your Personal Data</h3>
          <h4>Business Transactions</h4>
          <p>If the Company is involved in a merger,
          acquisition or asset sale, Your Personal
          Data may be transferred. We will provide
          notice before Your Personal Data is transferred
          and becomes subject to a different Privacy
          Policy.</p>
          <h4>Law enforcement</h4>
          <p>Under certain circumstances, the Company
          may be required to disclose Your Personal
          Data if required to do so by law or in
          response to valid requests by public
          authorities (e.g. a court or a government
          agency).</p>
          <h4>Other legal requirements</h4>
          <p>The Company may disclose Your Personal
          Data in the good faith belief that such
          action is necessary to:</p>
          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or
            property of the Company</li>
            <li>Prevent or investigate possible
            wrongdoing in connection with the
            Service</li>
            <li>Protect the personal safety of Users
            of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
          <h3>Security of Your Personal Data</h3>
          <p>The security of Your Personal Data is
          important to Us, but remember that no
          method of transmission over the Internet,
          or method of electronic storage is 100%
          secure. While We strive to use commercially
          acceptable means to protect Your Personal
          Data, We cannot guarantee its absolute
          security.</p>
          <h2>Children's Privacy</h2>
          <p>Our Service does not address anyone
          under the age of 13. We do not knowingly
          collect personally identifiable information
          from anyone under the age of 13. If You are
          a parent or guardian and You are aware that
          Your child has provided Us with Personal
          Data, please contact Us. If We become aware
          that We have collected Personal Data from
          anyone under the age of 13 without verification
          of parental consent, We take steps to remove
          that information from Our servers.</p>
          <p>If We need to rely on consent as a legal
          basis for processing Your information and
          Your country requires consent from a parent,
          We may require Your parent's consent before
          We collect and use that information.</p>
          <h2>Links to Other Websites</h2>
          <p>Our Service may contain links to other
          websites that are not operated by Us. If You
          click on a third party link, You will be
          directed to that third party's site. We
          strongly advise You to review the Privacy
          Policy of every site You visit.</p>
          <p>We have no control over and assume no
          responsibility for the content, privacy
          policies or practices of any third party
          sites or services.</p>
          <h2>Changes to this Privacy Policy</h2>
          <p>We may update Our Privacy Policy from
          time to time. We will notify You of any
          changes by posting the new Privacy Policy
          on this page.</p>
          <p>We will let You know via email and/or a
          prominent notice on Our Service, prior to
          the change becoming effective and update
          the &quot;Last updated&quot; date at the
          top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy
          Policy periodically for any changes.
          Changes to this Privacy Policy are
          effective when they are posted on this
          page.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about this
          Privacy Policy, You can contact us:</p>
          <ul>
            <li><p>By email: ca.cybernetic@gmail.com</p></li>
            <li><p>By phone number:
            https://chat.whatsapp.com/InLJpXa5Z4IBwFoVpM1e78
            </p></li>
          </ul>
        </div>
      </div>
      {/** Footer */}
      <div className = "license-footer">
        {/** Terms checkbox */}
        <div className = "terms-checkbox">
          {/** Checkbox */}
          <input
            type = "checkbox" id = "conditions" name = "conditions"
            onChange = {e => setTermsState(e.target.checked)}
            checked = {isTermsOk}
          />
          {/** Label */}
          <label htmlFor = "conditions" dangerouslySetInnerHTML = {{
            __html: lang.getText("tr89")
          }}></label>
        </div><br/>
        {/** Policy checkbox */}
        <div className = "policy-checkbox">
          {/** Checkbox */}
          <input
            onChange = {e => setPolicyState(e.target.checked)}
            type = "checkbox" id = "privacy" name = "privacy"
            checked = {isPolicyOk}
          />
          {/** Label */}
          <label htmlFor = "privacy" dangerouslySetInnerHTML = {{
            __html: lang.getText("tr90")
          }}></label>
        </div>
        {/** Bottom options */}
        <div className = "bottom-buttons">
          {/** Decline button */}
          <button
            className = "license-decline" onClick = {togglePopup}
          >{lang.getText("tr87")}</button>
          {/** Download button */}
          <a
            className = {`license-download${
              ((!isPolicyOk || !isTermsOk) ? " license-disabled" : '')}
            `}
            href = {(
              (!isPolicyOk || !isTermsOk) ? '#' : "open_transfer.apk"
            )}
          >
            {/** Download icon */}
            <img
              height = {24} width = {24}
              alt = "Download icon."
              src = {downloadIcon}
            />
            {/** Label */}
            <span>{lang.getText("tr88")}</span>
          </a>
        </div>
      </div>
    </div>
  </aside>;
});
