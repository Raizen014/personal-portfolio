// components/ProjectCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  link?: string
}

export default function ProjectCard({ title, description, imageSrc, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="card bg-base-200 w-full max-w-sm shadow-sm"
    >
      <figure className="relative w-full h-52">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {link && (
          <div className="card-actions justify-end">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm">
              View Project
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}
