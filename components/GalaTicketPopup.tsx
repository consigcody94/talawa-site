'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle } from 'lucide-react'

interface GalaTicketPopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function GalaTicketPopup({ isOpen, onClose }: GalaTicketPopupProps) {
    const donationUrl = "https://www.canadahelps.org/en/charities/taibu-community-health-centre/"

    const instructions = [
        "Go to the “Donate to this charity” box on the right side of the page",
        "Donation amount: $100 per person",
        "Apply your donation to a fund set up by this charity: Anti-Black Racism",
        "Send a message to this charity: Talawa Youth Development",
        "Click on “Continue with Donation”",
        "Fill in the “Donor and tax information”",
        "Fill in “Payment Information”",
        "Click on “Complete Donation”"
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary-green p-6 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Ticket Purchase Instructions</h2>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <p className="text-gray-600 mb-6">
                                Please follow these steps to purchase your Gala tickets and ensure your donation is correctly attributed to Talawa:
                            </p>

                            <div className="space-y-4 mb-8">
                                {instructions.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary-gold/20 text-primary-green rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-800 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                                <a
                                    href={donationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                    className="px-8 py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-earth-forest transition-colors flex items-center justify-center gap-2"
                                >
                                    I Understand, Proceed to Donation
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
