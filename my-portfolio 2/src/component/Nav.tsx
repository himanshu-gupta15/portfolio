import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    /* The outer container handles positioning and spacing from the top */
    <header className="fixed top-4 left-0 w-full flex justify-center z-50 px-6">
      {/* Glassy Pill Container:
          - rounded-full: Creates the extreme curved ends.
          - bg-black/40: Semi-transparent dark base.
          - backdrop-blur-md: Blurs the galaxy stars behind the bar.
          - border-white/10: Adds the subtle 'glass' edge.
      */}
      <nav className="w-full max-w-6xl flex items-center justify-between px-8 py-3 
                      bg-black/40 backdrop-blur-md rounded-full border border-white/10 
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        
        {/* Left Nav: Navigation Links */}
        <div className="flex gap-10 items-center">
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

        {/* Right Nav: Connect Button */}
        <div className="flex items-center">
          <Link 
            href="/#contact" 
            className="relative px-8 py-3 rounded-full font-black text-xl  uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 bg-linear-to-r from-[#FF00FF] to-[#00FFFF] text-white shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            Connect With Me
          </Link>
        </div>
      </nav>
    </header>
  );
}