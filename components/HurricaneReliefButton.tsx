'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { AlertTriangle, X } from 'lucide-react'

export default function HurricaneReliefButton() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          {/* Urgent Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-2 -right-2 bg-white text-accent-sunset text-xs font-bold px-2 py-1 rounded-full shadow-lg"
          >
            URGENT
          </motion.div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -left-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Dismiss"
          >
            <X size={14} className="text-gray-600" />
          </button>

          {/* Main Button */}
          <Link href="/hurricane-relief">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent-sunset text-white px-6 py-4 rounded-full shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <AlertTriangle className="w-6 h-6" />
              </motion.div>
              <div>
                <p className="font-bold text-sm">Hurricane Relief</p>
                <p className="text-xs opacity-90">Donate Now</p>
              </div>
            </motion.div>
          </Link>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent-sunset"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
