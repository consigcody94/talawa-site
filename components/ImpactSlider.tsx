'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

// Generate array of impact slide images
const impactSlides = Array.from({ length: 35 }, (_, i) => {
  const num = String(i + 1).padStart(4, '0')
  return `talawapowerpoint_page-${num}.jpg`
})

interface ImpactSliderProps {
  autoPlay?: boolean
  interval?: number
}

export default function ImpactSlider({ autoPlay = true, interval = 5000 }: ImpactSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % impactSlides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, interval])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + impactSlides.length) % impactSlides.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % impactSlides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main slide container */}
      <div className="relative aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden shadow-xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={`/images/impact/${impactSlides[currentIndex]}`}
              alt={`Impact presentation slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* Slide counter */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {impactSlides.length}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 px-2">
        {impactSlides.map((slide, index) => (
          <button
            key={slide}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-12 rounded overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-2 ring-primary-gold scale-105'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={`/images/impact/${slide}`}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
