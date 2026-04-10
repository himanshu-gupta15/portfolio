"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Galaxy from "@/component/Galaxy";
import ThreeScene from "@/component/ThreeScene";
import AboutDeskEmbed from "@/component/AboutDeskEmbed";

// Reusable Counter Component
function Counter({ targetValue }: { targetValue: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, targetValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "Javascript", level: 90 },
    { name: "React JS", level: 85 },
    { name: "Next JS", level: 80 },
    { name: "Node JS", level: 75 },
  ];

  return (
    <section id="about" className="relative mx-auto px-6 py-24 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* --- BACKGROUND LAYERS: Match Home --- */}
      <ThreeScene />
      
      {/* Galaxy Stars Layer */}
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

      {/* Atmospheric Vignette (Same as Hero) */}
      <div className="absolute inset-0 z-2 bg-[radial-gradient(circle_at_center,transparent_10%,#0a0a0a_95%)] pointer-events-none" />

      {/* --- ORIGINAL UI CONTENT --- */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold inline-block relative">
            <span className="text-[#FF00FF]">About</span> <span className="text-[#00FFFF]">me</span>
            <span className="absolute -bottom-2 right-0 w-12 h-6 bg-[#FF00FF] rounded-full blur-xl opacity-50"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: 3D About Model */}
          <div className="mx-auto lg:mx-0 w-full lg:max-w-176">
            <AboutDeskEmbed />
          </div>

          {/* Right Side: Bio and Skills */}
          <div className="space-y-8">
            <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
              <p>
                I am a passionate and driven software developer with hands-on experience 
                building various <span className="font-medium text-[#FF00FF]">web applications</span>. 
                My strength lies in my ability to quickly grasp new technologies, 
                solve complex coding challenges, and work collaboratively.
              </p>
              <p>
                Whether it's designing user-friendly interfaces or building scalable 
                backends, I am always looking for innovative solutions. My enthusiasm for 
                technology, coupled with my <span className="text-[#00FFFF]">academic background</span>, 
                drives me to continuously improve.
              </p>
            </div>

            {/* Animated Skill Bars */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                    <span>{skill.name}</span>
                  </div>
                  <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-[#FF00FF] to-[#00FFFF] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats Footer with Animated Digits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-[#1a1a1a]">
          <div className="text-center group">
            <span className="block text-5xl font-extrabold text-[#FF00FF] group-hover:scale-110 transition-transform">
              <Counter targetValue={650} />+
            </span>
            <span className="text-gray-500 uppercase tracking-widest text-sm mt-2 block">DSA Problems</span>
          </div>
          <div className="text-center border-x border-[#1a1a1a] group">
            <span className="block text-5xl font-extrabold text-white group-hover:scale-110 transition-transform">
              <Counter targetValue={5} />+
            </span>
            <span className="text-gray-500 uppercase tracking-widest text-sm mt-2 block">Projects</span>
          </div>
          <div className="text-center group">
            <span className="block text-5xl font-extrabold text-[#00FFFF] group-hover:scale-110 transition-transform">
              <Counter targetValue={2} />+
            </span>
            <span className="text-gray-500 uppercase tracking-widest text-sm mt-2 block">Hackathons</span>
          </div>
        </div>
      </div>
    </section>
  );
}