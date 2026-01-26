'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Ticket,
  Music,
  Utensils,
  Gift,
  Heart,
  ExternalLink,
  Mail
} from 'lucide-react'

const highlights = [
  {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Enjoy live performances celebrating Caribbean culture and music.',
  },
  {
    icon: Utensils,
    title: 'Caribbean Cuisine',
    description: 'Savor authentic Jamaican dishes and Canadian favorites.',
  },
  {
    icon: Gift,
    title: 'Silent Auction',
    description: 'Bid on exclusive items and experiences to support our cause.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with community leaders, educators, and fellow supporters.',
  },
]

const ticketInfo = [
  {
    type: 'Adult',
    price: '$100',
    description: 'Full gala experience',
    features: ['Dinner included', 'Entertainment', 'Silent auction access', 'Networking'],
  },
  {
    type: 'Children (under 12)',
    price: '$40',
    description: 'Young supporters welcome',
    features: ['Kids menu', 'Entertainment', 'Fun activities'],
  },
]

export default function GalaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gala/20250308_193633.jpg"
            alt="Gala Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container-custom text-center text-white py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full mb-4"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">February 7, 2026 (New Date!)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Gala <span className="text-primary-gold">2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90"
          >
            Join us for an elegant evening of celebration, community, and giving.
            All proceeds support education programs in Jamaica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#tickets" className="btn-primary text-lg">
              Get Tickets
            </Link>
            <Link href="/gala/2025" className="btn-secondary bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg">
              View 2025 Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-6">
                Event Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-black">Date</h3>
                    <p className="text-gray-600">Saturday, February 7, 2026</p>
                    <p className="text-accent-sunset text-sm font-medium">* Postponed from January 24</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-black">Time</h3>
                    <p className="text-gray-600">6:00 PM - Reception and cocktails</p>
                    <p className="text-gray-600">7:00 PM - Dinner and program</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-black">Location</h3>
                    <p className="text-gray-600">Belmont Event Space</p>
                    <p className="text-gray-600">655 Dixon Road, Etobicoke, Ontario</p>
                    <a
                      href="https://maps.google.com/?q=655+Dixon+Road+Etobicoke+Ontario"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-green hover:text-earth-forest inline-flex items-center gap-1 mt-1"
                    >
                      Get Directions <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-green/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary-black">Dress Code</h3>
                    <p className="text-gray-600">Cocktail / Semi-Formal Attire</p>
                    <p className="text-gray-500 text-sm">Caribbean-inspired colors welcome!</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gala/20250308_201029.jpg"
                  alt="Gala Event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-gold text-primary-black p-4 rounded-xl shadow-lg">
                <p className="font-shadows text-xl">An Evening to Remember</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              What to Expect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              An unforgettable evening of celebration, culture, and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-green/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="text-lg font-bold text-primary-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your <span className="text-primary-gold">Tickets</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure your spot at Gala 2026. All proceeds support education programs
              at Wait-A-Bit schools in Jamaica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ticketInfo.map((ticket, index) => (
              <motion.div
                key={ticket.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Ticket className="w-6 h-6 text-primary-gold" />
                  <h3 className="text-xl font-bold">{ticket.type}</h3>
                </div>
                <div className="text-4xl font-bold text-primary-gold mb-2">{ticket.price}</div>
                <p className="text-gray-400 mb-6">{ticket.description}</p>
                <ul className="space-y-2 mb-6">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <Heart className="w-4 h-4 text-primary-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-400 mb-6">
              To purchase tickets, please contact us at:
            </p>
            <a
              href="mailto:info@talawa.ca?subject=Gala 2026 Tickets"
              className="inline-flex items-center gap-2 btn-primary text-lg"
            >
              <Mail className="w-5 h-5" />
              info@talawa.ca
            </a>
          </motion.div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Memories from Gala 2025
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at the wonderful moments from last year&apos;s celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '20250308_191050.jpg',
              '20250308_192225.jpg',
              '20250308_201013.jpg',
              '20250308_214043.jpg',
            ].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/gala/${image}`}
                  alt={`Gala 2025 preview ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/gala/2025"
              className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-earth-forest transition-colors"
            >
              View Full Gallery <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-earth-forest text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See You at the Gala!
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              February 7, 2026 at Belmont Event Space, Etobicoke
            </p>
            <a
              href="mailto:info@talawa.ca?subject=Gala 2026 Tickets"
              className="btn-primary text-lg"
            >
              Reserve Your Tickets
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
