"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Flame, ExternalLink, Code2, Terminal, Trophy } from "lucide-react";

interface Submission {
  title: string;
  timestamp: string;
  statusDisplay?: string;
  lang?: string;
}

interface Badge {
  displayName: string;
  icon?: string;
  creationDate?: string;
}

interface StatItem {
  difficulty: string;
  count: number;
}

interface LeetCodeDataProps {
  stats?: StatItem[];
  recentSubmissions?: Submission[];
  badges?: Badge[];
  contestRating?: number;
  ranking?: number;
}

export default function CodolioDashboard({ leetCodeData }: { leetCodeData: LeetCodeDataProps | null }) {
  const [activeTab, setActiveTab] = useState<"problem-solving" | "development">("problem-solving");
  const [activePlatform, setActivePlatform] = useState<"leetcode" | "codechef" | "gfg">("leetcode");

  // LeetCode Stats Extraction with fallbacks
  const totalSolved = leetCodeData?.stats?.find((s) => s.difficulty === "All")?.count ?? 1118;
  const easySolved = leetCodeData?.stats?.find((s) => s.difficulty === "Easy")?.count ?? 336;
  const mediumSolved = leetCodeData?.stats?.find((s) => s.difficulty === "Medium")?.count ?? 638;
  const hardSolved = leetCodeData?.stats?.find((s) => s.difficulty === "Hard")?.count ?? 144;
  const contestRating = leetCodeData?.contestRating ?? 1851;
  const ranking = leetCodeData?.ranking ? leetCodeData.ranking.toLocaleString() : "23,298";

  const rawSubmissions = leetCodeData?.recentSubmissions?.filter(
    (sub) => !sub.statusDisplay || sub.statusDisplay === "Accepted"
  ) ?? [];

  const defaultSubmissions: Submission[] = [
    { title: "Calculator with Method Chaining", timestamp: "1788185431", statusDisplay: "Accepted" },
    { title: "Array Wrapper", timestamp: "1788185140", statusDisplay: "Accepted" },
    { title: "Compact Object", timestamp: "1788184051", statusDisplay: "Accepted" },
    { title: "Flatten Deeply Nested Array", timestamp: "1788099529", statusDisplay: "Accepted" },
    { title: "Join Two Arrays by ID", timestamp: "1788098562", statusDisplay: "Accepted" },
  ];

  const submissionsToShow = rawSubmissions.length > 0 ? rawSubmissions.slice(0, 5) : defaultSubmissions;

  const rawBadges = leetCodeData?.badges ?? [];
  const defaultBadges: Badge[] = [
    { displayName: "Knight" },
    { displayName: "500 Days Badge" },
    { displayName: "365 Days Badge" },
    { displayName: "200 Days Badge 2026" },
    { displayName: "100 Days Badge 2026" },
    { displayName: "50 Days Badge 2026" },
    { displayName: "Top Interview 150" },
  ];
  const badgesToShow = rawBadges.length > 0 ? rawBadges.slice(0, 7) : defaultBadges;

  const socialPlatforms = [
    {
      id: "leetcode" as const,
      name: "LeetCode",
      icon: "/leetcode.png",
      url: "https://leetcode.com/u/himanshu8083/",
    },
    {
      id: "codechef" as const,
      name: "CodeChef",
      icon: "/codechef.png",
      url: "https://www.codechef.com/users/himanshugpt80",
    },
    {
      id: "gfg" as const,
      name: "GeeksforGeeks",
      icon: "/gfg.png",
      url: "https://auth.geeksforgeeks.org/user/himanshu97h0",
    },
    {
      id: "github",
      name: "GitHub",
      icon: "/assets/github-logo.svg",
      url: "https://github.com/himanshu-gupta15",
    },
  ];

  const skillTags = ["#JAVA", "#C++", "#DSA", "#REACT", "#NEXTJS", "#JAVASCRIPT", "#PYTHON"];

  return (
    <section id="coding-profile" className="relative mx-auto overflow-hidden bg-transparent px-4 sm:px-6 py-20 text-white scroll-mt-28">
      {/* Background radial glowing accents */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,#00ffff15,transparent_40%),radial-gradient(circle_at_bottom_right,#ff00ff15,transparent_40%),radial-gradient(circle_at_top_right,#ff7a0015,transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Developer Portfolio
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold md:text-6xl tracking-tight">
            Coding <span className="text-[#FF7A00]">Profiles</span> & <span className="text-[#00FFFF]">Stats</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-400 text-sm sm:text-base">
            Aggregated metrics across competitive programming platforms and live problem-solving progress.
          </p>
        </div>

        {/* Outer Two-Panel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: CODOLIO CARD ================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4">
            
            {/* Codolio Card Top Nav Bar */}
            <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/codolio.svg"
                  alt="Codolio Logo"
                  width={28}
                  height={28}
                  className="rounded-full shadow-sm"
                />
                <span className="font-bold text-white tracking-wider text-sm flex items-center gap-1.5">
                  Codolio <span className="text-xs uppercase px-2 py-0.5 rounded-md bg-[#FF7A00]/20 text-[#FF7A00] font-semibold border border-[#FF7A00]/30">Card</span>
                </span>
              </div>

              <Link
                href="https://codolio.com/profile/himanshugpt"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-gray-400 hover:text-[#FF7A00] transition-colors flex items-center gap-1"
              >
                Profile <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("problem-solving")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === "problem-solving"
                    ? "bg-gradient-to-r from-[#FF7A00] to-[#FF5500] text-white shadow-lg shadow-orange-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Code2 className="w-4 h-4" />
                Problem Solving
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("development")}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === "development"
                    ? "bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Terminal className="w-4 h-4" />
                Development
              </button>
            </div>

            {/* The Main Codolio Card */}
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent p-6 sm:p-7 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Subtle Codolio CARD Watermark */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF7A00]">
                  Codolio
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  CARD
                </span>
              </div>

              {/* User Avatar with Mascot Badge */}
              <div className="flex flex-col items-center text-center mt-6">
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#FF7A00] via-[#FF00FF] to-[#00FFFF] shadow-xl">
                    <Image
                      src="/profile.png"
                      alt="Himanshu Gupta"
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Codolio Mascot badge on avatar */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#1a1410] border-2 border-[#FF7A00] flex items-center justify-center shadow-lg">
                    <Image
                      src="/codolio.svg"
                      alt="Codolio mascot"
                      width={18}
                      height={18}
                    />
                  </div>
                </div>

                {/* Name & Handle */}
                <div className="mt-4 flex items-center gap-1.5">
                  <h3 className="text-2xl font-black text-white tracking-tight">Himanshu Gupta</h3>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                </div>
                <div className="mt-1.5 inline-flex items-center px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30">
                  <span className="text-xs font-bold text-[#FF7A00]">@himanshugpt</span>
                </div>
              </div>

              {/* Two Prominent Metric Boxes */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center hover:border-white/20 transition-all">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Questions Solved</p>
                  <p className="mt-1.5 text-3xl sm:text-4xl font-black text-white">1,868</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-center hover:border-white/20 transition-all">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Active Days</p>
                  <p className="mt-1.5 text-3xl sm:text-4xl font-black text-[#FF7A00]">601</p>
                </div>
              </div>

              {/* "You can find me on ..." Platform Links */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs font-semibold text-center text-gray-400 mb-3 tracking-wider">
                  You can find me on ...
                </p>
                <div className="flex items-center justify-center gap-3">
                  {socialPlatforms.map((p) => {
                    const isSelected = activePlatform === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          if (p.id === "leetcode" || p.id === "codechef" || p.id === "gfg") {
                            setActivePlatform(p.id);
                            setActiveTab("problem-solving");
                          } else if (p.id === "github") {
                            setActiveTab("development");
                          }
                        }}
                        title={p.name}
                        className={`relative p-2 rounded-full border transition-all duration-300 ${
                          isSelected
                            ? "bg-white/20 border-[#00FFFF] shadow-[0_0_12px_rgba(0,255,255,0.4)] scale-110"
                            : "bg-white/10 border-white/15 hover:bg-white/20 hover:scale-105"
                        }`}
                      >
                        <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-white/10 p-0.5">
                          <Image
                            src={p.icon}
                            alt={p.name}
                            width={20}
                            height={20}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skill Tags */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer Action */}
              <a
                href="https://codolio.com/profile/himanshugpt"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF7A00] px-4 py-3 text-sm font-extrabold text-black transition-all duration-300 hover:bg-[#ff912a] hover:scale-[1.02] shadow-lg shadow-orange-500/20"
              >
                Open Full Codolio Card <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: PLATFORM BREAKDOWN ================= */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              {activeTab === "problem-solving" ? (
                <>
                  {/* Header Row: Platform Title + Contest Rating Box */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      {/* Platform Switcher Chips */}
                      <div className="flex items-center gap-2 mb-3">
                        <button
                          type="button"
                          onClick={() => setActivePlatform("leetcode")}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                            activePlatform === "leetcode"
                              ? "bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/40"
                              : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                          }`}
                        >
                          LeetCode
                        </button>
                        <button
                          type="button"
                          onClick={() => setActivePlatform("codechef")}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                            activePlatform === "codechef"
                              ? "bg-[#FF00FF]/20 text-[#FF00FF] border border-[#FF00FF]/40"
                              : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                          }`}
                        >
                          CodeChef
                        </button>
                        <button
                          type="button"
                          onClick={() => setActivePlatform("gfg")}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                            activePlatform === "gfg"
                              ? "bg-emerald-400/20 text-emerald-400 border border-emerald-400/40"
                              : "bg-white/5 text-gray-400 hover:text-white border border-transparent"
                          }`}
                        >
                          GeeksforGeeks
                        </button>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white capitalize tracking-tight">
                        {activePlatform === "leetcode" && "LeetCode profile"}
                        {activePlatform === "codechef" && "CodeChef profile"}
                        {activePlatform === "gfg" && "GeeksforGeeks profile"}
                      </h3>
                    </div>

                    {/* Contest Rating / Peak Rating Box */}
                    <div className="rounded-2xl border border-[#FF7A00]/30 bg-black/40 px-5 py-3 text-right self-start sm:self-auto min-w-[150px]">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                        {activePlatform === "leetcode" ? "Contest Rating" : activePlatform === "codechef" ? "Contests" : "Platform"}
                      </p>
                      <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                        {activePlatform === "leetcode" ? contestRating : activePlatform === "codechef" ? "40 Attended" : "Active"}
                      </p>
                    </div>
                  </div>

                  {/* 4-Column Solved Breakdown (Matching screenshot) */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-white">
                        {activePlatform === "leetcode" ? totalSolved : activePlatform === "codechef" ? "40+" : "250+"}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Total</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                        {activePlatform === "leetcode" ? easySolved : "15"}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Easy</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-amber-400">
                        {activePlatform === "leetcode" ? mediumSolved : "20"}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Medium</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-rose-400">
                        {activePlatform === "leetcode" ? hardSolved : "5"}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Hard</p>
                    </div>
                  </div>

                  {/* 2-Column Highlight Metric Row (Matching screenshot) */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Active Streak</p>
                        <p className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-center gap-2">
                          <Flame className="w-6 h-6 text-[#FF7A00] fill-[#FF7A00]" />
                          601 <span className="text-sm font-semibold text-gray-400">Days</span>
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Global Ranking</p>
                        <p className="text-2xl sm:text-3xl font-black text-cyan-400 mt-1">
                          {ranking}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badges Section */}
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-3">
                      Badges
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {badgesToShow.map((badge, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white/[0.04] border border-white/10 text-gray-200 hover:border-[#00FFFF]/40 transition-colors"
                        >
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                          {badge.displayName}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recent Submissions Section */}
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-3">
                      Recent Submissions
                    </p>
                    <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                      {submissionsToShow.map((sub, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 hover:bg-white/[0.03] transition-colors"
                        >
                          <div className="pr-4">
                            <p className="text-sm sm:text-base font-semibold text-gray-200">
                              {sub.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {new Date(Number(sub.timestamp) * 1000).toLocaleDateString("en-CA")}
                            </p>
                          </div>
                          <span className="shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                            Accepted
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Full Profile CTA Link */}
                  <div className="mt-6 text-left">
                    <a
                      href={
                        activePlatform === "leetcode"
                          ? "https://leetcode.com/u/himanshu8083/"
                          : activePlatform === "codechef"
                          ? "https://www.codechef.com/users/himanshugpt80"
                          : "https://auth.geeksforgeeks.org/user/himanshu97h0"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#00FFFF] hover:text-white transition-colors uppercase tracking-wider"
                    >
                      View Full Profile →
                    </a>
                  </div>
                </>
              ) : (
                /* ================= DEVELOPMENT TAB VIEW ================= */
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Open Source & Engineering</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Development Profile</h3>
                    </div>
                    <div className="rounded-2xl border border-[#00FFFF]/30 bg-black/40 px-5 py-3 text-right self-start sm:self-auto min-w-[150px]">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#00FFFF]">GitHub</p>
                      <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">@himanshu-gupta15</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-white">20+</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Repositories</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-[#00FFFF]">Full-Stack</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">Architecture</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-[#FF00FF]">Next.js</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">React & Node</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                      <p className="text-2xl sm:text-3xl font-black text-[#FF7A00]">Docker</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">DevOps & Cloud</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-4">
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Building production-grade web applications, resilient backend architectures, AI agent systems, and responsive modern user experiences.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Tailwind CSS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-left pt-2">
                    <a
                      href="https://github.com/himanshu-gupta15"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#00FFFF] hover:text-white transition-colors uppercase tracking-wider"
                    >
                      View GitHub Profile →
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
