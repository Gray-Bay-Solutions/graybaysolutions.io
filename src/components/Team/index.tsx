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
    name: "Grayson Crozier",
    role: "Chief Technology Officer",
    image: "/team/gray.jpg",
    bio: "15+ years of experience in software architecture and AI development. Previously led engineering at major tech companies.",
    social: {
      linkedin: "https://www.linkedin.com/in/grayson-crozier-1925411a6/",
      github: "https://github.com/grayson40",
      twitter: "https://x.com/graysoncrozier"
    }
  },
  {
    name: "Bailey Rosen",
    role: "Lead Software Architect",
    image: "/team/bailey-rosen.jpg",
    bio: "Cloud architecture expert with a focus on scalable systems. AWS certified solutions architect.",
    social: {
      // linkedin: "https://linkedin.com/in/mrodriguez",
      github: "https://github.com/baileyrosen3"
    }
  }
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
    <section className="py-32 bg-gray-50">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the founders behind Gray Bay Solutions, bringing together decades of experience in software development and cloud architecture.
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-400 text-lg">{member.role}</p>
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