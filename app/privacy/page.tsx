'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Mail } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-green text-white py-20 pt-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="bg-primary-gold/20 p-4 rounded-full">
              <Shield className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                Talawa Youth Development and Educational Alliance (&quot;Talawa,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed
                to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or make a donation.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address when you contact us, apply for scholarships, or purchase gala tickets.</li>
                <li><strong>Donation Information:</strong> When you donate through our GoFundMe page, payment processing is handled by GoFundMe and is subject to their privacy policy.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Communications:</strong> Any information you provide when contacting us via email or our contact form.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>To process and manage donations</li>
                <li>To send you updates about our programs and impact</li>
                <li>To process scholarship applications</li>
                <li>To respond to your inquiries</li>
                <li>To improve our website and services</li>
                <li>To send you event invitations and newsletters (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and process donations (e.g., GoFundMe).</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information. However,
                no method of transmission over the Internet is 100% secure. While we strive to protect
                your information, we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Cookies</h2>
              <p className="text-gray-600 mb-6">
                Our website may use cookies to enhance your experience. You can choose to disable cookies
                through your browser settings, though this may affect some features of the website.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites (such as GoFundMe). We are not
                responsible for the privacy practices of these sites. We encourage you to review
                their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Children&apos;s Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If we become aware that we have
                collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 text-primary-green">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@talawa.ca" className="hover:underline">info@talawa.ca</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/" className="btn-secondary">
                Return Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
