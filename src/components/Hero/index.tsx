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
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden palm-bg">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Stars/Particles Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black"></div>
        
        {/* Sunset/Ocean Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-orange-500/30 to-transparent"></div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="text-gray-900 opacity-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="text-gray-800 opacity-30">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/5 blur-3xl floating-slow"
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-gray-700/30 to-gray-800/10 blur-3xl floating"
        />
        <motion.div
          className="absolute top-1/2 left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-orange-400/10 to-orange-500/5 blur-2xl floating-delayed"
        />
        
        {/* Palm Tree Silhouette */}
        <div className="absolute bottom-0 right-[10%] h-64 w-64 opacity-30">
          <Image
            src="/palm-silhouette.png"
            alt="Palm Tree"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="inline-block relative mb-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-orange-500/20 blur-3xl"></div>
            <motion.div 
              className="relative inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/logo.png"
                alt="Gray Bay Solutions"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
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
              className="group relative px-8 py-4 rounded-lg text-lg overflow-hidden cursor-pointer glow"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 to-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700"></div>
              <span className="relative text-white font-semibold">
                {ctaText}
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 rounded-lg text-lg text-orange-400 border border-orange-500/30 hover:bg-gray-800/50 transition-colors cursor-pointer flex items-center gap-2 glass-effect"
            >
              View Our Work
              <IconBrandGithub size={20} className="opacity-70" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
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
        <div className="w-6 h-10 rounded-full border-2 border-orange-500/30 flex justify-center p-2">
          <motion.div 
            className="w-1 h-1 rounded-full bg-orange-500"
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