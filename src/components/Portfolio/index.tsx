'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBrandGithub } from '@tabler/icons-react'

interface PortfolioItem {
  title: string
  description: string
  image: string
  tags: string[]
  industry: string
  outcomes: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Complete overhaul of a major retail platform",
    image: "/portfolio/ecommerce.jpg",
    tags: ["Svelte", "TypeScript", "Tailwind"],
    industry: "Retail",
    outcomes: ["150% increase in conversion", "40% faster load times"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with ML predictions",
    image: "/portfolio/analytics.jpg",
    tags: ["Python", "React", "TensorFlow"],
    industry: "Technology",
    outcomes: ["90% prediction accuracy", "$2M cost savings"]
  },
]

const filters = ["All", "Web", "Mobile", "AI/ML", "Cloud"]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Delivering innovative solutions across various industries
        </motion.p>

        {/* GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12 bg-gray-50/50 py-4 rounded-lg"
        >
          <IconBrandGithub size={24} className="text-gray-700" />
          <span className="text-gray-600">
            View our open source projects on{' '}
            <a
              href="https://github.com/gray-bay-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              GitHub
            </a>
          </span>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Industry: {item.industry}
                    </p>
                    <div className="space-y-1">
                      {item.outcomes.map((outcome, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          • {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 