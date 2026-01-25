'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  TrendingUp,
  Users,
  GraduationCap,
  Heart,
  BookOpen,
  Building,
  ArrowRight
} from 'lucide-react'
import ImpactSlider from '@/components/ImpactSlider'

const impactStats = [
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Students Supported',
    description: 'Children receiving educational support',
  },
  {
    icon: BookOpen,
    value: '2',
    label: 'Schools Served',
    description: 'Wait-A-Bit Basic and Primary Schools',
  },
  {
    icon: Users,
    value: '15+',
    label: 'Years of Impact',
    description: 'Dedicated to education since 2008',
  },
  {
    icon: Heart,
    value: '1000+',
    label: 'Lives Touched',
    description: 'Students, families, and community members',
  },
]

const achievements = [
  {
    title: 'Educational Resources',
    description: 'Provided textbooks, school supplies, and learning materials to hundreds of students.',
    icon: BookOpen,
  },
  {
    title: 'Infrastructure Improvements',
    description: 'Funded repairs, renovations, and new facilities at both schools.',
    icon: Building,
  },
  {
    title: 'Scholarship Programs',
    description: 'Supported students pursuing higher education through our scholarship program.',
    icon: GraduationCap,
  },
  {
    title: 'Community Development',
    description: 'Built stronger connections between Canadian and Jamaican communities.',
    icon: Users,
  },
]

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundlandscape.png"
            alt="Impact Background"
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
              <TrendingUp className="w-10 h-10 text-primary-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-primary-gold">Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-white/90"
          >
            See how your support is transforming lives and communities through education.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary-green">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary-gold" />
                <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Presentation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Impact Presentation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our impact through this comprehensive presentation showcasing
              our work with Wait-A-Bit schools in Jamaica.
            </p>
          </motion.div>

          <ImpactSlider autoPlay={true} interval={6000} />
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Key Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through the generous support of our donors and volunteers, we have
              accomplished incredible things.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="bg-primary-green/10 p-3 rounded-lg flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-black mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="section-padding bg-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Image
              src="/images/logo.png"
              alt="Talawa Logo"
              width={100}
              height={100}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              &ldquo;Every Child Can Learn, Every Child Must Learn&rdquo;
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              This motto guides everything we do at Wait-A-Bit Basic School and
              Wait-A-Bit Primary School in Trelawny, Jamaica.
            </p>
            <p className="font-shadows text-2xl text-primary-gold">
              Strong. Bold. Resilient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-6">
                Looking Forward
              </h2>
              <p className="text-gray-600 mb-4">
                Our work continues as we respond to new challenges and opportunities.
                With Hurricane Melissa&apos;s devastating impact on our partner schools,
                our mission is more important than ever.
              </p>
              <p className="text-gray-600 mb-6">
                Your continued support helps us rebuild, recover, and continue our
                mission of empowering children through education.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/hurricane-relief" className="btn-primary inline-flex items-center gap-2">
                  Hurricane Relief <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/donate" className="btn-secondary">
                  Donate Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/impact/talawapowerpoint_page-0005.jpg"
                  alt="Impact 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/impact/talawapowerpoint_page-0015.jpg"
                  alt="Impact 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/impact/talawapowerpoint_page-0025.jpg"
                  alt="Impact 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/impact/talawapowerpoint_page-0030.jpg"
                  alt="Impact 4"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
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
              Be Part of Our Impact
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join us in making a lasting difference in the lives of children and communities.
              Every contribution counts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-primary text-lg">
                Donate Now
              </Link>
              <Link href="/gala" className="bg-white text-primary-green font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg">
                Join Gala 2026
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
