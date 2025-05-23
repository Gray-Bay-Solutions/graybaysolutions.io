'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { IconBriefcase, IconMail } from '@tabler/icons-react'

interface HeroProps {
  headline: string
  subheading: string
  ctaText: string
}

export function Hero({ headline, subheading, ctaText }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Only apply scroll effects on desktop
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
    <div ref={ref} className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden bg-white">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
        
        {/* Subtle metallic wave pattern - matching logo */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 C300,100 600,60 1200,80 L1200,120 L0,120 Z" className="fill-gray-400"></path>
            <path d="M0,40 C300,60 600,20 1200,40 L1200,120 L0,120 Z" className="fill-gray-500 opacity-50"></path>
          </svg>
        </div>
      </div>

      {/* Subtle Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-orange-400/5 blur-3xl"
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-72 h-72 rounded-full bg-gray-300/20 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={isMobile ? {} : { y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 sm:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 pt-0 pb-10 sm:py-0"
        >
          <motion.div
            className="inline-block relative mb-3 sm:mb-6"
            animate={{ 
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative bg-white p-3 sm:p-4 rounded-full shadow-lg">
              <Image
                src="/logo.png"
                alt="Gray Bay Solutions"
                width={120}
                height={120}
                sizes="(max-width: 640px) 100px, 140px"
                className="mx-auto"
                priority
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-3 sm:mb-6 leading-tight px-2 sm:px-0"
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
            className="text-base sm:text-xl md:text-2xl text-gray-600 mb-5 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-2"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg overflow-hidden cursor-pointer focus:ring-2 focus:ring-orange-400 focus:outline-none shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
              aria-label="Contact us to start your project"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 to-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700"></div>
              <span className="relative text-white font-semibold flex items-center justify-center gap-2">
                {ctaText}
                <IconMail size={20} />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              aria-label="View our portfolio"
            >
              View Our Work
              <IconBriefcase size={20} className="text-orange-500" />
            </button>
          </motion.div>
          
          {/* Key action buttons - hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-6 pt-6 sm:pt-8"
            role="navigation"
            aria-label="Quick navigation"
          >
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 mb-2 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="View our services"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <path d="M12 12h.01"></path>
                  <path d="M12 16h.01"></path>
                  <path d="M12 8h.01"></path>
                  <path d="M18.4 10.8A7.5 7.5 0 0 0 16 8l-4 7"></path>
                  <path d="M8.5 8.5A7.5 7.5 0 0 0 8 16l7-4"></path>
                  <path d="M16 16a7.5 7.5 0 0 0-7.5-7.5"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </button>
              <span className="text-sm text-gray-600 font-medium">Services</span>
            </div>
            
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 mb-2 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="View our portfolio"
              >
                <IconBriefcase size={24} className="text-orange-500" />
              </button>
              <span className="text-sm text-gray-600 font-medium">Portfolio</span>
            </div>
            
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('team')}
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 mb-2 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="Meet our team"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </button>
              <span className="text-sm text-gray-600 font-medium">Team</span>
            </div>
            
            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:bg-gray-50 mb-2 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="Contact us"
              >
                <IconMail size={24} className="text-orange-500" />
              </button>
              <span className="text-sm text-gray-600 font-medium">Contact</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
} 