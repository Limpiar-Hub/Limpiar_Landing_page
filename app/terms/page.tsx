"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiCheckCircle, FiShield, FiDollarSign, FiUser, FiAlertTriangle, 
  FiXCircle, FiRefreshCw, FiMail,  FiLock, FiClock, 
  FiDatabase, 
} from "react-icons/fi";
import { FaGavel } from "react-icons/fa";

// Reusable Animated Card Component
const AnimatedSection = ({ icon, title, children, color }: { icon: React.ReactElement; title: string; children: React.ReactNode; color: string }) => {
    return (
    <motion.section
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
        <span className={`${color}`}>{icon}</span> {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </motion.section>
  );
};

export default function TermsOfService() {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-12 px-4">
      <div className="max-w-3xl w-full">
        
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mt-2 text-sm">Effective Date: March 23, 2025</p>
          <hr className="mt-4 border-gray-300"/>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          <AnimatedSection 
            icon={<FiCheckCircle />} 
            title="1. Acceptance of Terms" 
            color="text-blue-500"
          >
            <p>By accessing or using Limpiar, you agree to these Terms of Service. If you do not agree, you must discontinue use immediately.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiShield />} 
            title="2. Services Provided" 
            color="text-green-500"
          >
            <p>Limpiar provides professional cleaning services as outlined in our service agreement. Additional terms may apply to specific services.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiUser />} 
            title="3. User Responsibilities" 
            color="text-purple-500"
          >
            <ul className="list-disc pl-6">
              <li>Provide accurate and truthful information during account creation.</li>
              <li>Maintain security of your account credentials.</li>
              <li>Misuse of the services, including fraudulent activity, is strictly prohibited.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiDollarSign />} 
            title="4. Payments and Refunds" 
            color="text-yellow-500"
          >
            <ul className="list-disc pl-6">
              <li>All payments must be completed before service is rendered.</li>
              <li>Refunds are subject to review and approval based on our refund policy.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiAlertTriangle />} 
            title="5. Limitation of Liability" 
            color="text-red-500"
          >
            <p>Limpiar is not liable for incidental or consequential damages beyond what is permitted by Texas Business & Commerce Code § 17.50.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiXCircle />} 
            title="6. Termination" 
            color="text-gray-700"
          >
            <p>Limpiar reserves the right to suspend or terminate user accounts for violations of these terms.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiRefreshCw />} 
            title="7. Changes to Terms" 
            color="text-indigo-500"
          >
            <p>We may update these terms at any time. Continued use signifies acceptance of changes.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiLock />} 
            title="8. Privacy & Data Protection" 
            color="text-blue-500"
          >
            <p>
              Under the Texas Data Privacy and Security Act (TDPSA), you have rights to access, delete, and opt out of personal data collection. See our 
              <Link href="/privacy-policy" className="text-blue-500"> Privacy Policy</Link>.
            </p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiClock />} 
            title="9. Service Availability & Downtime" 
            color="text-gray-500"
          >
            <p>Limpiar strives for uptime, but we are not liable for service interruptions due to maintenance or unforeseen events.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiDatabase />} 
            title="10. Data Retention" 
            color="text-gray-700"
          >
            <p>We retain user data as required by Texas Business & Commerce Code § 521.052 and applicable federal regulations.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FaGavel />} 
            title="11. Governing Law" 
            color="text-gray-700"
          >
            <p>These Terms shall be governed by the laws of the State of Texas, without regard to conflicts of law principles.</p>
          </AnimatedSection>

          <AnimatedSection 
            icon={<FiMail />} 
            title="12. Contact Information" 
            color="text-blue-500"
          >
            <p>
              For any questions, contact us at 
              <a href="mailto:helpdesk@uselimpiar.online" className="text-blue-500"> helpdesk@uselimpiar.online</a>.
            </p>
          </AnimatedSection>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
