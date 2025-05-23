'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconMenu2, IconX, IconArrowRight } from '@tabler/icons-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const servicesRef = useRef<HTMLElement | null>(null)
  
  useEffect(() => {
    // Get reference to services section
    servicesRef.current = document.getElementById('services')
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // For mobile: Show navbar after scrolling to services section
      if (window.innerWidth < 768) {
        if (servicesRef.current) {
          const servicesPosition = servicesRef.current.getBoundingClientRect().top
          setShowNavbar(servicesPosition <= 0 || window.scrollY > 100)
        }
      } else {
        setShowNavbar(true) // Always show on desktop
      }
    }
    
    // Initial state - hide on mobile, show on desktop
    setShowNavbar(window.innerWidth >= 768)
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-2 shadow-md' 
            : 'bg-transparent py-4'
        } ${!showNavbar ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Gray Bay Solutions" 
              width={isScrolled ? 40 : 50} 
              height={isScrolled ? 40 : 50}
              className="transition-all duration-300"
            />
            <span className={`ml-2 font-semibold text-lg ${isScrolled ? 'text-gray-800' : 'text-gray-700'}`}>
              Gray Bay Solutions
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className={`transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg transition-shadow"
            >
              Contact Us
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu2 size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <Image src="/logo.png" alt="Gray Bay Solutions" width={40} height={40} />
                <span className="ml-2 font-semibold text-gray-800">Gray Bay Solutions</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-700"
                aria-label="Close menu"
              >
                <IconX size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg text-gray-700"
              >
                Services
                <IconArrowRight size={18} className="text-orange-500" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg text-gray-700"
              >
                Our Work
                <IconArrowRight size={18} className="text-orange-500" />
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg text-gray-700"
              >
                Team
                <IconArrowRight size={18} className="text-orange-500" />
              </button>
            </nav>
            
            <div className="mt-auto p-4 border-t">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center font-medium hover:shadow-lg transition-shadow"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Quick Action Button (Fixed) */}
      <div className={`fixed bottom-6 right-6 z-40 md:hidden transition-opacity duration-300 ${showNavbar ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={() => scrollToSection('contact')}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Contact us"
        >
          <IconArrowRight size={24} />
        </button>
      </div>
    </>
  )
} 