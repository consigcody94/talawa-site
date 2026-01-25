'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  GraduationCap,
  FileText,
  Calendar,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Send
} from 'lucide-react'

const eligibilityCriteria = [
  'Student of Jamaican or Caribbean heritage',
  'Enrolled or planning to enroll in post-secondary education',
  'Demonstrated financial need',
  'Strong academic record or improvement',
  'Community involvement or leadership',
  'Clear educational and career goals',
]

const scholarshipTypes = [
  {
    name: 'Academic Excellence Award',
    amount: '$1,000 - $2,500',
    description: 'For students with outstanding academic achievement.',
  },
  {
    name: 'Community Leadership Award',
    amount: '$1,000 - $2,000',
    description: 'For students demonstrating exceptional community service.',
  },
  {
    name: 'Financial Need Award',
    amount: '$500 - $1,500',
    description: 'For students with demonstrated financial need.',
  },
]

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    school: '',
    program: '',
    year: '',
    gpa: '',
    essay: '',
    financialNeed: '',
    communityInvolvement: '',
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData)
    setSubmitStatus('success')
    setIsSubmitting(false)
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-4 text-center"
        >
          <div className="bg-primary-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary-green" />
          </div>
          <h2 className="text-2xl font-bold text-primary-black mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying for a Talawa scholarship. We will review your application
            and contact you within 4-6 weeks.
          </p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundlandscape.png"
            alt="Apply Background"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container-custom text-center text-white py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="bg-primary-gold/20 p-4 rounded-full">
              <GraduationCap className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Apply for a <span className="text-primary-gold">Scholarship</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/90"
          >
            Talawa offers scholarships to students of Jamaican and Caribbean heritage
            pursuing post-secondary education.
          </motion.p>
        </div>
      </section>

      {/* Scholarship Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary-green" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <motion.li
                    key={criteria}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{criteria}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Scholarship Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary-green" />
                Scholarship Types
              </h2>
              <div className="space-y-4">
                {scholarshipTypes.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-primary-black">{scholarship.name}</h3>
                      <span className="text-primary-gold font-bold">{scholarship.amount}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{scholarship.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Scholarship Application Form
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please fill out all required fields. Applications are reviewed on a rolling basis.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
          >
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-black mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-green" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-black mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-green" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
              </div>
            </div>

            {/* Education Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-black mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-green" />
                Education Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School/Institution *
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Program/Major *
                  </label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GPA (if available)
                  </label>
                  <input
                    type="text"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    placeholder="e.g., 3.5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Essay Questions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-black mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-green" />
                Essay Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you deserve this scholarship? (250-500 words) *
                  </label>
                  <textarea
                    name="essay"
                    value={formData.essay}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    placeholder="Tell us about your goals, challenges, and how this scholarship would help you..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your financial need *
                  </label>
                  <textarea
                    name="financialNeed"
                    value={formData.financialNeed}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    placeholder="Explain your financial situation and how this scholarship would support your education..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your community involvement *
                  </label>
                  <textarea
                    name="communityInvolvement"
                    value={formData.communityInvolvement}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    placeholder="Tell us about your volunteer work, leadership roles, or community activities..."
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mb-8">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I certify that all information provided is accurate and complete. I understand that
                  false information may result in disqualification. I agree to the{' '}
                  <Link href="/terms" className="text-primary-green hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-primary-green hover:underline">
                    Privacy Policy
                  </Link>
                  . *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Questions? Contact us at{' '}
              <a href="mailto:info@talawa.ca" className="text-primary-green hover:underline">
                info@talawa.ca
              </a>
            </p>
          </motion.form>
        </div>
      </section>
    </>
  )
}
