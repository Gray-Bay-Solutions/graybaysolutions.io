'use client'

import { motion } from 'framer-motion'
import { 
  IconDeviceDesktop,
  IconBrain, 
  IconRocket,
  IconChartBar
} from '@tabler/icons-react'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  metrics?: string[]
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technology to solve your unique business challenges.",
    icon: <IconDeviceDesktop size={32} />,
    metrics: ["99% Uptime", "20+ Projects Delivered"]
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights.",
    icon: <IconBrain size={32} />,
    metrics: ["30% Cost Reduction", "85% Accuracy"]
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with comprehensive digital solutions and strategies.",
    icon: <IconRocket size={32} />,
    metrics: ["40% Efficiency Increase", "ROI within 6 months"]
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights with our advanced analytics solutions.",
    icon: <IconChartBar size={32} />,
    metrics: ["100TB+ Data Processed", "95% Client Satisfaction"]
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl floating-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-700/10 rounded-full blur-3xl floating"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Innovative solutions tailored to transform your digital presence
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-card p-6 backdrop-blur-sm hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="text-orange-500 mb-4 bg-gray-800/80 p-3 rounded-xl w-fit">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              {service.metrics && (
                <div className="border-t border-gray-700 pt-4">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="text-sm text-gray-500 mb-1">
                      {metric}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Subtle Section Divider */}
      <div className="section-divider mt-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-800 opacity-70"></path>
        </svg>
      </div>
    </section>
  )
} 