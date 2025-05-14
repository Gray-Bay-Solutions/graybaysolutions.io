'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBrandGithub, IconChevronDown, IconExternalLink } from '@tabler/icons-react'

interface PortfolioItem {
  title: string
  description: string
  image: string
  tags: string[]
  industry: string
  outcomes: string[]
  link?: string
}

// Replace the await import with a regular import
import projectsData from '../../data/projects.json'

const filters = ["All", "Web", "Mobile", "AI/ML", "Cloud"]
const PROJECTS_PER_PAGE = 6

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([])
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE)

  useEffect(() => {
    // Set the portfolio items from the imported JSON
    setPortfolioItems(projectsData)
    setFilteredItems(projectsData)
  }, [])

  useEffect(() => {
    // Reset visible count when filter changes
    setVisibleCount(PROJECTS_PER_PAGE)
    
    // Filter items when activeFilter changes
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems)
    } else {
      const filtered = portfolioItems.filter(item => 
        item.tags.some(tag => tag.includes(activeFilter) || 
          (activeFilter === "Web" && (tag.includes("Next.js") || tag.includes("React") || tag.includes("HTML"))) ||
          (activeFilter === "Mobile" && tag.includes("Native")) ||
          (activeFilter === "AI/ML" && (tag.includes("AI") || tag.includes("ML") || tag.includes("TensorFlow") || tag.includes("Vision")))
        )
      )
      setFilteredItems(filtered)
    }
  }, [activeFilter, portfolioItems])

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + PROJECTS_PER_PAGE)
  }

  // Only show the number of items specified by visibleCount
  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMoreItems = visibleCount < filteredItems.length

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl floating-slow"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl floating"></div>
      </div>
      
      <div className="container relative z-10">
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
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Delivering innovative solutions across various industries
        </motion.p>

        {/* GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12 glass-effect py-4 rounded-lg"
        >
          <IconBrandGithub size={24} className="text-orange-400" />
          <span className="text-gray-300">
            View our open source projects on{' '}
            <a
              href="https://github.com/gray-bay-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              GitHub
            </a>
          </span>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
            {visibleItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`space-card overflow-hidden rounded-xl group ${item.link ? 'cursor-pointer transition-transform hover:scale-[1.02]' : ''}`}
                onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  {item.link && (
                    <div className="absolute top-4 right-4 bg-gray-900/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <IconExternalLink size={18} className="text-orange-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white flex items-center">
                    {item.title}
                    {item.link && (
                      <IconExternalLink size={18} className="ml-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 mb-2">
                      Industry: <span className="text-orange-400">{item.industry}</span>
                    </p>
                    <div className="space-y-1">
                      {item.outcomes.map((outcome, idx) => (
                        <p key={idx} className="text-sm text-gray-500">
                          • {outcome}
                        </p>
                      ))}
                    </div>
                    {item.link && (
                      <div className="mt-4 pt-2 border-t border-gray-700">
                        <span className="text-sm text-orange-400 flex items-center group-hover:underline">
                          Visit Project <IconExternalLink size={14} className="ml-1" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* See More Button */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleSeeMore}
              className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-orange-400 hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 glass-effect"
            >
              <span>See More Projects</span>
              <IconChevronDown size={20} />
            </button>
          </motion.div>
        )}
        
        {/* Project Count Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-6 text-sm"
        >
          Showing {visibleItems.length} of {filteredItems.length} projects
        </motion.p>
      </div>
    </section>
  )
}