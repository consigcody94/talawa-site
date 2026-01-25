'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  Target,
  Eye,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react'

const timeline = [
  {
    year: '2008',
    title: 'Foundation',
    description: 'Talawa Youth Development and Educational Alliance was founded with a mission to support education in Jamaica.',
  },
  {
    year: '2010',
    title: 'First Partnership',
    description: 'Established partnership with Wait-A-Bit Basic School in Trelawny, Jamaica.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Extended support to Wait-A-Bit Primary School, doubling our impact.',
  },
  {
    year: '2020',
    title: 'First Annual Gala',
    description: 'Launched our annual fundraising gala, bringing the community together.',
  },
  {
    year: '2025',
    title: 'Hurricane Relief',
    description: 'Responded to Hurricane Melissa, providing emergency support and rebuilding assistance.',
  },
]

const team = [
  {
    name: 'Community Leaders',
    role: 'Board Members',
    description: 'Dedicated volunteers who guide our mission and strategic direction.',
  },
  {
    name: 'Educators',
    role: 'Advisory Council',
    description: 'Teachers and education professionals who ensure our programs meet real needs.',
  },
  {
    name: 'Volunteers',
    role: 'Support Team',
    description: 'Passionate individuals who donate their time and skills to our cause.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundlandscape.png"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container-custom text-center text-white py-20 pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About <span className="text-primary-gold">Talawa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Talawa Youth Development and Educational Alliance - A Canadian-Jamaican charity
            dedicated to empowering Black children and youth through education.
          </motion.p>
        </div>
      </section>

      {/* What is Talawa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
                What Does Talawa Mean?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>&ldquo;Talawa&rdquo;</strong> is a word from Jamaican Patwa that embodies the spirit
                of our organization and the children we serve.
              </p>
              <div className="bg-primary-green/10 rounded-xl p-6 mb-6">
                <p className="font-shadows text-3xl text-primary-green mb-2">
                  Strong. Bold. Resilient.
                </p>
                <p className="text-gray-600">
                  These three words capture the essence of what Talawa means and what we strive
                  to instill in every child we support.
                </p>
              </div>
              <p className="text-gray-600">
                Our name reflects our belief that with the right support and opportunities,
                every child can overcome challenges and achieve greatness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Talawa Logo"
                width={400}
                height={400}
                className="mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower Black children and youth through education, providing them with the
                resources, support, and opportunities they need to thrive academically and personally.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="bg-primary-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where every child has access to quality education and the opportunity
                to reach their full potential, regardless of their background or circumstances.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="bg-accent-coral/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent-coral" />
              </div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Our Values</h3>
              <p className="text-gray-600">
                Education, Community, Excellence, Compassion, and Resilience guide everything
                we do. We believe in the transformative power of learning and love.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schools We Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Schools We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work focuses on two schools in the Wait-A-Bit community of Trelawny, Jamaica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-earth-sand/30 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-green/10 p-3 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-black">Wait-A-Bit Basic School</h3>
                  <p className="text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Trelawny, Jamaica
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Serving early childhood education, the Basic School provides foundational learning
                for young children in the community, preparing them for primary school.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-primary-green font-semibold italic">
                  &ldquo;Every Child Can Learn, Every Child Must Learn&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-earth-sand/30 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-green/10 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-black">Wait-A-Bit Primary School</h3>
                  <p className="text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Trelawny, Jamaica
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The Primary School continues the educational journey, providing students with
                the knowledge and skills they need for secondary education and beyond.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-primary-green font-semibold italic">
                  &ldquo;Every Child Can Learn, Every Child Must Learn&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary-gold">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From our humble beginnings to today, we have been committed to making
              a lasting impact on education in Jamaica.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-gold/30 transform md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-gold rounded-full transform -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary-gold" />
                    <span className="text-primary-gold font-bold text-xl">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talawa is powered by dedicated volunteers and community leaders who share
              our passion for education and empowerment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-green to-earth-forest w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-black mb-1">{member.name}</h3>
                <p className="text-primary-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
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
              Join Our Mission
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Together, we can make a lasting difference in the lives of children and communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary text-lg">
                Donate Now
              </Link>
              <Link href="/contact" className="bg-white text-primary-green font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
