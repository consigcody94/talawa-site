'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import DonationCard from '@/components/DonationCard'

export default function GalaPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/background.png"
          alt="Jamaican Flag"
          fill
          className="absolute inset-0 object-cover object-[30%_center] md:object-center"
          priority
        />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ y: 30, scale: 0.8 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-poppins"
            >
              <span className="inline-block bg-gradient-to-r from-primary-gold via-yellow-300 to-primary-gold bg-clip-text text-transparent">
                Talawa Gala 2026
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl mb-8 font-light"
            >
              <span className="font-bold block mb-4">February 7, 2026</span>
              <span className="block text-xl md:text-2xl">Dinner, Dance, and Donations</span>
              <span className="block text-accent-sunset text-lg mt-2">* New Date - Postponed from January 24</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100">
                Join us for another evening of celebration, culture, and community support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center"
            >
              <a href="https://www.canadahelps.org/en/charities/taibu-community-health-centre/" target="_blank" rel="noopener noreferrer" className="block w-full sm:inline-block text-center bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-primary-gold/50">
                Buy Tickets Now
              </a>
              <Link
                href="/gala/2025"
                className="block w-full sm:inline-block text-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl"
              >
                View 2025 Memories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-green/10 to-primary-gold/10 rounded-3xl shadow-2xl p-10 md:p-16 border-2 border-primary-green/20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary-green font-poppins">
                Event Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-base md:text-lg">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">📅</span>
                      <span className="font-bold text-gray-700">Date</span>
                    </div>
                    <p className="text-gray-600 ml-11">Saturday, February 7, 2026</p>
                    <p className="text-accent-sunset ml-11 text-sm">* Postponed from January 24</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🕕</span>
                      <span className="font-bold text-gray-700">Time</span>
                    </div>
                    <p className="text-gray-600 ml-11">6:00 PM - Reception and cocktails</p>
                    <p className="text-gray-600 ml-11">7:00 PM - Dinner and program</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">💰</span>
                      <span className="font-bold text-gray-700">Ticket Pricing</span>
                    </div>
                    <div className="ml-11 space-y-1">
                      <p className="text-gray-600">
                        <span className="font-semibold text-primary-green">Adults:</span> $100 per person
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold text-primary-green">Children (under 12):</span> $40 per person
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">📍</span>
                      <span className="font-bold text-gray-700">Venue</span>
                    </div>
                    <p className="text-gray-600 ml-11">The Belmont Event Space</p>
                    <p className="text-gray-500 ml-11 text-base">655 Dixon Road, Etobicoke, ON M9W 1J3</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">👔</span>
                      <span className="font-bold text-gray-700">Dress Code</span>
                    </div>
                    <p className="text-gray-600 ml-11">Cocktail / Semi-Formal Attire</p>
                    <p className="text-gray-500 ml-11 text-sm">Caribbean-inspired colors welcome!</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🎟️</span>
                      <span className="font-bold text-gray-700">Tax Receipts</span>
                    </div>
                    <p className="text-gray-600 ml-11 text-base">Tickets purchased via donation - eligible for tax receipt</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-primary-gold/20 to-yellow-100/50 rounded-xl border-2 border-primary-gold/40">
                <p className="text-center text-gray-800 mb-4">
                  <span className="font-bold text-primary-green text-lg">Tickets Available Now!</span>
                </p>
                <p className="text-center text-gray-700 mb-6 text-sm">
                  Purchase your tickets early through CanadaHelps and receive a tax receipt for your donation
                </p>
                <div className="flex justify-center">
                  <a href="https://www.canadahelps.org/en/charities/taibu-community-health-centre/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary-green to-earth-forest hover:from-earth-forest hover:to-primary-green text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                    How to Purchase Tickets
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 bg-gradient-to-br from-earth-sand to-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 text-center text-primary-green font-poppins px-4">
              Supporting Education for Black Youth
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-3xl p-6 md:p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-green">
                  Wait-A-Bit Basic School
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Serving early childhood education in the Wait-A-Bit community, this basic school provides a foundation for young learners in a nurturing environment.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Through community support, we&apos;ve helped improve infrastructure, including electrical systems, playground equipment, and essential facilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl p-6 md:p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-green">
                  Wait-A-Bit Primary (All Age) School
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Grade 1 – Grade 6</strong> (ages 6-12 years old)
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 italic text-lg md:text-xl font-semibold text-center py-4 border-y-2 border-primary-green">
                  &quot;Every Child Can Learn<br />Every Child Must Learn&quot;
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Students from all Basic Schools and Infant Schools in the area attend Wait-A-Bit Primary, where they receive quality education and participate in enriching programmes.
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary-green px-4">
                Programmes &amp; Activities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg">Mathematics Week</h4>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">👩🏿‍⚕️</div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg">Career Day</h4>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-3">👧🏿</div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg">Girls&apos; Day</h4>
                  <p className="text-sm text-gray-600 mt-2">Empowering Futures</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-green via-earth-forest to-primary-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-white font-poppins px-4">
              See What You&apos;re Supporting
            </h2>
            <p className="text-lg md:text-xl text-center text-gray-200 mb-12 max-w-3xl mx-auto px-4">
              View highlights from our 2025 Gala and see the amazing impact your support makes
            </p>
            <div className="max-w-4xl mx-auto text-center">
              <Link
                href="/gala/2025"
                className="inline-block bg-gradient-to-r from-primary-gold to-yellow-400 hover:from-yellow-400 hover:to-primary-gold text-primary-black px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-primary-gold/50"
              >
                View 2025 Gala Photo Gallery &amp; Impact Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary-green text-center font-poppins px-4">
                Support Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center mb-12 px-4">
                Your donation directly supports students at Wait-A-Bit Basic and Primary Schools, providing them with the resources they need to succeed.
              </p>
              <DonationCard
                title="Support Our Students"
                description="Every contribution brings us closer to our goal"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold via-yellow-400 to-primary-gold" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto text-center text-primary-black">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-poppins px-4">
                Join Us in <span className="bg-gradient-to-r from-primary-green to-earth-forest bg-clip-text text-transparent">Making a Difference</span>
              </h2>
              <p className="text-lg md:text-xl mb-12 text-gray-800 max-w-3xl mx-auto">
                Purchase your tickets today and be part of an incredible evening that celebrates community and supports education for Black youth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-4xl mx-auto">
                <a href="https://www.canadahelps.org/en/charities/taibu-community-health-centre/" target="_blank" rel="noopener noreferrer" className="block w-full sm:inline-block text-center bg-primary-green hover:bg-earth-forest text-white px-8 py-4 rounded-full font-bold text-lg sm:text-xl transition-all shadow-2xl hover:shadow-xl">
                  Buy Tickets
                </a>
                <Link
                  href="/donate"
                  className="block w-full sm:inline-block text-center bg-white hover:bg-gray-100 text-primary-green border-2 border-primary-green px-8 py-4 rounded-full font-bold text-lg sm:text-xl transition-all shadow-xl"
                >
                  Make a Donation
                </Link>
                <Link
                  href="/about"
                  className="block w-full sm:inline-block text-center bg-white hover:bg-gray-100 text-primary-green border-2 border-primary-green px-8 py-4 rounded-full font-bold text-lg sm:text-xl transition-all shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
