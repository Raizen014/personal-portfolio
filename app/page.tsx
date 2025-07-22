'use client';

import Image from "next/image";
import { motion, easeIn } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import TechStack from "@/components/TechStack";
import ProjectCard from '@/components/ProjectCard'
import emailjs from 'emailjs-com'
import ContactForm from '@/components/ContactForm'

const projects = [
  {
    title: "Weather App",
    description: "A modern weather app using OpenWeather API and Next.js.",
    imageSrc: "/weather-app.png",
    link: "https://weather-app-chi-two-27.vercel.app/",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio built with Tailwind, DaisyUI, and Framer Motion.",
    imageSrc: "/portfolio.png",
    link: "https://your-portfolio.vercel.app",
  },
  {
    title: "New Cool App",
    description: "An AI-powered productivity tool built with Next.js and OpenAI API.",
    imageSrc: "/ai-app.png",
    link: "https://your-ai-app.vercel.app",
  },
  {
    title: "New Cool App",
    description: "An AI-powered productivity tool built with Next.js and OpenAI API.",
    imageSrc: "/ai-app.png",
    link: "https://your-ai-app.vercel.app",
  },
  // Add more here!
]

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault()
  emailjs.sendForm(
    'service_mu039io',
    'template_tix9zqt',
    e.target as HTMLFormElement,
    'HcEfDTyVokSt7MuQo'
  )
    .then(() => alert('Message sent!'))
    .catch((error) => console.error(error))
}

export default function Home() {
  return (
    <section>
      {/* ===== Hero Section ===== */}
      <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row-reverse items-center py-24 md:justify-center bg-base-200 px-6 md:px-24 gap-12 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl z-0" />

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center mt-16 md:mt-0 text-start z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Hi, I'm <span className="text-accent">Aeron Garcia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-justify leading-relaxed mb-6 max-w-xl"
        >
          An IT graduate with a growing interest in <strong>UI/UX design</strong> and <strong>front-end</strong> development.
          I have a solid understanding of design fundamentals and am currently sharpening my skills
          in Figma, HTML, CSS, and JavaScript through hands-on practice. I'm passionate about creating
          clean, simple, and user-friendly interfaces — and I'm excited to continue learning and growing in this field.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn btn-accent">View My Work</a>
          <a href="#about" className="btn btn-outline">More About Me</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-4 mt-6"
        >
          <a
            href="https://www.facebook.com/norea.aicrag.3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebook className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/aerongarciaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/aerongarciaaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </div>

      {/* ===== About Section ===== */}
      <div id="about" className="min-h-screen flex justify-center py-20 md:p-24 bg-base-100 gap-10">
        <div className="w-[70%] flex flex-col  items-center md:items-start">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center md:hidden w-full mb-6"
          >
            <Image
              src="/home.png"
              width={400}
              height={300}
              alt="Aeron Garcia"
              className="rounded-xl shadow-xl object-cover w-[70%] sm:w-[60%] md:w-[80%] max-w-xs md:max-w-sm"
            />
          </motion.div>
          <motion.p 
            className="text-xs md:text-base leading-relaxed text-justify text-base-content mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >

            I'm a detail-oriented IT graduate with a focus on UI/UX design and front-end development.
            I have a solid foundation in design principles, accessibility, and responsive design,
            which I continue to strengthen through self-led projects and ongoing learning.
            <br /><br />
            Using tools like Figma, HTML, CSS, and JavaScript, I craft intuitive and engaging user experiences.
            I aim to design clean, user-focused interfaces that balance functionality with visual clarity.
            <br /><br />
            I'm seeking opportunities to apply my skills in a collaborative environment where I can grow
            as a designer and contribute to meaningful projects.
          </motion.p>
          
          <motion.a
            href="/Garcia-Aeron-Resume.pdf"
            download
            className="btn btn-outline mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Download CV
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: easeIn }}
          viewport={{ once: true }}
          className="w-full hidden md:w-1/2 md:flex justify-center z-10"
        >
          <Image
            src="/home.png"
            width={400}
            height={300}
            alt="Aeron Garcia"
            className="rounded-xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
      <div id="technologies" className="bg-base-200">
        <TechStack />
      </div>


      {/* ===== Projects Section ===== */}
       <div id="projects" className="py-24 px-6 bg-base-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-accent">Projects</h2>
        <p className="text-lg text-gray-600 mb-8">
          Soon to be added: personal UI/UX case studies and web apps!
        </p>

        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <motion.div
            className="flex gap-4 px-4 py-6 w-max snap-x snap-mandatory"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



      {/* ===== Contact Section ===== */}
      <div id="contact" className="py-24 px-6 bg-base-200 text-center flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-accent">Contact</h2>
         <ContactForm/>
        </div>
      </div>
    </section>
  );
}
