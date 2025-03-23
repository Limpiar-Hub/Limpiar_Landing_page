"use client";

import Link from "next/link";
import {
  FiMail, FiUser, FiCreditCard, FiGlobe, FiShield, FiShare2, FiLock, FiUserCheck, FiRefreshCw,
  FiAlertCircle, FiThumbsUp, FiUsers, FiSettings, FiTrash2, FiClock, FiDatabase, FiFileText, 
  FiPhone, FiMapPin, FiInfo, FiEye, FiServer, FiBarChart2, FiBookOpen
} from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FiShield className="text-blue-500" />
        Privacy Policy
      </h1>
      <p className="mb-4">Last updated: June 23, 2024</p>

      {/* 1. Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiInfo className="text-blue-500" />
          1. Introduction
        </h2>
        <p>
          Welcome to Limpiar. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiUser className="text-blue-500" />
          2. Information We Collect
        </h2>
        <ul className="list-disc pl-6">
          <li>Personal identification information (Name, Email address, Phone number, etc.)</li>
          <li>Payment information (when making transactions through our platform)</li>
          <li>Usage data (browser type, IP address, pages visited, etc.)</li>
        </ul>
      </section>

      {/* 3. How We Use Your Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiGlobe className="text-blue-500" />
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>Provide and maintain our services</li>
          <li>Process transactions and send important notifications</li>
          <li>Improve our website and user experience</li>
          <li>Ensure security and prevent fraud</li>
        </ul>
      </section>

      {/* 4. Sharing Your Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiShare2 className="text-blue-500" />
          4. Sharing Your Information
        </h2>
        <p>We do not sell or rent your personal data. However, we may share it with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers (payment processors, cloud storage, etc.)</li>
          <li>Legal authorities if required by law</li>
        </ul>
      </section>

      {/* 5. Security */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiLock className="text-blue-500" />
          5. Security
        </h2>
        <p>
          We implement strict security measures to protect your data, but no method is 100% secure. Use our services at your own risk.
        </p>
      </section>

      {/* 6. User Rights (Texas TDPSA) */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiUserCheck className="text-blue-500" />
          6. Your Rights Under Texas TDPSA
        </h2>
        <p>As per the Texas Data Privacy and Security Act (TDPSA), you have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, correct, and delete your data.</li>
          <li>Opt out of data collection or targeted advertising.</li>
          <li>Request a copy of your stored data.</li>
        </ul>
      </section>

      {/* 7. Data Breach Notification */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiAlertCircle className="text-blue-500" />
          7. Data Breach Notification
        </h2>
        <p>
          In the event of a data breach, we will notify affected users within 72 hours, as required by applicable laws and regulations.
        </p>
      </section>

      {/* 8. Cookies and Tracking Technologies */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiSettings className="text-blue-500" />
          8. Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies to enhance user experience. You can control cookie preferences through your browser settings.
        </p>
      </section>

      {/* 9. Payment Information Security */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiCreditCard className="text-blue-500" />
          9. Payment Information Security
        </h2>
        <p>
          We do not store your full credit card details. Payments are securely processed through third-party providers like Stripe and Paystack.
        </p>
      </section>

      {/* 10. Data Retention */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiClock className="text-blue-500" />
          10. Data Retention
        </h2>
        <p>
          We retain your personal data for as long as necessary to fulfill our legal and business obligations.
        </p>
      </section>

      {/* 11. Third-Party Links */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiUsers className="text-blue-500" />
          11. Third-Party Links
        </h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for their privacy practices; please review their policies separately.
        </p>
      </section>

      {/* 12. Contact Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FiMail className="text-blue-500" />
          12. Contact Information
        </h2>
        <p>
          If you have any questions, please contact us at{" "}
          <a href="mailto:helpdesk@uselimpiar.online" className="text-blue-500">helpdesk@uselimpiar.online</a>.
        </p>
      </section>

      <Link href="/" className="text-blue-500 mt-6 inline-block">Back to Home</Link>
    </div>
  );
}
