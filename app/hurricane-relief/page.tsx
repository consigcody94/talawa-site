'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  Heart,
  Home,
  BookOpen,
  Users,
  Droplets,
  Package,
  ExternalLink,
  CheckCircle
} from 'lucide-react'
import DonationCard from '@/components/DonationCard'

const impactAreas = [
  {
    icon: Home,
    title: 'Infrastructure Damage',
    description: 'School buildings and facilities severely damaged by hurricane winds and flooding.',
  },
  {
    icon: BookOpen,
    title: 'Learning Materials Lost',
    description: 'Books, supplies, and educational equipment destroyed or water-damaged.',
  },
  {
    icon: Droplets,
    title: 'Water Systems Affected',
    description: 'Clean water access compromised; sanitation facilities need repair.',
  },
  {
    icon: Users,
    title: 'Families Displaced',
    description: 'Many families in the community lost their homes and need support.',
  },
]

const howWeHelp = [
  'Emergency supplies distribution',
  'School rebuilding and repairs',
  'Educational materials replacement',
  'Water and sanitation restoration',
  'Family support programs',
  'Long-term recovery planning',
]

const hurricaneImages = [
  'photo-2025-11-04-13-35-55.jpg',
  'photo-2025-11-04-13-35-56.jpg',
  'photo-2025-11-04-13-35-56_1.jpg',
  'photo-2025-11-04-13-35-56_2.jpg',
  'photo-2025-11-04-13-35-57.jpg',
  'photo-2025-11-04-13-35-57_1.jpg',
  'photo-2025-11-04-13-35-57_2.jpg',
  'photo-2025-11-04-13-35-57_3.jpg',
]

export default function HurricaneReliefPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/disasteritems.jpg"
            alt="Hurricane Relief"
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
            className="inline-flex items-center gap-2 bg-accent-sunset/90 text-white px-4 py-2 rounded-full mb-4"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <AlertTriangle className="w-5 h-5" />
            </motion.div>
            <span className="text-sm font-bold">URGENT APPEAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hurricane Melissa
            <span className="block text-accent-sunset">Relief Fund</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90"
          >
            Wait-A-Bit Basic School and Wait-A-Bit Primary School have been devastated by
            Hurricane Melissa. They need your help to rebuild and recover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.gofundme.com/f/talawa-youth-education-alliance/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
            <Link href="#impact" className="btn-secondary bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Urgent Banner */}
      <section className="bg-accent-sunset text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold">
              Schools are closed. Children cannot learn. Over 500 students are affected.
              Your donation makes a direct impact.
            </p>
            <a
              href="https://www.gofundme.com/f/talawa-youth-education-alliance/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent-sunset font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              Help Now
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              The Impact of Hurricane Melissa
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In November 2025, Hurricane Melissa struck the Wait-A-Bit community in Trelawny, Jamaica,
              causing widespread devastation to our partner schools and the surrounding area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-accent-sunset/10 rounded-xl p-6"
              >
                <div className="bg-accent-sunset/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-accent-sunset" />
                </div>
                <h3 className="font-bold text-primary-black mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos from the Ground */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              On the Ground
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Photos documenting the damage and our relief efforts.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hurricaneImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={`/images/hurricane/${image}`}
                  alt={`Hurricane relief photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-6">
                How Your Donation Helps
              </h2>
              <p className="text-gray-600 mb-6">
                100% of donations to our Hurricane Relief Fund go directly to recovery efforts.
                Here&apos;s how we&apos;re using your support:
              </p>
              <ul className="space-y-3">
                {howWeHelp.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <DonationCard
                title="Hurricane Relief Fund"
                description="Help us rebuild Wait-A-Bit schools and support affected families. Every dollar makes a difference in the recovery."
                showUrgent={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schools Affected */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schools <span className="text-primary-gold">Affected</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Both schools in the Wait-A-Bit community suffered significant damage and need
              immediate support to resume operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-gold/20 p-3 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Wait-A-Bit Basic School</h3>
                  <p className="text-gray-400">Early Childhood Education</p>
                </div>
              </div>
              <p className="text-gray-300">
                Roof damage, flooded classrooms, and destroyed learning materials have
                forced the closure of this vital early childhood education center.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-gold/20 p-3 rounded-lg">
                  <Package className="w-8 h-8 text-primary-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Wait-A-Bit Primary School</h3>
                  <p className="text-gray-400">Primary Education</p>
                </div>
              </div>
              <p className="text-gray-300">
                Significant structural damage to buildings, loss of furniture, and
                compromised electrical and water systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-sunset to-accent-coral text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Dollar Counts
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              The children of Wait-A-Bit are counting on us. Help us rebuild their schools
              and restore their futures. Please donate today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.gofundme.com/f/talawa-youth-education-alliance/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent-sunset font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg inline-flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Donate Now
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg hover:bg-white/30 transition-all duration-300 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
