"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full flex justify-center z-50 px-4 md:px-6">
      <nav className="w-full max-w-6xl flex flex-wrap items-center justify-between px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] relative">
        
        {/* Logo / Home Link (Visible on mobile for branding if needed, or just hamburger) */}
        <div className="md:hidden flex items-center">
          <span className="text-[#FF00FF] text-lg font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,0,255,0.5)]">
            Portfolio
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav: Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/#home" className="group relative">
            <span className="text-[#FF00FF] text-lg font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,0,255,0.5)] transition-all duration-300">
              Home
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-[#FF00FF] to-transparent"></span>
          </Link>

          <Link href="/#about" className="group relative">
            <span className="text-gray-300 text-lg font-bold uppercase tracking-widest hover:text-[#00FFFF] transition-colors duration-300">
              About me
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFFF] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/#skills" className="group relative">
            <span className="text-gray-300 text-lg font-bold uppercase tracking-widest hover:text-[#00FFFF] transition-colors duration-300">
              Skills
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFFF] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/#coding-profile" className="group relative">
            <span className="text-gray-300 text-lg font-bold uppercase tracking-widest hover:text-[#FF00FF] transition-colors duration-300">
              Coding Profile
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/#projects" className="group relative">
            <span className="text-gray-300 text-lg font-bold uppercase tracking-widest hover:text-[#FF00FF] transition-colors duration-300">
              Projects
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF00FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Desktop Nav: Connect Button */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/#contact" 
            className="relative px-8 py-3 rounded-full font-black text-xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 bg-linear-to-r from-[#FF00FF] to-[#00FFFF] text-white shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            Connect With Me
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-4 w-full bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl">
            <Link href="/#home" onClick={() => setIsOpen(false)} className="text-[#FF00FF] text-lg font-bold uppercase tracking-widest text-center">Home</Link>
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#00FFFF] text-lg font-bold uppercase tracking-widest text-center">About me</Link>
            <Link href="/#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#00FFFF] text-lg font-bold uppercase tracking-widest text-center">Skills</Link>
            <Link href="/#coding-profile" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#FF00FF] text-lg font-bold uppercase tracking-widest text-center">Coding Profile</Link>
            <Link href="/#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#FF00FF] text-lg font-bold uppercase tracking-widest text-center">Projects</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="mt-2 py-4 rounded-full font-black text-lg uppercase tracking-tighter transition-all bg-linear-to-r from-[#FF00FF] to-[#00FFFF] text-white text-center shadow-[0_0_20px_rgba(0,255,255,0.3)]">
              Connect With Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}