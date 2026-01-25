'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gala', label: 'Gala' },
  { href: '/hurricane-relief', label: 'Hurricane Relief' },
  { href: '/donate', label: 'Donate' },
  { href: '/apply', label: 'Apply' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Talawa Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className={`font-bold text-xl hidden sm:block ${
                isScrolled ? 'text-primary-green' : 'text-white'
              }`}>
                Talawa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary-gold ${
                    isScrolled ? 'text-primary-black' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="btn-primary ml-4"
              >
                Support Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-primary-black' : 'bg-white'
                }`}></span>
                <span className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-primary-black' : 'bg-white'
                }`}></span>
                <span className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-primary-black' : 'bg-white'
                }`}></span>
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            links={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  )
}
