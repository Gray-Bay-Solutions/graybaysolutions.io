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
    metrics: ["99% Uptime", "50+ Projects Delivered"]
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
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        
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
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.metrics && (
                <div className="border-t pt-4">
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
    </section>
  )
} 