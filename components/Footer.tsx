'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Heart } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gala', label: 'Gala 2026' },
  { href: '/hurricane-relief', label: 'Hurricane Relief' },
  { href: '/donate', label: 'Donate' },
  { href: '/apply', label: 'Apply for Scholarship' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Talawa Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="font-bold text-2xl text-primary-gold">Talawa</span>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Talawa Youth Development and Educational Alliance - Empowering Black children and youth through education in Jamaica and Canada.
            </p>
            <p className="font-shadows text-primary-gold text-xl">
              Strong. Bold. Resilient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:info@talawa.ca"
                    className="text-white hover:text-primary-gold transition-colors"
                  >
                    info@talawa.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Canada & Jamaica</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-gold">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-primary-gold text-primary-black font-semibold py-3 px-6 rounded-lg hover:bg-luxury-gold transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Talawa Youth Development and Educational Alliance. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed by{' '}
              <a
                href="https://www.sentinelowl.org/web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-gold hover:text-luxury-gold transition-colors"
              >
                Sentinel Owl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
