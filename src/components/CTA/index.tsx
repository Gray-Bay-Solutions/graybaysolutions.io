'use client'

import { motion } from 'framer-motion'
import { IconArrowRight } from '@tabler/icons-react'

export function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
      </div>
      
      {/* Accent shapes */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-50 opacity-50"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-orange-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to transform your business with custom software solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your digital transformation goals. Our team is ready to bring your vision to life.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg flex items-center gap-2 mx-auto"
            >
              Contact Us Now
              <IconArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 