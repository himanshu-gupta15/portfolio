"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import { projects } from "../data/projects";// Adjust path as needed
import ElectricBorder from "@/component/ElectricBorder";
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

      <div className="relative z-10">
      {/* Header - Matching About/Contact Style */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold inline-block relative">
          Latest <span className="text-[#00FFFF]">Projects</span>
          <span className="absolute -bottom-2 right-0 w-24 h-8 bg-[#FF00FF] rounded-full blur-3xl opacity-30"></span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work in web development and intelligent systems, 
          bridging the gap between complex code and intuitive design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <ElectricBorder
              color={["#00ff9c", "#ff4fd8"]}
              speed={1}
              chaos={0.12}
              thickness={2}
              style={{ borderRadius: 10 }}
            >
              <div className="bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl">
                {/* Project Image/Video Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Hover Overlay for Video/Live Link */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {project.video && (
                      <Link href={project.video} className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#FF00FF] transition-colors">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </Link>
                    )}
                    <Link href={project.live} target="_blank" className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-[#00FFFF] transition-colors">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </Link>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00FFFF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gray-800 rounded-full text-gray-500 group-hover:border-[#FF00FF]/30 group-hover:text-white transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-900">
                    <Link 
                      href={project.github} 
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Source Code</span>
                    </Link>
                    
                    <Link 
                      href={project.live} 
                      target="_blank"
                      className="text-[#FF00FF] font-bold text-sm hover:underline underline-offset-4"
                    >
                      View Live ↗
                    </Link>
                  </div>
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}