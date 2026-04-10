"use client";
import React, { useRef, useEffect } from 'react';

type GalaxyProps = {
  className?: string;
  numStars?: number;
  numTwinkles?: number;
  speed?: number;
  trailAlpha?: number;
  twinkleSpeed?: number;
  colors?: string[];
};

export default function Galaxy({
  className = "",
  numStars = 950,
  numTwinkles = 220,
  speed = 8,
  trailAlpha = 0.18,
  twinkleSpeed = 0.02,
  colors = ["#ffffff", "#9be7ff", "#00ffff", "#ff8de8"],
}: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame = 0;

    let stars: Star[] = [];
    let twinkles: TwinkleStar[] = [];

    const toRgb = (hex: string) => {
      if (!hex.startsWith('#') || hex.length !== 7) return '255,255,255';
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };

    const palette = colors.map(toRgb);

    type TwinkleStar = {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulse: number;
      flare: number;
      tilt: number;
      color: string;
    };

    const drawStarShape = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      flare: number,
      tilt: number,
      color: string,
    ) => {
      // Soft glow core
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
      gradient.addColorStop(0, `rgba(${color},${alpha})`);
      gradient.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Star core
      ctx.fillStyle = `rgba(${color},${Math.min(1, alpha + 0.15)})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Cross flare (looks like star sparkle ✦)
      ctx.strokeStyle = `rgba(${color},${Math.min(1, alpha * 0.9)})`;
      ctx.lineWidth = Math.max(0.5, size * 0.45);
      ctx.beginPath();
      ctx.moveTo(x - size * flare, y);
      ctx.lineTo(x + size * flare, y);
      ctx.moveTo(x, y - size * flare);
      ctx.lineTo(x, y + size * flare);
      ctx.stroke();

      // Diagonal flare for ✨ look
      const d = size * flare * 0.75;
      const c = Math.cos(tilt);
      const s = Math.sin(tilt);

      ctx.strokeStyle = `rgba(${color},${Math.min(1, alpha * 0.6)})`;
      ctx.lineWidth = Math.max(0.4, size * 0.3);
      ctx.beginPath();
      ctx.moveTo(x - d * c, y - d * s);
      ctx.lineTo(x + d * c, y + d * s);
      ctx.moveTo(x + d * s, y - d * c);
      ctx.lineTo(x - d * s, y + d * c);
      ctx.stroke();
    };

    class Star {
      x!: number; y!: number; z!: number;
      prevZ!: number;
      color!: string;

      constructor() {
        this.init();
      }

      init() {
        // Randomly place stars in a 3D space
        this.x = (Math.random() - 0.5) * 2600;
        this.y = (Math.random() - 0.5) * 2600;
        this.z = Math.random() * 2200 + 1;
        this.prevZ = this.z;
        this.color = palette[Math.floor(Math.random() * palette.length)] || '255,255,255';
      }

      update() {
        this.prevZ = this.z;
        this.z -= speed; // Move star toward the screen

        // Reset star to back if it passes the screen
        if (this.z < 1) {
          this.init();
        }
      }

      draw() {
        if (!ctx || !canvas) return;

        // Project 3D coordinates to 2D screen coordinates
        const sx = (this.x / this.z) * (canvas.width / 2) + canvas.width / 2;
        const sy = (this.y / this.z) * (canvas.height / 2) + canvas.height / 2;

        const px = (this.x / this.prevZ) * (canvas.width / 2) + canvas.width / 2;
        const py = (this.y / this.prevZ) * (canvas.height / 2) + canvas.height / 2;

        // Calculate brightness based on distance
        const brightness = Math.min(1, (2200 - this.z) / 900);

        // If projected point flies too far away, recycle star
        if (sx < -200 || sx > canvas.width + 200 || sy < -200 || sy > canvas.height + 200) {
          this.init();
          return;
        }
        
        ctx.strokeStyle = `rgba(${this.color}, ${brightness})`;
        ctx.lineWidth = Math.max(0.6, (1 / this.z) * 1800); // Thicker as they get closer
        
        // Draw the "streak" line
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        // Add a glowing head to the star
        ctx.fillStyle = `rgba(${this.color}, ${brightness})`;
        ctx.beginPath();
        ctx.arc(sx, sy, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      twinkles = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }

      for (let i = 0; i < numTwinkles; i++) {
        twinkles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.35,
          alpha: Math.random() * 0.7 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          flare: Math.random() * 2.2 + 2.8,
          tilt: Math.random() * Math.PI,
          color: palette[Math.floor(Math.random() * palette.length)] || '255,255,255',
        });
      }
    };

    const animate = () => {
      // Create longer trails for strong "coming toward you" effect
      ctx.fillStyle = `rgba(10, 10, 10, ${trailAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Twinkling stars layer
      twinkles.forEach((t) => {
        t.pulse += twinkleSpeed;
        const flicker = 0.35 + Math.sin(t.pulse) * 0.65;
        drawStarShape(t.x, t.y, t.size, Math.min(1, t.alpha * flicker), t.flare, t.tilt, t.color);
      });

      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrame);
    };
  }, [numStars, numTwinkles, speed, trailAlpha, twinkleSpeed, colors]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-1 ${className}`}
      style={{ mixBlendMode: 'lighten' }}
    />
  );
}