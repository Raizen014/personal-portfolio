'use client';

import Image from "next/image";
import { motion, easeIn } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <section>
      {/* ===== Hero Section ===== */}
      <div
        id="home"
        className="min-h-screen flex flex-col md:flex-row-reverse items-center py-24 md:justify-center bg-base-200 px-6 md:px-24 gap-12 relative overflow-hidden"
      >
        {/* Optional abstract background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl z-0" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col items-center mt-16 md:mt-0 text-start z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Aeron Garcia</span>
          </h1>
          <p className="text-sm md:text-md leading-relaxed mb-6 max-w-xl">
            An IT graduate with a growing interest in <strong>UI/UX design</strong> and <strong>front-end</strong> development.
            I have a solid understanding of design fundamentals and am currently sharpening my skills
            in Figma, HTML, CSS, and JavaScript through hands-on practice. I'm passionate about creating
            clean, simple, and user-friendly interfaces — and I'm excited to continue learning and growing in this field.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-accent">View My Work</a>
            <a href="#about" className="btn btn-outline">Download CV</a>
          </div>
          <div className="flex gap-2 mt-6">
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
          </div>
        </motion.div>
      </div>

      {/* ===== About Section ===== */}
      <div id="about" className="min-h-screen flex justify-center py-24 md:p-24 bg-base-100 gap-10">
        <div className="w-[70%]">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-accent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            >
            I’m a detail-oriented IT graduate specializing in <strong>UI/UX design</strong> and <strong>front-end development</strong>.
            I’ve built a strong foundation in design principles, accessibility, and responsive design, and I’m continuously improving through self-led projects and study.
            <br /><br />
            I work with tools like <strong>Figma</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> to create intuitive user experiences that are both functional and visually engaging. My goal is to design clean, thoughtful interfaces that prioritize usability and clarity.
            <br /><br />
            I’m currently seeking opportunities where I can apply and grow my skills in a real-world design environment, collaborate with other creatives, and continue learning in a team-driven space.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: easeIn }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 hidden md:flex justify-center z-10"
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

      {/* ===== Projects Section ===== */}
      <div id="projects" className="py-24 px-6 bg-base-200 text-center">
        <h2 className="text-3xl font-bold mb-6 text-accent">Projects</h2>
        <p className="text-lg text-gray-600 mb-8">Soon to be added: personal UI/UX case studies and web apps!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card bg-white shadow-md p-6 rounded-lg">Project 1</div>
          <div className="card bg-white shadow-md p-6 rounded-lg">Project 2</div>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <div id="contact" className="py-24 px-6 bg-base-100 text-center flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-accent">Contact</h2>
          <form className="flex flex-col gap-4 bg-white p-8 md:p-10 rounded-xl shadow-lg text-left">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered bg-gray-200 text-black w-full"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered bg-gray-200 text-black w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="textarea bg-gray-200 text-black textarea-bordered w-full"
              required
            ></textarea>
            <button type="submit" className="btn btn-accent w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
