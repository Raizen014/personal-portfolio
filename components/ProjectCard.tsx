'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card w-96 bg-white shadow-md rounded-xl overflow-hidden border border-base-200"
    >
      <Image src={'/weather-app.png'} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-accent">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-5 h-5 text-gray-700 hover:text-black transition" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <FaExternalLinkAlt className="w-5 h-5 text-gray-700 hover:text-blue-600 transition" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
