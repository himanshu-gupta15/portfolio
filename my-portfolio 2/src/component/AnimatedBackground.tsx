"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Initialize with center of screen
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none">
      
      {/* 
        Static top center red glow (like in the FAQ image)
      */}
      <div 
        className="absolute left-1/2 top-[-10%] w-[1000px] h-[600px] rounded-full transform -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 
        The Grid Pattern
        Sharp, highly visible white lines with 60px spacing exactly matching the image 
      */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 90%)",
        }}
      />

      {/* 
        Mouse-following Spotlight (kept subtle to maintain the premium feel)
      */}
      <motion.div
        className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}