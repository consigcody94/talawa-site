'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// List of actual gala images that exist
const galaImages = [
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
  '20250308_193250.jpg',
  '20250308_193320.jpg',
  '20250308_193424.jpg',
  '20250308_193839.jpg',
  '20250308_195849.jpg',
  '20250308_195903.jpg',
  '20250308_200048.jpg',
  '20250308_200100.jpg',
  '20250308_202342.jpg',
  '20250308_202958.jpg',
  '20250308_205149.jpg',
  '20250308_205348.jpg',
  '20250308_205442.jpg',
  '20250308_210132.jpg',
  '20250308_212758.jpg',
  '20250308_212800.jpg',
  '20250308_212804.jpg',
  '20250308_213338.jpg',
  '20250308_213745.jpg',
  '20250308_213746.jpg',
  '20250308_220807.jpg',
  '20250308_221738.jpg',
  '20250308_222200.jpg',
  '20250308_222411.jpg',
  '20250308_222415.jpg',
  '20250308_222545.jpg',
  '20250308_222549.jpg',
  '20250308_222628.jpg',
  '20250308_222722.jpg',
  '20250308_223013.jpg',
  '20250308_223015.jpg',
  '20250308_223752.jpg',
  '20250308_223753.jpg',
  '20250308_224356.jpg',
  '20250308_233719.jpg',
  'pxl_20250309_042001444.mp.jpg',
  'pxl_20250309_042004647.jpg',
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
