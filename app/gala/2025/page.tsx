'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Users, Heart } from 'lucide-react'
import GalaGallery from '@/components/GalaGallery'

export default function Gala2025Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gala/20250308_193633.jpg"
            alt="Gala 2025 Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container-custom text-center text-white py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/gala"
              className="inline-flex items-center gap-2 text-primary-gold hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gala
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Gala <span className="text-primary-gold">2025</span> Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/90"
          >
            Relive the wonderful moments from our 2025 celebration.
          </motion.p>
        </div>
      </section>

      {/* Event Summary */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Calendar className="w-8 h-8 text-primary-green mx-auto mb-2" />
              <p className="text-gray-600">March 8, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <MapPin className="w-8 h-8 text-primary-green mx-auto mb-2" />
              <p className="text-gray-600">Belmont Event Space</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-primary-green mx-auto mb-2" />
              <p className="text-gray-600">150+ Attendees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Heart className="w-8 h-8 text-primary-green mx-auto mb-2" />
              <p className="text-gray-600">Amazing Night!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Photo Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any photo to view it in full size. 60 photos capturing the magic of the evening.
            </p>
          </motion.div>

          <GalaGallery showAll={true} />
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
              Don&apos;t Miss Gala 2026!
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join us on January 24, 2026 for another unforgettable evening.
            </p>
            <Link href="/gala" className="btn-primary text-lg">
              Get Gala 2026 Tickets
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
