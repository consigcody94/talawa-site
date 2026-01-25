'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Mail } from 'lucide-react'

export default function TermsPage() {
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
              <FileText className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Terms of Service
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
              <h2 className="text-2xl font-bold text-primary-black mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using the Talawa Youth Development and Educational Alliance website
                (&quot;the Site&quot;), you agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our Site.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">About Talawa</h2>
              <p className="text-gray-600 mb-6">
                Talawa Youth Development and Educational Alliance is a Canadian-Jamaican charity
                dedicated to empowering Black children and youth through education. We support
                Wait-A-Bit Basic School and Wait-A-Bit Primary School in Trelawny, Jamaica.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Use of the Site</h2>
              <p className="text-gray-600 mb-4">You agree to use the Site only for lawful purposes. You may not:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Use the Site to transmit harmful code or malware</li>
                <li>Interfere with or disrupt the Site or servers</li>
                <li>Collect personal information from other users without consent</li>
                <li>Use the Site for any fraudulent purpose</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Donations</h2>
              <p className="text-gray-600 mb-6">
                Donations to Talawa are processed through GoFundMe and are subject to GoFundMe&apos;s
                terms of service. All donations are voluntary and non-refundable unless otherwise
                specified. We are committed to using donations responsibly and in accordance with
                our charitable mission.
              </p>
              <p className="text-gray-600 mb-6">
                Tax receipts for Canadian donors may be available upon request. Please contact us
                at info@talawa.ca with your donation details.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Scholarship Applications</h2>
              <p className="text-gray-600 mb-6">
                By submitting a scholarship application, you certify that all information provided
                is accurate and complete. False information may result in disqualification or
                revocation of any awarded scholarship. Scholarship decisions are made at the sole
                discretion of Talawa and are final.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on this Site, including text, images, logos, and graphics, is the
                property of Talawa Youth Development and Educational Alliance and is protected
                by copyright and other intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our express written permission.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                The Site may contain links to third-party websites. These links are provided for
                your convenience. We do not endorse or assume responsibility for the content or
                practices of these third-party sites.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-6">
                The Site is provided &quot;as is&quot; without warranties of any kind, either express or
                implied. We do not warrant that the Site will be uninterrupted, error-free, or
                free of viruses or other harmful components.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the fullest extent permitted by law, Talawa shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of or related
                to your use of the Site.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify and hold harmless Talawa, its officers, directors, employees,
                and volunteers from any claims, damages, or expenses arising from your use of the
                Site or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the
                Province of Ontario, Canada, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective
                immediately upon posting to the Site. Your continued use of the Site after changes
                constitutes acceptance of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold text-primary-black mb-4 mt-8">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
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
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <Link href="/privacy" className="btn-primary">
                Privacy Policy
              </Link>
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
