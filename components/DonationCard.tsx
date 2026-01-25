'use client'

import { motion } from 'framer-motion'
import { Heart, ExternalLink } from 'lucide-react'

interface DonationCardProps {
  title?: string
  description?: string
  showUrgent?: boolean
}

export default function DonationCard({
  title = "Support Our Mission",
  description = "Your donation helps us empower Black children and youth through education in Jamaica.",
  showUrgent = false
}: DonationCardProps) {
  const goFundMeUrl = "https://www.gofundme.com/f/talawa-youth-education-alliance/donate"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto"
    >
      {showUrgent && (
        <div className="bg-accent-sunset text-white text-center py-2 px-4">
          <motion.p
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-semibold text-sm"
          >
            URGENT: Hurricane Relief Needed
          </motion.p>
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-primary-green/10 rounded-full p-4">
            <Heart className="w-8 h-8 text-primary-green" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center text-primary-black mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-center mb-6">
          {description}
        </p>

        <div className="space-y-4">
          {/* Donation Tiers */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['$25', '$50', '$100'].map((amount) => (
              <a
                key={amount}
                href={goFundMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-earth-sand/50 hover:bg-primary-gold/30 text-primary-black font-semibold py-3 rounded-lg text-center transition-colors duration-300"
              >
                {amount}
              </a>
            ))}
          </div>

          {/* Main Donate Button */}
          <a
            href={goFundMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary-gold hover:bg-luxury-gold text-primary-black font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Donate via GoFundMe
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure donation powered by GoFundMe. Tax receipts available for Canadian donors.
        </p>
      </div>

      {/* Bottom accent */}
      <div className="h-2 bg-gradient-to-r from-primary-green via-primary-gold to-primary-green" />
    </motion.div>
  )
}
