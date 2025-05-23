'use client'

import { motion } from 'framer-motion'
import { 
  IconDeviceDesktop,
  IconBrain, 
  IconSearch,
  IconCalendar,
  IconUsers
} from '@tabler/icons-react'

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  metrics: string[]
}

const services: Service[] = [
  {
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies that provide exceptional user experiences and drive conversions.",
    icon: <IconDeviceDesktop size={32} />,
    metrics: ["Mobile-Optimized Design", "Performance-Focused"]
  },
  {
    title: "SEO & Digital Marketing",
    description: "Strategic optimization to improve your visibility online and connect with your target audience when they need you most.",
    icon: <IconSearch size={32} />,
    metrics: ["Data-Driven Approach", "Measurable Results"]
  },
  {
    title: "Automated Booking Systems",
    description: "Streamline your appointment scheduling with intelligent booking solutions that integrate with your existing workflow.",
    icon: <IconCalendar size={32} />,
    metrics: ["24/7 Availability", "Seamless Integration"]
  },
  {
    title: "CRM Integration",
    description: "Connect your customer data across platforms to create unified experiences and improve operational efficiency.",
    icon: <IconUsers size={32} />,
    metrics: ["Workflow Automation", "Enhanced Customer Insights"]
  },
  {
    title: "AI-Powered Solutions",
    description: "Intelligent automation and customer service tools that learn from interactions to provide better experiences.",
    icon: <IconBrain size={32} />,
    metrics: ["Personalized Experiences", "Continuous Improvement"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 opacity-70"></div>
      
      {/* Decorative elements matching logo style */}
      <div className="absolute left-0 right-0 h-40 top-0 overflow-hidden opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Digital transformation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-orange-50 text-orange-500 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {service.metrics.map((metric, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 