'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  projectType: z.enum(['web', 'mobile', 'ai', 'cloud', 'other']),
  description: z.string().min(10, 'Please provide more details'),
})

type FormData = z.infer<typeof formSchema>

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Submission failed')

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      console.error('Lead submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl floating-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-gray-700/10 rounded-full blur-3xl floating"></div>
      </div>
      
      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-card p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              </div>
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-4">Start Your Project</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to transform your digital presence? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-orange-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-orange-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Company
              </label>
              <input
                {...register('company')}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-orange-500">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Project Type
              </label>
              <select
                {...register('projectType')}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
              >
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">AI/ML Solution</option>
                <option value="cloud">Cloud Infrastructure</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-orange-500">{errors.projectType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Project Description
              </label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-orange-500">{errors.description.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative px-8 py-3 rounded-lg text-lg overflow-hidden cursor-pointer glow group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 to-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700 group-disabled:from-gray-600 group-disabled:to-gray-700"></div>
                <span className="relative text-white font-semibold">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </span>
              </button>
            </div>

            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                <p>Thank you! We&apos;ll be in touch soon.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                <p>Something went wrong. Please try again.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
      
      {/* Add a footer element if needed */}
      <div className="text-center mt-12 text-gray-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Gray Bay Solutions. All rights reserved.</p>
      </div>
    </section>
  )
} 