'use client'

import { motion } from 'framer-motion'
import { FaNodeJs, FaReact, FaFigma, FaPhp } from 'react-icons/fa'
import {
  SiTailwindcss, SiNextdotjs, SiMysql, SiPostgresql
} from 'react-icons/si'

const techStack = [
  { icon: <FaNodeJs />, color: '#339933' },
  { icon: <FaReact />, color: '#61DAFB' },
  { icon: <SiNextdotjs />, color: '#000000' },
  { icon: <SiTailwindcss />, color: '#38BDF8' },
  { icon: <FaFigma />, color: '#F24E1E' },
  { icon: <FaPhp />, color: '#8892BF' },
  { icon: <SiMysql />, color: '#00758F' },
  { icon: <SiPostgresql />, color: '#336791' },
]

export default function TechStack() {
  return (
    <section className="py-16 px-4 md:px-24 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10 text-accent">Technologies</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              className="w-16 h-16 rounded-full bg-base-100 shadow-md hover:scale-110 transition-transform flex items-center justify-center"
              style={{ color: item.color }}
            >
              <div className="text-2xl">{item.icon}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
