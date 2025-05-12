"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail, FiUser, FiGlobe, FiShield, FiShare2, FiLock, FiUserCheck,
  FiUsers, FiSettings, FiClock, FiInfo, FiChevronDown, FiArrowUp, FiArrowLeft, FiCheck,
} from "react-icons/fi";

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Toggle accordion section
  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  // Handle scroll to show/hide back-to-top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      title: "1. Introduction",
      icon: <FiInfo className="text-red-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">1.1</p>
              <p>
                We are committed to safeguarding the privacy of Limpiar Online users along with these policies:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "App Permissions",
                  "Cookies Policy",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">1.2</p>
              <p>
                This policy applies where we are acting as a data controller with respect to the personal data of our website visitors and service users; in other words, where we determine the purposes and means of the processing of that personal data.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">1.3</p>
              <p>
                We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of our website and services, we will ask you to consent to our use of cookies when you first visit our website.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">1.4</p>
              <p>
                Our website incorporates privacy controls which affect how we will process your personal data. By using the privacy controls, you can specify whether you would like to receive direct marketing communications and limit the publication of your information.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">1.5</p>
              <p>
                In this policy, “we”, “us”, and “our” refer to Limpiar.online.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "2. How We Use Your Personal Data",
      icon: <FiUser className="text-green-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">2.1</p>
              <p>
                In this Section 2a to 2d we have set out:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "(a) the general categories of personal data that we may process;",
                  "(b) in the case of personal data that we did not obtain directly from you, the source and specific categories of that data;",
                  "(c) the purposes for which we may process personal data; and",
                  "(d) the legal bases of the processing.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">2.2</p>
              <p>
                We may process data about your use of our website and services (“usage data”). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the usage data is our analytics tracking system. This usage data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is your consent.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.3</p>
              <p>
                We may process your account data (“account and profile data”). The account and profile data may include your name, address, telephone number, email address, profile pictures, gender, date of birth, relationship status, interests and hobbies, educational details and employment details. The account data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is your consent.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.4</p>
              <p>
                We may process information that you post for publication on our website or through our services (“publication data”). The publication data may be processed for the purposes of enabling such publication and administering our website and services. The legal basis for this processing is your consent.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.5</p>
              <p>
                We may process information contained in any enquiry you submit to us regarding goods and/or services (“enquiry data”). The enquiry data may be processed for the purposes of offering, marketing, and selling relevant goods and/or services to you.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.6</p>
              <p>
                We may process information that you provide to us for the purpose of subscribing to our email notifications and/or newsletters (“notification data”). The notification data may be processed for the purposes of sending you relevant notifications and/or newsletters. The legal basis for this processing is your consent.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.7</p>
              <p>
                We may process information contained in or relating to any communication that you send to us (“correspondence data”). The correspondence data may include the communication content and metadata associated with the communication. Our website will generate the metadata associated with communications made using the website contact forms. The correspondence data may be processed for the purposes of communicating with you and record-keeping. The legal basis for this processing is our legitimate interests, namely the proper administration of our website and business and communications with users.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.8</p>
              <p>
                We may process any of your personal data identified in this policy where necessary for the establishment, exercise, or defense of legal claims, whether in court proceedings or in an administrative or out-of-court procedure. The legal basis for this processing is our legitimate interests, namely the protection and assertion of our legal rights, your legal rights, and the legal rights of others.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.9</p>
              <p>
                We may process any of your personal data identified in this policy where necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, or obtaining professional advice. The legal basis for this processing is our legitimate interests, namely the proper protection of our business against risks.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.10</p>
              <p>
                In addition to the specific purposes for which we may process your personal data set out in this Section 2, we may also process any of your personal data where such processing is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.11</p>
              <p>
                Please do not supply any other person’s personal data to us, unless we prompt you to do so.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.a.i Information Collection And Use</p>
              <p>
                For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email address, First name and last name, Phone number, Device ID, Address, State, Province, ZIP/Postal code, City, Photos. The information that we request will be retained by us and used as described in this privacy policy.
              </p>
              <p className="mt-2">
                The app does use third-party services that may collect information used to identify you. Link to the privacy policy of third-party service providers used by the app:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "<a href=\"https://policies.google.com/privacy\" class=\"text-blue-500\">Google Play Services</a>",
                  "<a href=\"https://firebase.google.com/terms\" class=\"text-blue-500\">Google Analytics for Firebase</a>",
                  "<a href=\"https://firebase.google.com/terms/crashlytics\" class=\"text-blue-500\">Firebase Crashlytics</a>",
                  "<a href=\"https://www.facebook.com/privacy/explanation\" class=\"text-blue-500\">Facebook</a>",
                  "<a href=\"https://mixpanel.com/legal/privacy-policy\" class=\"text-blue-500\">Mixpanel</a>",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <p className="mt-2">
                – Payment and Payout method (Apple Pay, Google Pay, Credit card, Debit Card, and Bank Account)<br />
                – We may use your Personal Data to contact you with newsletters, marketing or promotional materials, and other information that may interest you. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.a.ii Usage Data</p>
              <p>
                We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.a.iii Location Data</p>
              <p>
                We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, and to improve and customize our Service. See section 12.1 Location Services. You can enable or disable location services when you use our Service at any time through your device settings.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.a.iv Tracking & Cookies Data</p>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include a unique anonymous identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Examples of Cookies we use:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "Session Cookies. We use Session Cookies to operate our Service.",
                  "Preference Cookies. We use Preference Cookies to remember your preferences and various settings.",
                  "Security Cookies. We use Security Cookies for security purposes.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">2.a.vi Use of Data</p>
              <p>
                Tidy Technologies, Inc. uses the collected data for various purposes:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "To provide and maintain our Service",
                  "To notify you about changes to our Service",
                  "To allow you to participate in interactive features of our Service when you choose to do so",
                  "To provide customer support",
                  "To gather analysis or valuable information so that we can improve our Service",
                  "To monitor the usage of our Service",
                  "To detect, prevent and address technical issues",
                  "To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or inquired about unless you have opted not to receive such information",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">2.b Legal Basis for Processing Personal Data Under General Data Protection Regulation (GDPR)</p>
              <p>
                If you are from the European Economic Area (EEA), Limpiar Inc. legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it. Limpiar Inc. may process your Personal Data because:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "We need to perform a contract with you",
                  "You have given us permission to do so",
                  "The processing is in our legitimate interests and it’s not overridden by your rights",
                  "For payment processing purposes",
                  "To comply with the law",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">2.b.i Retention of Data</p>
              <p>
                Limpiar Inc. will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. Limpiar Inc. will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.b.ii Transfer Of Data</p>
              <p>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction. If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there. Your consent to this Privacy Policy, followed by your submission of such information, represents your agreement to that transfer. Limpiar Inc. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy, and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of your data and other personal information.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.c Disclosure Of Data</p>
              <p className="font-bold text-base ml-4">2.c.i Business Transaction</p>
              <p className="ml-4">
                If Limpiar Inc. is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              <p className="font-bold text-base ml-4 mt-2">Disclosure for Law Enforcement</p>
              <p className="ml-4">
                Under certain circumstances, Limpiar Inc. may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
              </p>
              <p className="font-bold text-base ml-4 mt-2">Legal Requirements</p>
              <p className="ml-4">
                Limpiar Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="pl-10 mt-2 space-y-2">
                {[
                  "To comply with a legal obligation",
                  "To protect and defend the rights or property of Limpiar Inc.",
                  "To prevent or investigate possible wrongdoing in connection with the Service",
                  "To protect the personal safety of users of the Service or the public",
                  "To protect against legal liability",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">2.c.ii Security Of Data</p>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.c.iii “Do Not Track” Signals</p>
              <p>
                We do not support Do Not Track (“DNT”). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">2.d Your Data Protection Rights Under General Data Protection Regulation (GDPR)</p>
              <p>
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Tidy Technologies, Inc. aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "2.d.i. The right to access, update, or to delete the information we have on you. Whenever made possible, you can access, update or request the deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.",
                  "2.d.ii The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.",
                  "2.d.iii The right to object. You have the right to object to our processing of your Personal Data.",
                  "2.d.iv The right of restriction. You have the right to request that we restrict the processing of your personal information.",
                  "2.d.v The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable, and commonly used format.",
                  "2.d.vi. The right to withdraw consent. You also have the right to withdraw your consent at any time when Limpiar Inc. relies on your consent to process your personal information.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <p className="mt-2">
                Please note that we may ask you to verify your identity before responding to such requests. You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "3. Our Details",
      icon: <FiMail className="text-fuchsia-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">3.1</p>
              <p>
                This mobile application Limpiar is owned and operated by Limpiar Inc.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">3.2</p>
              <p>
                We are registered in the USA, and our registered office is at 163 Parkhouse, Dallas, Texas 75207, USA.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">3.3</p>
              <p>You can contact us:</p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "(a) By post, using the postal address given above;",
                  "(b) Using <a href=\"mailto:helpdesk@uselimpiar.online\" class=\"text-blue-500\">helpdesk@limpiar.online</a> to open a ticket;",
                  "(c) By telephone on +1650-585-0880 or",
                  "(d) By email, using <a href=\"mailto:legal@limpiar.online\" class=\"text-blue-500\">legal@limpiar.online</a> for legal questions and <a href=\"mailto:helpdesk@limpiar.online\" class=\"text-blue-500\">helpdeskt@limpiar.online</a> for Support.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "4. Providing Your Personal Data to Others",
      icon: <FiShare2 className="text-purple-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">4.1</p>
              <p>
                We may disclose your personal data to any member of our group of companies (this means our subsidiaries, our ultimate holding company, and all its subsidiaries) insofar as reasonably necessary for the purposes and on the legal bases set out in this policy.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">4.2</p>
              <p>
                We may disclose your personal data to our insurers and/or professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks, obtaining professional advice, or the establishment, exercise, or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">4.3</p>
              <p>
                In addition to the specific disclosures of personal data set out in this Section 4, we may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "5. International Transfers of Your Personal Data",
      icon: <FiGlobe className="text-pink-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">5.1</p>
              <p>
                Information that we collect may be stored and processed in and transferred between any of the countries in which we operate in order to enable us to use the information in accordance with this policy.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">5.2</p>
              <p>
                Personal information that you publish on Limpiar.online or submit for publication on limpiar.online may be available, via the internet, around the world. We cannot prevent the use or misuse of such information by others.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "6. Retaining and Deleting Personal Data",
      icon: <FiClock className="text-teal-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">6.1</p>
              <p>
                This Section 6 sets out our data retention policies and procedure, which are designed to help ensure that we comply with our legal obligations in relation to the retention and deletion of personal data.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">6.2</p>
              <p>
                Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">6.3</p>
              <p>
                Notwithstanding the other provisions of this Section 6, we may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "7. Amendments",
      icon: <FiSettings className="text-orange-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">7.1</p>
              <p>
                We may update this policy from time to time by publishing a new version on our website.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">7.2</p>
              <p>
                You should check this page occasionally to ensure you are happy with any changes to this policy.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">7.3</p>
              <p>
                We will notify you of significant changes to this policy by email or through the private messaging system on our website.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "8. Your Rights",
      icon: <FiUserCheck className="text-cyan-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">8.1</p>
              <p>
                In Section 8, we have summarised the rights that you have under data protection law. Some of the rights are complex, and not all of the details have been included in our summaries. Accordingly, you should read the relevant laws and guidance from the regulatory authorities for a full explanation of these rights.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.2</p>
              <p>Your principal rights under data protection law are:</p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "(a) the right to access;",
                  "(b) the right to rectification;",
                  "(c) the right to erasure;",
                  "(d) the right to restrict processing;",
                  "(e) the right to object to processing;",
                  "(f) the right to data portability;",
                  "(g) the right to complain to a supervisory authority; and",
                  "(h) the right to withdraw consent.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">8.3</p>
              <p>
                You have the right to confirmation as to whether or not we process your personal data and, where we do, access to the personal data, together with certain additional information. That additional information includes details of the purposes of the processing, the categories of personal data concerned, and the recipients of the personal data. Providing the rights and freedoms of others are not affected, we will supply you with a copy of your personal data. The first copy will be provided free of charge, but additional copies may be subject to a reasonable fee.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.4</p>
              <p>
                You have the right to have any inaccurate personal data about you rectified and, taking into account the purposes of the processing, to have any incomplete personal data about you completed.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.5</p>
              <p>
                In some circumstances, you have the right to the erasure of your personal data without undue delay. Those circumstances include: the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the processing is for direct marketing purposes, and the personal data have been unlawfully processed. However, there are exclusions of the right to erasure. The general exclusions include where processing is necessary: for exercising the right of freedom of expression and information; for compliance with a legal obligation; or for the establishment, exercise, or defence of legal claims.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.6</p>
              <p>
                In some circumstances, you have the right to restrict the processing of your personal data. Those circumstances are: you contest the accuracy of the personal data; processing is unlawful, but you oppose erasure; we no longer need the personal data for the purposes of our processing, but you require personal data for the establishment, exercise, or defence of legal claims; and you have objected to processing, pending the verification of that objection. Where processing has been restricted on this basis, we may continue to store your personal data. However, we will only otherwise process it: with your consent; for the establishment, exercise, or defence of legal claims; for the protection of the rights of another natural or legal person; or for reasons of important public interest.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.7</p>
              <p>
                You have the right to object to our processing of your personal data on grounds relating to your particular situation, but only to the extent that the legal basis for the processing is that the processing is necessary for: the performance of a task carried out in the public interest or in the exercise of any official authority vested in us; or the purposes of the legitimate interests pursued by a third party or by us. If you make such an objection, we will cease to process the personal information unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights, and freedoms, or the processing is for the establishment, exercise or defence of legal claims.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.8</p>
              <p>
                You have the right to object to our processing of your personal data for direct marketing purposes (including profiling for direct marketing purposes). If you make such an objection, we will cease to process your personal data for this purpose.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.9</p>
              <p>
                You have the right to object to our processing of your personal data for scientific or historical research purposes or statistical purposes on grounds relating to your particular situation unless the processing is necessary for the performance of a task carried out for reasons of public interest.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.10</p>
              <p>
                To the extent that the legal basis for our processing of your personal data is:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "(a) consent; or",
                  "(b) that the processing is necessary for the performance of a contract to which you are a party or in order to take steps at your request prior to entering into a contract, and such processing is carried out by automated means, you have the right to receive your personal data from us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">8.11</p>
              <p>
                If you consider that our processing of your personal information infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work, or the place of the alleged infringement.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.12</p>
              <p>
                To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">8.13</p>
              <p>
                You may exercise any of your rights in relation to your personal data by written notice to us <a href="mailto:legal@limpiar.online" className="text-blue-500">legal@limpiar.online</a>, in addition to the other methods specified in this Section 8.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "9. Third-Party Websites",
      icon: <FiUsers className="text-lime-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">9.1</p>
              <p>
                Limpiar.online engages certain onward sub-processors that may process personal data submitted to Limpiar.online’s services. These processors are listed below, as may be updated by Limpiar.online from time to time:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "<a href=\"https://aws.amazon.com\" class=\"text-blue-500\">Amazon Web Services</a>",
                  "<a href=\"https://www.google.com\" class=\"text-blue-500\">Google Inc.</a>",
                  "<a href=\"https://www.apple.com/privacy\" class=\"text-blue-500\">Apple Inc.</a> and <a href=\"https://support.apple.com/en-ca/ht203027\" class=\"text-blue-500\">Apple Support</a>",
                  "<a href=\"https://branch.io\" class=\"text-blue-500\">Branch Metrics, Inc.</a>",
                  "<a href=\"https://stripe.com\" class=\"text-blue-500\">Stripe, Inc.</a>",
                  "<a href=\"https://sendgrid.com\" class=\"text-blue-500\">Sendgrid</a>",
                  "<a href=\"https://www.facebook.com\" class=\"text-blue-500\">Facebook Ireland Limited and Facebook, Inc.</a>",
                  "<a href=\"https://www.inap.com\" class=\"text-blue-500\">Inap Inc., a subsidiary of Voxel Dot Net Inc.</a>",
                  "<a href=\"https://certn.co/\" class=\"text-blue-500\">Certn</a>",
                  "<a href=\"https://www.intercom.com\" class=\"text-blue-500\">Intercom</a>",
                  "<a href=\"https://www.paymentrails.com/\" class=\"text-blue-500\">Paymentrails Inc.</a>",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">9.2 Service Providers</p>
              <p>
                We may employ third-party companies and individuals to facilitate our mobile app services (“Service Providers”), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our mobile app services are used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
              <p className="font-bold text-base ml-4 mt-2">Analytics</p>
              <p className="ml-4">
                We may use third-party Service Providers to monitor and analyze the use of our mobile app services.
              </p>
              <ul className="pl-10 mt-2 space-y-2">
                {[
                  "<strong>Google Analytics</strong> is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our mobile app services. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href=\"http://www.google.com/intl/en/policies/privacy/\" class=\"text-blue-500\">http://www.google.com/intl/en/policies/privacy/</a>",
                  "<strong>Google AdWords</strong> remarketing service is provided by Google Inc. You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: <a href=\"http://www.google.com/settings/ads\" class=\"text-blue-500\">http://www.google.com/settings/ads</a>. Google also recommends installing the Google Analytics Opt-out Browser Add-on – <a href=\"https://tools.google.com/dlpage/gaoptout\" class=\"text-blue-500\">https://tools.google.com/dlpage/gaoptout</a> – for your web browser. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href=\"http://www.google.com/intl/en/policies/privacy/\" class=\"text-blue-500\">http://www.google.com/intl/en/policies/privacy/</a>",
                  "<strong>Quora Business Advertising</strong> remarketing service is provided by Quora Inc. For more information on the privacy practices of Quora, please visit the ads policy page: <a href=\"https://www.quora.com/about/ads_policy\" class=\"text-blue-500\">https://www.quora.com/about/ads_policy</a>",
                  "<strong>Twitter</strong> remarketing service is provided by Twitter Inc. You can opt-out from Twitter’s interest-based ads by following their instructions: <a href=\"https://support.twitter.com/articles/20170405\" class=\"text-blue-500\">https://support.twitter.com/articles/20170405</a>. You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: <a href=\"https://twitter.com/privacy\" class=\"text-blue-500\">https://twitter.com/privacy</a>",
                  "<strong>Facebook</strong> remarketing service is provided by Facebook Inc. You can learn more about interest-based advertising from Facebook by visiting this page: <a href=\"https://www.facebook.com/help/164968693837950\" class=\"text-blue-500\">https://www.facebook.com/help/164968693837950</a>. To opt-out from Facebook’s interest-based ads, follow these instructions from Facebook: <a href=\"https://www.facebook.com/help/568137493302217\" class=\"text-blue-500\">https://www.facebook.com/help/568137493302217</a>. Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA <a href=\"http://www.aboutads.info/choices/\" class=\"text-blue-500\">http://www.aboutads.info/choices/</a>, the Digital Advertising Alliance of Canada in Canada <a href=\"http://youradchoices.ca/\" class=\"text-blue-500\">http://youradchoices.ca/</a> or the European Interactive Digital Advertising Alliance in Europe <a href=\"http://www.youronlinechoices.eu/\" class=\"text-blue-500\">http://www.youronlinechoices.eu/</a>, or opt-out using your mobile device settings. For more information on the privacy practices of Facebook, please visit Facebook’s Data Policy: <a href=\"https://www.facebook.com/privacy/explanation\" class=\"text-blue-500\">https://www.facebook.com/privacy/explanation</a>",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">9.3 Payments</p>
              <p>
                We may provide paid subscriptions and/or services within the mobile app. In that case, we use third-party services for payment processing (e.g., payment processors). We will not store or collect your payment card details. That information is provided directly to our third-party payment processors, whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express, and Discover. PCI-DSS requirements help ensure the secure handling of payment information. The payment processors we work with are:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "<strong>Apple Pay</strong> allows you to make easy, secure, and private transactions in stores, in apps, and on the web. You can also send and receive money with friends and family using Apple Pay in Messages (the U.S. only). And with contactless rewards cards in Wallet, you can receive and redeem rewards when paying with Apple Pay. Apple Pay is designed with your security and privacy in mind, making it a simpler and more secure way to pay than using your physical credit, debit, and prepaid cards. Apple Pay uses security features built-in into the hardware and software of your device to help protect your transactions. In addition, to use Apple Pay, you must have a passcode set on your device and, optionally, a Face ID or Touch ID. You can use a simple passcode, or you can set a more complex passcode for even greater security. Apple Pay is also designed to protect your personal information. Apple doesn’t store or have access to the original credit, debit, or prepaid card numbers that you use with Apple Pay. And when you use Apple Pay with credit, debit, or prepaid cards, Apple doesn’t retain any transaction information that can be tied back to you—your transactions stay between you, the merchant or developer, and your bank or card issuer. Their Privacy Policy can be viewed at <a href=\"https://www.apple.com/legal/privacy/en-ww/\" class=\"text-blue-500\">https://www.apple.com/legal/privacy/en-ww/</a>, <a href=\"https://www.apple.com/privacy\" class=\"text-blue-500\">https://www.apple.com/privacy</a> and <a href=\"https://support.apple.com/en-ca/ht203027\" class=\"text-blue-500\">https://support.apple.com/en-ca/ht203027</a>",
                  "<strong>Google Play In-App Payments and Google Pay</strong>. Their Privacy Policy can be viewed at <a href=\"https://www.google.com/policies/privacy/\" class=\"text-blue-500\">https://www.google.com/policies/privacy/</a>",
                  "<strong>Stripe</strong>. Their Privacy Policy can be viewed at <a href=\"https://stripe.com/us/privacy\" class=\"text-blue-500\">https://stripe.com/us/privacy</a>",
                  "<strong>PayPal or Braintree</strong>. Their Privacy Policy can be viewed at <a href=\"https://www.paypal.com/webapps/mpp/ua/privacy-full\" class=\"text-blue-500\">https://www.paypal.com/webapps/mpp/ua/privacy-full</a>",
                  "<strong>Transferwise</strong>. Their Privacy Policy can be viewed at <a href=\"https://transferwise.com/privacy-policy\" class=\"text-blue-500\">https://transferwise.com/privacy-policy</a>",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "10. Personal Data of Children",
      icon: <FiUser className="text-emerald-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">10.1</p>
              <p>
                Our website and services are targeted at persons over the age of 13.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">10.2</p>
              <p>
                If we have reason to believe that we hold the personal data of a person under that age in our databases, we will delete that personal data.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "11. Updating Information",
      icon: <FiSettings className="text-rose-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">11.1</p>
              <p>
                Please let us know if the personal information that we hold about you needs to be corrected or updated.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "12. App Permissions",
      icon: <FiSettings className="text-violet-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">12.1 Location Services</p>
              <p>
                If you opt in, the app will collect and send precise location data to Limpiar.online’s servers. We use that data to personalize your experience; to display freelancer in your location; to facilitate freelancer selection and invitation; to determine what products, promotions, and surveys are relevant to you; match project to freelancer and employer to freelancer, and to customize and improve the location-based services we provide. In addition to GPS, we may use other methods to determine precise location if you enable Location Services, including Wi-Fi signals. We may cache your recent locations on the device to speed up the launch process, but we will not store a history of your location in persistent memory on the device.
              </p>
              <p className="mt-2">
                If you opt-out, you can still use Limpiar.online, but you’ll have to manually enter your pickup address every time before you can see what options are available in your city.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">12.2 Push Notifications</p>
              <p>
                You’ll see the notification dialog once you open the mobile application for the registration process with Limpiar.online or before you post your first project. If you opt-in, Apple Push Notification Service generates a unique token for your device and passes it to Limpiar.online; this device token is then sent to Limpiar.online’s servers and stored so that Push Notifications can be sent to you.
              </p>
              <p className="mt-2">
                If you opt-out of Push Notifications, you’ll receive updates about your trip by e-mail (these communications are not optional). Note that if you initially tapped Don’t Allow, the only way to opt into Push Notifications from Limpiar.online is to update your preferences in your phone’s Settings app.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">12.3 Camera</p>
              <p>
                You’ll see the camera dialog when you add a photo to your Limpiar.online profile (and select “Take New” instead of “Choose Existing”) or take a photo of your ID with the camera when completing your profile. Your ID is for KYC verification offered by our selected provider. You can still add an existing photo/ID to your user profile by granting access to your Photos, as seen below.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">12.4 Photos</p>
              <p>
                You’ll see the photo dialog when you attempt to add an existing photo to your Limpiar.online user profile/ID documentation. If you don’t allow the app access to Photos, you can still select to take a new photo for your Limpiar.online user profile by allowing the Limpiar.online app to access your phone’s Camera.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">12.5 Device Identifier</p>
              <p>
                We may also collect a unique identifier for your computer, mobile device, or other device used to access the Limpiar.online Platform (“Device Identifier”). A Device Identifier is a number that is automatically assigned to the device you used to access the Limpiar.online Platform. We may link the Device Identifier to other information about your visit, such as what pages you viewed, and to the Personal Information, you provide us, such as your name. In addition to these methods, we may also collect information about how you interact with the Limpiar.online Platform through advertising partners and data enrichment tools.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "13. Cookies",
      icon: <FiSettings className="text-amber-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">13.1</p>
              <p>
                A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">13.2</p>
              <p>
                Cookies may be either “persistent” cookies or “session” cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie on the other hand, will expire at the end of the user session, when the web browser is closed.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">13.3</p>
              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "14. Cookies Used by Our Service Providers",
      icon: <FiSettings className="text-yellow-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">14.1</p>
              <p>
                Our service providers use cookies and those cookies may be stored on your computer when you visit our website.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">14.2</p>
              <p>
                We are using Google Maps API. Please make sure you agree with its Terms of Service <a href="https://developers.google.com/maps/terms" className="text-blue-500">https://developers.google.com/maps/terms</a>.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">14.3</p>
              <p>
                We are using Limpiar.online API calls at api.Limpiar.online.ca and api.Limpiar.online to save links of images stored in Firebase and Google Cloud. Please make sure you agree with Google Firebase Terms of Service <a href="https://firebase.google.com/terms" className="text-blue-500">https://firebase.google.com/terms</a> and Google Cloud Terms of Service <a href="https://cloud.google.com/terms" className="text-blue-500">https://cloud.google.com/terms</a>.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "15. Managing Cookies",
      icon: <FiLock className="text-blue-500" />,
      content: (
        <>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">15.1</p>
              <p>
                Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser and from version to version. You can, however obtain up-to-date information about blocking and deleting cookies via these links:
              </p>
              <ul className="pl-6 mt-2 space-y-2">
                {[
                  "<a href=\"https://support.google.com/chrome/answer/95647?hl=en\" class=\"text-blue-500\">Chrome</a>",
                  "<a href=\"https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences\" class=\"text-blue-500\">Firefox</a>",
                  "<a href=\"http://www.opera.com/help/tutorials/security/cookies/\" class=\"text-blue-500\">Opera</a>",
                  "<a href=\"https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies\" class=\"text-blue-500\">Internet Explorer</a>",
                  "<a href=\"https://support.apple.com/kb/PH21411\" class=\"text-blue-500\">Safari</a>",
                  "<a href=\"https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy\" class=\"text-blue-500\">Edge</a>",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FiCheck className="text-black mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">15.2</p>
              <p>
                Blocking all cookies will have a negative impact on the usability of many websites.
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">15.3</p>
              <p>
                If you block cookies, you will not be able to use all the features on our website.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800">
      <motion.h1
        className="text-3xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiShield className="text-red-500" />
        Privacy Policy
      </motion.h1>
      <motion.p
        className="mb-8 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Last updated: June 23, 2024
      </motion.p>

      {/** Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="mb-4 rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <button
            className="w-full flex items-center justify-between p-6 text-left text-xl font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => toggleSection(index)}
            aria-expanded={openSection === index}
            aria-controls={`section-${index}`}
          >
            <div className="flex items-center gap-2">
              {section.icon}
              {section.title}
            </div>
            <FiChevronDown
              className={`text-blue-600 transition-transform duration-300 ${openSection === index ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {openSection === index && (
              <motion.div
                id={`section-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 text-gray-700 leading-relaxed bg-gradient-to-b from-gray-50 to-white"
              >
                {section.content}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link href="/" className="text-blue-600 font-semibold hover:text-blue-800">
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <FiArrowLeft size={24} aria-label="Back to Home" />
          </motion.span>
        </Link>
      </motion.div>

      {/** Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}