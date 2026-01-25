'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] bg-primary-green"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Talawa Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-white">Talawa</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-primary-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center items-center gap-6 p-4">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="text-2xl font-semibold text-white hover:text-primary-gold transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: links.length * 0.1 }}
          >
            <Link
              href="/donate"
              onClick={onClose}
              className="btn-primary text-lg mt-4"
            >
              Support Us
            </Link>
          </motion.div>
        </nav>

        {/* Footer */}
        <div className="p-4 text-center text-white/60 text-sm">
          <p>Strong. Bold. Resilient.</p>
        </div>
      </div>
    </motion.div>
  )
}
