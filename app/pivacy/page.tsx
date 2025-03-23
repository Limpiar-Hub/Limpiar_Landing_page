"use client";

import Link from "next/link";
import {
  FiMail, FiUser, FiCreditCard, FiGlobe, FiShield, FiShare2, FiLock, FiUserCheck,
  FiAlertCircle, FiUsers, FiSettings, FiClock, FiInfo,
} from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FiShield className="text-blue-500" />
        Privacy Policy
      </h1>
      <p className="mb-4">Last updated: June 23, 2024</p>

      {/** Sections */}
      {[
        {
          title: "1. Introduction",
          icon: <FiInfo className="text-blue-500" />,
          content: "Welcome to Limpiar. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services."
        },
        {
          title: "2. Information We Collect",
          icon: <FiUser className="text-blue-500" />,
          content: (
            <ul className="list-disc pl-6">
              <li>Personal identification information (Name, Email address, Phone number, etc.)</li>
              <li>Payment information (when making transactions through our platform)</li>
              <li>Usage data (browser type, IP address, pages visited, etc.)</li>
            </ul>
          )
        },
        {
          title: "3. How We Use Your Information",
          icon: <FiGlobe className="text-blue-500" />,
          content: (
            <ul className="list-disc pl-6">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send important notifications</li>
              <li>Improve our website and user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          )
        },
        {
          title: "4. Sharing Your Information",
          icon: <FiShare2 className="text-blue-500" />,
          content: (
            <>
              <p>We do not sell or rent your personal data. However, we may share it with:</p>
              <ul className="list-disc pl-6">
                <li>Service providers (payment processors, cloud storage, etc.)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </>
          )
        },
        {
          title: "5. Security",
          icon: <FiLock className="text-blue-500" />,
          content: "We implement strict security measures to protect your data, but no method is 100% secure. Use our services at your own risk."
        },
        {
          title: "6. Your Rights Under Texas TDPSA",
          icon: <FiUserCheck className="text-blue-500" />,
          content: (
            <>
              <p>As per the Texas Data Privacy and Security Act (TDPSA), you have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access, correct, and delete your data.</li>
                <li>Opt out of data collection or targeted advertising.</li>
                <li>Request a copy of your stored data.</li>
              </ul>
            </>
          )
        },
        {
          title: "7. Data Breach Notification",
          icon: <FiAlertCircle className="text-blue-500" />,
          content: "In the event of a data breach, we will notify affected users within 72 hours, as required by applicable laws and regulations."
        },
        {
          title: "8. Cookies and Tracking Technologies",
          icon: <FiSettings className="text-blue-500" />,
          content: "We use cookies to enhance user experience. You can control cookie preferences through your browser settings."
        },
        {
          title: "9. Payment Information Security",
          icon: <FiCreditCard className="text-blue-500" />,
          content: "We do not store your full credit card details. Payments are securely processed through third-party providers like Stripe and Paystack."
        },
        {
          title: "10. Data Retention",
          icon: <FiClock className="text-blue-500" />,
          content: "We retain your personal data for as long as necessary to fulfill our legal and business obligations."
        },
        {
          title: "11. Third-Party Links",
          icon: <FiUsers className="text-blue-500" />,
          content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices; please review their policies separately."
        },
        {
          title: "12. Contact Information",
          icon: <FiMail className="text-blue-500" />,
          content: (
            <>
              <p>If you have any questions, please contact us at{" "}
                <a href="mailto:helpdesk@uselimpiar.online" className="text-blue-500">
                  helpdesk@uselimpiar.online
                </a>.
              </p>
            </>
          )
        }
      ].map((section, index) => (
        <div 
          key={index} 
          className="mb-6 p-6 border border-gray-200 shadow-sm rounded-lg bg-white hover:shadow-md transition duration-300 ease-in-out"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
            {section.icon} {section.title}
          </h2>
          <div className="text-gray-700 leading-relaxed">{section.content}</div>
        </div>
      ))}

      <Link href="/" className="text-blue-500 mt-6 inline-block">Back to Home</Link>
    </div>
  );
}
