'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  Star,
  BookOpen,
  Globe,
  Sparkles
} from 'lucide-react'
import DonationCard from '@/components/DonationCard'

const stats = [
  { icon: GraduationCap, value: '500+', label: 'Students Supported' },
  { icon: Users, value: '2', label: 'Schools in Jamaica' },
  { icon: Heart, value: '15+', label: 'Years of Impact' },
  { icon: Globe, value: '2', label: 'Countries' },
]

const values = [
  {
    icon: BookOpen,
    title: 'Education First',
    description: 'We believe every child deserves access to quality education regardless of their circumstances.',
  },
  {
    icon: Heart,
    title: 'Community Love',
    description: 'Our work is rooted in love for our community and a commitment to uplifting the next generation.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, inspiring our students to reach their full potential.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/logo.png"
              alt="Talawa Logo"
              width={150}
              height={150}
              className="mx-auto mb-6 rounded-full shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Talawa Youth Development
            <span className="block text-primary-gold">& Educational Alliance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-shadows text-2xl md:text-3xl text-primary-gold mb-6"
          >
            Strong. Bold. Resilient.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90"
          >
            Empowering Black children and youth through education in Jamaica and Canada.
            Supporting Wait-A-Bit Basic School and Wait-A-Bit Primary School.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/donate" className="btn-primary text-lg">
              Donate Now
            </Link>
            <Link href="/about" className="btn-secondary bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg">
              Learn More
            </Link>
          </motion.div>

          {/* Hurricane Relief Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <Link href="/hurricane-relief">
              <div className="inline-flex items-center gap-3 bg-accent-sunset/90 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-accent-sunset transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <span className="font-semibold">URGENT: Hurricane Melissa Relief - Help Now</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-green">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary-gold mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Talawa Youth Development and Educational Alliance is dedicated to empowering Black children
                and youth through education. Based in Canada with deep roots in Jamaica, we support
                <strong> Wait-A-Bit Basic School</strong> and <strong>Wait-A-Bit Primary School</strong>
                in Trelawny, Jamaica.
              </p>
              <div className="bg-earth-sand/30 rounded-xl p-6 mb-6">
                <p className="text-xl font-semibold text-primary-green italic">
                  &ldquo;Every Child Can Learn, Every Child Must Learn&rdquo;
                </p>
                <p className="text-sm text-gray-500 mt-2">- School Motto</p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-earth-forest transition-colors">
                Learn more about our work <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Talawa Mission"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-gold text-primary-black p-4 rounded-xl shadow-lg">
                <p className="font-shadows text-lg">Talawa</p>
                <p className="text-sm font-semibold">Strong. Bold. Resilient.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to education, community, and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Gala Section */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-gold/20 text-primary-gold px-4 py-2 rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">Upcoming Event</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gala <span className="text-primary-gold">2026</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Join us for an unforgettable evening of celebration, community, and giving.
                All proceeds support education programs in Jamaica.
              </p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-3">
                  <span className="text-primary-gold font-semibold">Date:</span>
                  January 24, 2026
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary-gold font-semibold">Time:</span>
                  6:00 PM
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary-gold font-semibold">Location:</span>
                  Belmont Event Space, Etobicoke
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary-gold font-semibold">Tickets:</span>
                  Adults $100 | Children (under 12) $40
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/gala" className="btn-primary">
                  Get Tickets
                </Link>
                <Link href="/gala/2025" className="btn-secondary border border-white/20 hover:bg-white/10">
                  View 2025 Gallery
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="/images/gala/20250308_193633.jpg"
                  alt="Gala 2025"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Highlights from Gala 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="section-padding bg-earth-sand/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Support Our Mission
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous donation helps provide education, supplies, and opportunities
              for children in Jamaica. Every contribution makes a difference.
            </p>
          </motion.div>

          <DonationCard
            title="Make a Donation"
            description="Help us empower the next generation through education. Your support provides school supplies, infrastructure improvements, and scholarship opportunities."
            showUrgent={true}
          />
        </div>
      </section>

      {/* Success Stories / Impact Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through the generous support of our community, we have been able to make
              a lasting difference in the lives of students and families.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/impact/talawapowerpoint_page-0001.jpg"
                  alt="Impact Story 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Educational Support</h3>
              <p className="text-gray-600">
                Providing essential school supplies and learning materials to students
                at Wait-A-Bit schools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/impact/talawapowerpoint_page-0010.jpg"
                  alt="Impact Story 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Infrastructure</h3>
              <p className="text-gray-600">
                Improving school facilities to create better learning environments
                for students and teachers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/impact/talawapowerpoint_page-0020.jpg"
                  alt="Impact Story 3"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-black mb-2">Community Building</h3>
              <p className="text-gray-600">
                Fostering connections between Canadian and Jamaican communities through
                education and cultural exchange.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/impact" className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-earth-forest transition-colors">
              See Full Impact Report <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-earth-forest text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether through donations, volunteering, or spreading the word,
              you can help us empower the next generation of leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary text-lg">
                Donate Now
              </Link>
              <Link href="/apply" className="bg-white text-primary-green font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg">
                Apply for Scholarship
              </Link>
              <Link href="/contact" className="btn-secondary border border-white/30 hover:bg-white/10 text-lg">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
