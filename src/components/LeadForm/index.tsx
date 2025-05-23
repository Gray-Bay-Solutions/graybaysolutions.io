'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconSend, IconCheck, IconX } from '@tabler/icons-react'

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: ''
  })
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      setFormState('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        description: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormState('error')
      setErrorMessage('There was an error submitting your request. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Background elements that match logo style */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 C300,100 600,60 1200,80 L1200,120 L0,120 Z" className="fill-gray-400"></path>
          </svg>
        </div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Start Your Project</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your digital transformation needs and we&apos;ll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-xl max-w-3xl mx-auto"
        >
          {formState === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <IconCheck size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your project details and will be in touch shortly.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors shadow-md hover:shadow-lg"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Your name"
                    disabled={formState === 'submitting'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="your@email.com"
                    disabled={formState === 'submitting'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="Your company"
                    disabled={formState === 'submitting'}
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-gray-700 mb-2 font-medium">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    disabled={formState === 'submitting'}
                  >
                    <option value="">Select a project type</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Solution</option>
                    <option value="cloud">Cloud Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-gray-700 mb-2 font-medium">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Tell us about your project and requirements"
                  disabled={formState === 'submitting'}
                ></textarea>
              </div>
              
              {formState === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                  <IconX size={20} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg text-white font-medium flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white shadow-md hover:shadow-lg disabled:opacity-70"
                >
                  {formState === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Request <IconSend size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
} 