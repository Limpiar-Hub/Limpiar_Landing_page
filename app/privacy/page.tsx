"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail, FiUser, FiGlobe, FiShield, FiShare2, FiLock, FiUserCheck,
  FiUsers, FiSettings, FiClock, FiInfo, FiChevronDown, FiArrowUp, FiArrowLeft, FiCheck,
} from "react-icons/fi";

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Toggle accordion section
  const toggleSection = (index) => {
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
      title: "Introduction",
      icon: <FiInfo className="text-red-500" />,
      content: (
        <>
          <p>
            We are committed to safeguarding the privacy of Limpiar Online users. This Privacy Policy applies where we act as a data controller with respect to the personal data of our website visitors and service users, determining the purposes and means of processing that data.
          </p>
          <p className="mt-2">
            We use cookies on our website. For cookies not strictly necessary, we will ask for your consent when you first visit. Our website incorporates privacy controls allowing you to specify preferences for direct marketing communications and limit information publication.
          </p>
          <p className="mt-2">
            In this policy, “we”, “us”, and “our” refer to Limpiar.online.
          </p>
        </>
      ),
    },
    {
      title: "How We Use Your Personal Data",
      icon: <FiUser className="text-green-500" />,
      content: (
        <>
          <p>We may process the following categories of personal data:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "<strong>Usage Data:</strong> Includes IP address, geographical location, browser type, operating system, referral source, visit length, page views, and navigation paths. Processed for analyzing website and service use, based on your consent.",
              "<strong>Account and Profile Data:</strong> Includes name, address, phone number, email, profile pictures, gender, date of birth, interests, and employment details. Processed for operating our website, providing services, ensuring security, and communication, based on your consent.",
              "<strong>Publication Data:</strong> Information you post for publication on our website or services, processed to enable publication and administer services, based on your consent.",
              "<strong>Enquiry Data:</strong> Information from inquiries about goods/services, processed for offering, marketing, and selling relevant goods/services.",
              "<strong>Notification Data:</strong> Data for email notifications/newsletters, processed to send relevant communications, based on your consent.",
              "<strong>Correspondence Data:</strong> Communication content and metadata, processed for communication and record-keeping, based on legitimate interests.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <p className="mt-2">
            We may also process data for legal claims, insurance, risk management, or compliance with legal obligations, based on legitimate interests or legal requirements. Do not supply others’ personal data unless prompted.
          </p>
        </>
      ),
    },
    {
      title: "Legal Basis for Processing (GDPR)",
      icon: <FiGlobe className="text-yellow-500" />,
      content: (
        <>
          <p>For users in the European Economic Area (EEA), our legal basis for processing personal data includes:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "Performing a contract with you.",
              "Your consent.",
              "Legitimate interests, not overridden by your rights.",
              "Payment processing purposes.",
              "Compliance with legal obligations.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Providing Your Personal Data to Others",
      icon: <FiShare2 className="text-purple-500" />,
      content: (
        <>
          <p>We may disclose your personal data to:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "Our group companies, as necessary for the purposes in this policy.",
              "Insurers or professional advisers for insurance, risk management, or legal claims.",
              "Third parties for legal obligations or to protect vital interests.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            We use third-party service providers like Amazon Web Services, Google, Apple, Stripe, and others. Their privacy policies govern their use of your data.
          </p>
        </>
      ),
    },
    {
      title: "International Transfers of Your Personal Data",
      icon: <FiGlobe className="text-pink-500" />,
      content: (
        <p>
          Your data may be stored, processed, and transferred between countries where we operate, in accordance with this policy. Published personal information may be available worldwide via the internet, and we cannot prevent its use or misuse by others.
        </p>
      ),
    },
    {
      title: "Retaining and Deleting Personal Data",
      icon: <FiClock className="text-teal-500" />,
      content: (
        <p>
          We retain personal data only as long as necessary for the purposes outlined in this policy, legal obligations, dispute resolution, or to protect vital interests. Usage data is retained for shorter periods for internal analysis, unless needed for security or functionality.
        </p>
      ),
    },
    {
      title: "Amendments",
      icon: <FiSettings className="text-orange-500" />,
      content: (
        <p>
          We may update this policy by publishing a new version on our website. Check this page occasionally for changes. We will notify you of significant updates via email or our website’s messaging system.
        </p>
      ),
    },
    {
      title: "Your Rights",
      icon: <FiUserCheck className="text-cyan-500" />,
      content: (
        <>
          <p>You have the following rights under data protection law:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "Access your personal data and obtain details about its processing.",
              "Rectify inaccurate or incomplete data.",
              "Erase data in certain circumstances.",
              "Restrict processing under specific conditions.",
              "Object to processing for legitimate interests or direct marketing.",
              "Data portability in a structured, machine-readable format.",
              "Withdraw consent at any time.",
              "Complain to a supervisory authority.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2">
            Exercise your rights by contacting us at{" "}
            <a href="mailto:legal@limpiar.online" className="text-blue-500">
              legal@limpiar.online
            </a>.
          </p>
        </>
      ),
    },
    {
      title: "Third-Party Websites and Services",
      icon: <FiUsers className="text-lime-500" />,
      content: (
        <p>
          Our website and app may engage third-party service providers (e.g., Google Analytics, Stripe, Apple Pay) to facilitate services, analytics, or payments. These providers access your data only to perform tasks on our behalf, governed by their privacy policies. We are not responsible for third-party privacy practices.
        </p>
      ),
    },
    {
      title: "Personal Data of Children",
      icon: <FiUser className="text-emerald-500" />,
      content: (
        <p>
          Our services are targeted at persons over 13. If we believe we hold data of someone under 13, we will delete it.
        </p>
      ),
    },
    {
      title: "App Permissions",
      icon: <FiSettings className="text-rose-500" />,
      content: (
        <>
          <p>Our mobile app may request permissions, including:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "<strong>Location Services:</strong> Used to personalize your experience and provide location-based features. You can disable this in device settings.",
              "<strong>Push Notifications:</strong> For updates and communications. Opt out via device settings.",
              "<strong>Camera/Photos:</strong> For profile photos or ID verification. You can deny access and use alternative methods.",
              "<strong>Device Identifier:</strong> To track interactions and link to your account.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Cookies and Tracking Technologies",
      icon: <FiSettings className="text-violet-500" />,
      content: (
        <>
          <p>
            We use cookies and tracking technologies (e.g., session, preference, security cookies) to operate, personalize, and secure our services. Cookies are small files stored on your device. You can refuse cookies via browser settings, but this may limit website functionality.
          </p>
          <p className="mt-2">
            Our service providers (e.g., Google Maps, Firebase) may also use cookies. Manage cookies through your browser settings or via links provided in our policy.
          </p>
        </>
      ),
    },
    {
      title: "Security of Data",
      icon: <FiLock className="text-amber-500" />,
      content: (
        <p>
          We use commercially acceptable means to protect your data, but no method is 100% secure. We do not support “Do Not Track” signals; manage tracking preferences via your browser settings.
        </p>
      ),
    },
    {
      title: "Contact Information",
      icon: <FiMail className="text-fuchsia-500" />,
      content: (
        <>
          <p>Contact us at:</p>
          <ul className="pl-6 mt-2 space-y-2">
            {[
              "Post: 163 Parkhouse, Dallas, Texas 75207, USA",
              "Email: <a href=\"mailto:legal@limpiar.online\" class=\"text-blue-500\">legal@limpiar.online</a> (legal) or <a href=\"mailto:helpdesk@uselimpiar.online\" class=\"text-blue-500\">helpdesk@uselimpiar.online</a> (support)",
              "Phone: +1650-585-0880",
              "Support Ticket: <a href=\"mailto:helpdesk@uselimpiar.online\" class=\"text-blue-500\">helpdesk@uselimpiar.online</a>",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="text-black mt-1" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
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