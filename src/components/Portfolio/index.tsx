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
    <section id="portfolio" className="py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gray-50/80"></div>
      <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Delivering innovative solutions across various industries
          </p>
        </motion.div>

        {/* GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10 bg-white py-4 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto"
        >
          <IconBrandGithub size={24} className="text-orange-500" />
          <span className="text-gray-700">
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

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-orange-200 hover:bg-orange-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
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
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${item.link ? 'cursor-pointer hover:translate-y-[-4px]' : ''}`}
                onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  {item.link && (
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <IconExternalLink size={18} className="text-orange-500" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center">
                    {item.title}
                    {item.link && (
                      <IconExternalLink size={18} className="ml-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Industry: <span className="text-orange-500 font-medium">{item.industry}</span>
                    </p>
                    <div className="space-y-1">
                      {item.outcomes.map((outcome, idx) => (
                        <p key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">•</span> {outcome}
                        </p>
                      ))}
                    </div>
                    {item.link && (
                      <div className="mt-4 pt-2 border-t border-gray-100">
                        <span className="text-sm text-orange-500 font-medium flex items-center group-hover:underline">
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
              className="px-8 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-orange-200 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>See More Projects</span>
              <IconChevronDown size={20} className="text-orange-500" />
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