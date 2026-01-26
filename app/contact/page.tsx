'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Heart
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@talawa.ca',
    link: 'mailto:info@talawa.ca',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Canada & Jamaica',
    link: null,
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 48 hours',
    link: null,
  },
]

const faqItems = [
  {
    question: 'How can I donate?',
    answer: 'You can donate through our GoFundMe page. Click the Donate button in the navigation or visit our Donate page.',
  },
  {
    question: 'How are donations used?',
    answer: '100% of donations go directly to supporting education programs at Wait-A-Bit schools in Jamaica.',
  },
  {
    question: 'Can I get a tax receipt?',
    answer: 'Yes, tax receipts are available for Canadian donors upon request. Please contact us with your donation details.',
  },
  {
    question: 'How can I volunteer?',
    answer: 'We welcome volunteers! Please fill out the contact form below or email us at info@talawa.ca to learn about volunteer opportunities.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <>
      {/* Hidden form for Netlify to detect */}
      <form name="contact" netlify-honeypot="bot-field" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundlandscape.png"
            alt="Contact Background"
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
              <MessageSquare className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Contact <span className="text-primary-gold">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/90"
          >
            Have questions or want to get involved? We would love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-primary-green/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-semibold text-primary-black mb-1">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-primary-green hover:text-earth-forest transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                Send Us a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-green/10 border border-primary-green/20 rounded-lg p-4 mb-6 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                  <p className="text-primary-green">Thank you for your message! We will get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                >
                  <p className="text-red-600">Something went wrong. Please try again or email us directly.</p>
                </motion.div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="donation">Donation Question</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="scholarship">Scholarship Information</option>
                      <option value="gala">Gala Tickets</option>
                      <option value="hurricane">Hurricane Relief</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary-black mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-md"
                  >
                    <h3 className="font-semibold text-primary-black mb-2">{item.question}</h3>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-primary-green/10 rounded-lg p-6">
                <h3 className="font-semibold text-primary-black mb-2">
                  Can&apos;t find what you&apos;re looking for?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Email us directly at{' '}
                  <a href="mailto:info@talawa.ca" className="text-primary-green hover:underline">
                    info@talawa.ca
                  </a>
                </p>
                <Link href="/donate" className="btn-primary inline-flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Support Our Mission
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make a <span className="text-primary-gold">Difference</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our community of supporters helping empower Black children and youth through education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary">
                Donate Now
              </Link>
              <Link href="/apply" className="btn-secondary border border-white/20 hover:bg-white/10">
                Apply for Scholarship
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
