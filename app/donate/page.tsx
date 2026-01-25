'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  Gift,
  Users,
  BookOpen,
  Building,
  Utensils,
  GraduationCap,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const impactLevels = [
  {
    amount: '$25',
    description: 'Provides school supplies for one student for a term',
    icon: BookOpen,
  },
  {
    amount: '$50',
    description: 'Covers meals for one student for a month',
    icon: Utensils,
  },
  {
    amount: '$100',
    description: 'Sponsors educational materials for a classroom',
    icon: Users,
  },
  {
    amount: '$250',
    description: 'Contributes to infrastructure improvements',
    icon: Building,
  },
  {
    amount: '$500',
    description: 'Funds a scholarship for one student',
    icon: GraduationCap,
  },
  {
    amount: '$1000+',
    description: 'Major infrastructure or program support',
    icon: Gift,
  },
]

const whyDonate = [
  'Direct impact on children\'s education',
  '100% of donations go to programs',
  'Tax receipts available for Canadian donors',
  'Regular updates on how funds are used',
  'Join a community of supporters',
  'Make a lasting difference',
]

export default function DonatePage() {
  const goFundMeUrl = 'https://www.gofundme.com/f/talawa-youth-education-alliance/donate'

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundlandscape.png"
            alt="Donate Background"
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
              <Heart className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Support Our <span className="text-primary-gold">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
          >
            Your generosity empowers Black children and youth through education.
            Every donation makes a real difference in their lives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href={goFundMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              Donate Now <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hurricane Relief Banner */}
      <section className="bg-accent-sunset text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="font-bold text-lg">URGENT:</span>
            <p>Hurricane Melissa Relief Fund - Help us rebuild Wait-A-Bit schools</p>
            <Link
              href="/hurricane-relief"
              className="bg-white text-accent-sunset font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Your Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how your donation directly supports students and schools in Jamaica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactLevels.map((level, index) => (
              <motion.div
                key={level.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <level.icon className="w-6 h-6 text-primary-green" />
                  </div>
                  <div className="text-3xl font-bold text-primary-gold">{level.amount}</div>
                </div>
                <p className="text-gray-600">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-6">
                Why Donate to Talawa?
              </h2>
              <ul className="space-y-4">
                {whyDonate.map((reason, index) => (
                  <motion.li
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Talawa"
                width={400}
                height={400}
                className="mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Donation CTA */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a <span className="text-primary-gold">Difference</span>?
            </h2>
            <p className="text-gray-400 mb-8">
              Your donation is processed securely through GoFundMe. Tax receipts are available
              for Canadian donors upon request.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent-sunset" />
                <h3 className="text-2xl font-bold">Donate via GoFundMe</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Click the button below to make a secure donation through our official
                GoFundMe campaign.
              </p>

              {/* Suggested amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {['$25', '$50', '$100'].map((amount) => (
                  <a
                    key={amount}
                    href={goFundMeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-primary-gold/30 text-white font-semibold py-3 rounded-lg text-center transition-colors"
                  >
                    {amount}
                  </a>
                ))}
              </div>

              <a
                href={goFundMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-gold hover:bg-luxury-gold text-primary-black font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Donate Now
                <ExternalLink className="w-5 h-5" />
              </a>

              <p className="text-xs text-gray-500 mt-4">
                Secure donation powered by GoFundMe
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Other Ways to Help
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can&apos;t donate right now? There are other meaningful ways to support our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Share our mission with your friends, family, and social networks.
              </p>
              <a
                href={goFundMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green font-semibold hover:text-earth-forest transition-colors"
              >
                Share Our GoFundMe
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-primary-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Attend Our Gala</h3>
              <p className="text-gray-600 mb-4">
                Join us at Gala 2026 for an evening of celebration and giving.
              </p>
              <Link
                href="/gala"
                className="text-primary-green font-semibold hover:text-earth-forest transition-colors"
              >
                Get Gala Tickets
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-accent-coral/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Donate your time and skills to support our programs.
              </p>
              <Link
                href="/contact"
                className="text-primary-green font-semibold hover:text-earth-forest transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-earth-forest text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thank You for Your Support
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Together, we can empower the next generation through education.
              Every contribution, big or small, makes a difference.
            </p>
            <a
              href={goFundMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Today
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
