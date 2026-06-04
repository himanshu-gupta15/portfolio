// import Image from "next/image";

// export default function Hero() {
//   return (
//     /* Background set to near-black with a subtle radial gradient for depth */
//     <div className="bg-[#0a0a0a] min-h-screen w-full flex items-center relative overflow-hidden">
      
//       {/* Optional: Subtle Background Glow to match your brand colors */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FFFF] opacity-5 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF00FF] opacity-5 blur-[120px] rounded-full"></div>

//       <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 items-center">

//         {/* Left Column: Profile AND Logo */}
//         <div className="flex flex-col items-center justify-center gap-6">
//           <div className="relative p-1 rounded-2xl bg-linear-to-b from-gray-800 to-transparent">
//             <Image
//               src="/profile.png"
//               alt="Profile"
//               width={420}
//               height={420}
//               className="rounded-xl shadow-2xl"
//               priority
//             />
//           </div>
          
//           <div className="relative group">
//             {/* Subtle glow behind the logo */}
//             <div className="absolute inset-0 bg-[#00FFFF] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
//             <Image
//               src="/logo.png"
//               alt="Synapticraft Logo"
//               height={220}
//               width={220}
//               className="relative rounded-full object-cover border border-gray-800"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="text-white">
//           <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">
//             Turning Vision Into Reality With{" "}
//             <span className="text-[#00FFFF] drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Code</span> And{" "}
//             <span className="text-[#FF00FF] drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]">Design</span>.
//           </h1>

//           <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
//             As a skilled web developer, I am dedicated to turning ideas into
//             innovative web applications. Explore my latest projects.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex gap-6">
//             <a
//               href="/resume.pdf"
//               className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-[#00FFFF] transition-all duration-300 shadow-lg shadow-white/5"
//             >
//               Resume ↗
//             </a>

//             <a
//               href="/contact"
//               className="px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white"
          
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center relative overflow-hidden bg-transparent">
      <section className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 items-center">
        
        {/* Left Column: Profile & Hire Me */}
        <div className="flex flex-col items-center gap-10">
          <div className="relative p-1 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <Image src="/profile.png" alt="Profile" width={420} height={420} className="rounded-2xl" priority />
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-3.75 bg-linear-to-tr from-[#00FFFF] to-[#FF00FF] opacity-20 blur-3xl rounded-full"></div>
            <Image src="/logo.png" alt="Logo" height={200} width={200} className="relative rounded-full border border-white/5 backdrop-blur-xl" />
          </div>
        </div>

        {/* Right Column: Typography */}
        <div className="text-white text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-5xl md:text-[85px] font-black leading-[1.1] tracking-tighter">
            Turning Vision <br className="hidden md:block"/> Into Reality With <br className="hidden md:block"/>
            <span className="text-[#00FFFF] drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Code</span> And{" "}
            <span className="text-[#FF00FF] drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]">Design</span>.
          </h1>

          <p className="mt-6 md:mt-8 text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-medium">
            As a skilled web developer, I am dedicated to turning ideas into innovative web applications.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a href="/resume.pdf" className="px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-cyan-400 transition-all text-center">Resume ↗</a>
            <a href="/#contact" className="px-12 py-4 rounded-full font-bold text-xl bg-linear-to-r from-[#FF00FF] to-[#00FFFF] text-white hover:scale-105 transition-all text-center">Contact</a>
          </div>
        </div>
      </section>
    </div>
  );
}