'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-primary-green flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <Image
          src="/images/logo.gif"
          alt="Talawa Loading"
          width={200}
          height={200}
          className="rounded-full"
          priority
          unoptimized
        />
      </div>

      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold text-primary-gold mb-2">
          Talawa
        </h1>
        <p className="text-white/80 font-shadows text-xl">
          Strong. Bold. Resilient.
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex gap-2 mt-8">
        <div className="w-3 h-3 bg-primary-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-3 h-3 bg-primary-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-3 h-3 bg-primary-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}
