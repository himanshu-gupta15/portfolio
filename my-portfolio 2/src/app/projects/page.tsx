"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Galaxy from "@/component/Galaxy";
import ThreeScene from "@/component/ThreeScene";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto px-6 py-24 bg-black text-white overflow-hidden">
      <ThreeScene />

      <div className="absolute inset-0 z-1 pointer-events-none">
        <Galaxy
          numStars={760}
          numTwinkles={170}
          speed={4.2}
          trailAlpha={0.24}
          twinkleSpeed={0.012}
          colors={["#ffffff", "#8be9fd", "#00ffff", "#ff7be5", "#b79cff"]}
          className="opacity-75"
        />
      </div>

      <div className="absolute inset-0 z-2 bg-[radial-gradient(circle_at_center,transparent_10%,#0a0a0a_95%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[#00ff9c] text-sm uppercase tracking-widest font-bold mb-4">PROJECTS</p>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Featured <span className="text-[#00ffff]">Projects</span>
          </h2>
        </div>

        {/* Timeline Projects */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-[#00ff9c] to-transparent transform -translate-x-1/2 hidden md:block" />

          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`mb-20 md:mb-32 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center relative`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-20 md:top-24 w-4 h-4 bg-[#00ff9c] rounded-full transform -translate-x-1/2 border-4 border-black shadow-lg shadow-[#00ff9c]/50 hidden md:block" />

              {/* Project Number - Desktop */}
              <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-8">
                <span className="text-4xl md:text-5xl font-bold text-gray-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Image Section */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/50 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00ff9c] transition-all transform hover:scale-105"
                      >
                        View Live
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-105"
                      >
                        Source Code
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                {/* Mobile Project Number */}
                <div className="md:hidden mb-4">
                  <span className="text-3xl font-bold text-[#00ff9c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-semibold text-white bg-gray-900/50 border border-gray-700 rounded-lg hover:border-[#00ff9c] hover:text-[#00ff9c] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile Buttons */}
                <div className="md:hidden flex gap-4">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00ff9c] transition-all text-center"
                    >
                      View Live
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all text-center"
                    >
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        {projects.length > 3 && (
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#"
              className="inline-block px-8 py-4 border-2 border-[#00ff9c] text-[#00ff9c] font-bold rounded-lg hover:bg-[#00ff9c] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View All Projects →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}