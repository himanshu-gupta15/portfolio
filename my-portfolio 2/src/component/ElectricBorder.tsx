"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

type ElectricBorderProps = {
  children: ReactNode;
  color?: string | string[];
  speed?: number;
  chaos?: number;
  thickness?: number;
  style?: CSSProperties;
  className?: string;
};

export default function ElectricBorder({
  children,
  color = "#7df9ff",
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  style,
  className = "",
}: ElectricBorderProps) {
  const radius = style?.borderRadius ?? 16;
  const inset = Math.max(2, thickness);
  const innerRadius = typeof radius === "number" ? Math.max(0, radius - inset) : radius;
  const duration = 7 / Math.max(0.25, speed);
  const palette = Array.isArray(color) ? color : [color];
  const c1 = palette[0] ?? "#7df9ff";
  const c2 = palette[1] ?? c1;
  const glowBlur = Math.max(14, 24 * (1 + chaos));
  const borderMask: CSSProperties = {
    padding: thickness,
    borderRadius: radius,
    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <div className={`relative ${className}`} style={style}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          ...borderMask,
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
          filter: `blur(${glowBlur}px)`,
          opacity: 0.35,
          transform: "scale(1.015)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          ...borderMask,
          background: `conic-gradient(from 0deg, ${c1}, ${c2}, ${c1})`,
          opacity: 0.95,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: radius,
          background: `linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.34) 45%, transparent 70%)`,
          filter: `blur(${Math.max(6, thickness * 3)}px)`,
          opacity: 0.55,
          mixBlendMode: "screen",
        }}
        animate={{ x: ["-120%", "140%"] }}
        transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div
          className="relative z-10 h-full w-full overflow-hidden"
          style={{
            borderRadius: innerRadius,
            background: "linear-gradient(180deg, rgba(17,24,39,0.92), rgba(9,9,11,0.98))",
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 18px 40px rgba(0,0,0,0.35), 0 0 18px ${c1}18, 0 0 24px ${c2}14`,
          }}
        >
          {children}
        </div>
      </div>

    </div>
  );
}
