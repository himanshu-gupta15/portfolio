"use client";

import { motion } from "framer-motion";

export default function AboutDesk2D() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className="group relative h-136 w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-[#0f172a]/95 via-[#0b1220]/95 to-[#09090b]/95"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_85%_72%,rgba(217,70,239,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_28%,transparent_72%,rgba(255,255,255,0.02))]" />

      {/* floating accent particles */}
      {["left-[8%] top-[14%]", "left-[24%] top-[30%]", "right-[13%] top-[22%]", "right-[20%] top-[46%]"].map((pos, i) => (
        <motion.span
          key={pos}
          className={`absolute ${pos} h-2.5 w-2.5 rounded-full ${i % 2 === 0 ? "bg-cyan-300/70" : "bg-fuchsia-300/70"}`}
          animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* floor */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* acoustic wall */}
      <div className="absolute left-0 right-0 top-0 h-[45%] opacity-35">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.11)_0_4px,transparent_4px_18px)]" />
      </div>

      {/* desk top */}
      <div className="absolute bottom-[22%] left-[8%] right-[8%] h-6 rounded-xl bg-linear-to-r from-[#5b3b27] via-[#8b5a3e] to-[#5b3b27] shadow-[0_10px_30px_rgba(0,0,0,0.45)]" />
      <div className="absolute bottom-[10%] left-[11%] h-[12%] w-3 rounded-full bg-slate-400/70" />
      <div className="absolute bottom-[10%] right-[11%] h-[12%] w-3 rounded-full bg-slate-400/70" />

      {/* monitor left (portrait) */}
      <div className="absolute bottom-[30%] left-[10%] h-[35%] w-[13%] rounded-lg border border-white/20 bg-[#050b18] shadow-[0_0_24px_rgba(34,211,238,0.22)]">
        <div className="absolute inset-[8%] rounded-md bg-linear-to-b from-cyan-300/25 via-teal-300/20 to-fuchsia-300/25" />
      </div>

      {/* main curved monitor */}
      <div className="absolute bottom-[34%] left-[25%] h-[24%] w-[45%] rounded-[28px] border border-white/20 bg-[#030712] shadow-[0_0_28px_rgba(56,189,248,0.25)]">
        <motion.div
          className="absolute inset-[6%] rounded-[22px] bg-linear-to-r from-cyan-300/30 via-emerald-300/25 to-fuchsia-300/30"
          animate={{ opacity: [0.5, 0.92, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute bottom-[29%] left-[45%] h-[5%] w-[6%] rounded-b-md bg-white/25" />

      {/* pc tower */}
      <div className="absolute bottom-[24%] right-[8%] h-[34%] w-[16%] rounded-2xl border border-cyan-300/45 bg-[#0b1220] shadow-[0_0_24px_rgba(34,211,238,0.22)]">
        <div className="absolute inset-[10%] rounded-xl border border-cyan-300/25 bg-cyan-400/10" />
        <motion.div
          className="absolute right-[16%] top-[13%] h-3 w-3 rounded-full bg-cyan-300"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[18%] top-[40%] h-0.5 w-[44%] rounded bg-fuchsia-300/75" />
      </div>

      {/* laptop */}
      <div className="absolute bottom-[24%] left-[31%] h-[12%] w-[21%] rounded-lg border border-fuchsia-300/45 bg-[#0b1020] shadow-[0_0_20px_rgba(217,70,239,0.25)]">
        <motion.div
          className="absolute inset-[10%] rounded-md bg-linear-to-r from-fuchsia-300/25 to-cyan-300/25"
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute bottom-[21%] left-[29.5%] h-2 w-[24%] rounded bg-fuchsia-300/35" />

      {/* desk mat */}
      <div className="absolute bottom-[19%] left-[34%] h-[12%] w-[32%] rounded-xl bg-[#2c1f2b]/60" />

      {/* keyboard and mouse */}
      <div className="absolute bottom-[20.5%] left-[40%] h-[5%] w-[18%] rotate-[-8deg] rounded-md border border-white/20 bg-slate-200/80" />
      <div className="absolute bottom-[22%] left-[59%] h-[4%] w-[6%] rotate-[-8deg] rounded-full bg-slate-300/90" />

      {/* microphone */}
      <div className="absolute bottom-[16%] left-[54%] h-[11%] w-[3.5%] rounded-full bg-slate-700/95" />
      <div className="absolute bottom-[13%] left-[55.3%] h-[4.5%] w-[1.2%] rounded bg-slate-500/90" />

      {/* accessories */}
      <div className="absolute bottom-[20.5%] left-[18%] h-[3%] w-[7%] -rotate-12 rounded bg-slate-900/90" />
      <div className="absolute bottom-[18%] left-[15%] h-[6%] w-[8%] rotate-[-8deg] rounded-md border border-white/15 bg-white/80" />
      <div className="absolute bottom-[21%] right-[11%] h-[15%] w-[4%] rounded-full bg-yellow-500/90" />

      {/* chair + developer silhouette */}
      <motion.div
        className="absolute bottom-[6%] right-[18%] h-[25%] w-[22%] rounded-[40%] border border-cyan-300/25 bg-slate-200/15"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-[26%] right-[26%] h-[8%] w-[5%] rounded-full bg-slate-300/35" />
      <div className="absolute bottom-[19%] right-[24.8%] h-[9%] w-[8%] rounded-2xl bg-slate-300/25" />
      <div className="absolute bottom-[15%] right-[24.3%] h-[5%] w-[3%] rotate-18 rounded-full bg-slate-300/22" />
      <div className="absolute bottom-[15.5%] right-[28.8%] h-[5%] w-[3%] -rotate-18 rounded-full bg-slate-300/22" />

      {/* cables */}
      <div className="absolute bottom-[17%] left-[46%] h-[9%] w-[20%] rounded-b-full border-b-2 border-cyan-300/55" />
      <div className="absolute bottom-[16%] right-[20%] h-[8%] w-[14%] rounded-b-full border-b-2 border-fuchsia-300/55" />

      <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs tracking-[0.2em] text-cyan-300">
        WORKSPACE
      </div>

      {/* subtle hover sheen */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["0%", "340%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
