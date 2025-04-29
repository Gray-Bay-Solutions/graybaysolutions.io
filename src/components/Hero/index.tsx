'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { IconBrandGithub } from '@tabler/icons-react'

interface HeroProps {
  headline: string
  subheading: string
  ctaText: string
}

export function Hero({ headline, subheading, ctaText }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Digital Technology Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Animated Particles or Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              {headline.split(' ')[0]}{' '}
            </span>
            {headline.split(' ').slice(1).join(' ')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 rounded-lg text-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 to-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700"></div>
              <span className="relative text-white font-semibold">
                {ctaText}
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 rounded-lg text-lg text-white border border-white/30 hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2"
            >
              View Our Work
              <IconBrandGithub size={20} className="opacity-70" />
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-20 top-1/4 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-20 bottom-1/4 w-40 h-40 bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => scrollToSection('services')}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div 
            className="w-1 h-1 rounded-full bg-white"
            animate={{ 
              y: [0, 16, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  )
} 