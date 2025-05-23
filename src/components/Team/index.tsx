'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  IconBrandLinkedin, 
  IconBrandGithub,
  IconBrandTwitter 
} from '@tabler/icons-react'

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

const team: TeamMember[] = [
  {
    name: "Bailey Rosen",
    role: "Co-Founder/CEO",
    image: "/team/bailey.jpg",
    bio: "Cornell alum focusing on frontend design, algorithms, and data analysis. Expert at creating intuitive interfaces backed by sophisticated automation. Bailey builds effective solutions that solve real business problems.",
    social: {
      linkedin: "https://linkedin.com/in/bailey-rosen",
      github: "https://github.com/bailey-rosen"
    }
  },
  {
    name: "Grayson Crozier",
    role: "Co-Founder/CTO",
    image: "/team/gray.jpg",
    bio: "UCF graduate specializing in backend systems and architecture. With 5+ years delivering complete mobile, web, and AI solutions across diverse industries. Grayson transforms complex requirements into reliable, production-ready implementations.",
    social: {
      linkedin: "https://linkedin.com/in/grayson-crozier",
      github: "https://github.com/grayson-crozier",
      twitter: "https://twitter.com/grayson_crozier"
    }
  },  
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50/70"></div>
      <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Subtle accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver complete, working software solutions. From concept to deployment, our combined expertise allows us to tackle any technical challenge and implement robust systems that drive real business value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-300 text-lg">{member.role}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <IconBrandLinkedin size={28} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <IconBrandGithub size={28} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <IconBrandTwitter size={28} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 