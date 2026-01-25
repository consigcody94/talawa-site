'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// List of gala images
const galaImages = [
  '2025-03-08 23_28_43.795-0500.jpg',
  '20250308_190353.jpg',
  '20250308_190355.jpg',
  '20250308_190406.jpg',
  '20250308_190602.jpg',
  '20250308_190628.jpg',
  '20250308_190708.jpg',
  '20250308_191050.jpg',
  '20250308_191322.jpg',
  '20250308_191355.jpg',
  '20250308_191533.jpg',
  '20250308_191620.jpg',
  '20250308_192225.jpg',
  '20250308_192313.jpg',
  '20250308_193033.jpg',
  '20250308_193049.jpg',
  '20250308_193202(0).jpg',
  '20250308_193250.jpg',
  '20250308_193320.jpg',
  '20250308_193424.jpg',
  '20250308_193450(0).jpg',
  '20250308_193633.jpg',
  '20250308_193659.jpg',
  '20250308_195024.jpg',
  '20250308_195027.jpg',
  '20250308_195203.jpg',
  '20250308_195209.jpg',
  '20250308_195225.jpg',
  '20250308_200105.jpg',
  '20250308_200109.jpg',
  '20250308_200206.jpg',
  '20250308_200528.jpg',
  '20250308_200617.jpg',
  '20250308_201013.jpg',
  '20250308_201020.jpg',
  '20250308_201029.jpg',
  '20250308_201213.jpg',
  '20250308_201433.jpg',
  '20250308_201545.jpg',
  '20250308_201603.jpg',
  '20250308_201901.jpg',
  '20250308_203137.jpg',
  '20250308_203337.jpg',
  '20250308_203414.jpg',
  '20250308_210121.jpg',
  '20250308_210125.jpg',
  '20250308_211340.jpg',
  '20250308_211350.jpg',
  '20250308_211456.jpg',
  '20250308_213256.jpg',
  '20250308_213512.jpg',
  '20250308_214043.jpg',
  '20250308_214358.jpg',
  '20250308_214550.jpg',
  '20250308_214757.jpg',
  '20250308_215140.jpg',
  '20250308_220010.jpg',
  '20250308_221128.jpg',
  '20250308_221820.jpg',
  '20250308_222056.jpg',
]

interface GalaGalleryProps {
  showAll?: boolean
  maxImages?: number
}

export default function GalaGallery({ showAll = false, maxImages = 12 }: GalaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const displayImages = showAll ? galaImages : galaImages.slice(0, maxImages)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? displayImages.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === displayImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={`/images/gala/${image}`}
              alt={`Gala 2025 photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary-gold transition-colors z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-white hover:text-primary-gold transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/gala/${displayImages[selectedIndex]}`}
                alt={`Gala 2025 photo ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-white hover:text-primary-gold transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
