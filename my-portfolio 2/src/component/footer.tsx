import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand/Introduction */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Himanshu <span className="text-[#FF00FF]">Gupta</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Full-stack developer and Machine Learning enthusiast passionate about creating 
              innovative web solutions and delivering exceptional user experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#about" className="hover:text-[#00FFFF] transition-colors">About</Link></li>
              <li><Link href="/#projects" className="hover:text-[#FF00FF] transition-colors">Projects</Link></li>
              
              <li><Link href="/#contact" className="hover:text-[#FF00FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">himanshugpt0005@gmail.com</li>
              <li>Delhi, India</li>
              <li className="text-[#00FFFF] font-medium">Available for new opportunities</li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <Link href="https://github.com/himanshu-gupta15" target="_blank" className="p-3 bg-gray-900 rounded-full hover:bg-white hover:text-black transition-all">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/himanshu-gupta-8624a728a/" target="_blank" className="p-3 bg-gray-900 rounded-full hover:bg-[#0077b5] hover:text-white transition-all">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:himanshugpt0005@gmail.com" className="p-3 bg-gray-900 rounded-full hover:bg-[#FF00FF] hover:text-white transition-all">
            <Mail className="w-6 h-6" />
          </Link>
        </div>

        {/* Bottom Section: Copyright and Back to Top */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Himanshu Gupta. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤️</span> using <span className="text-[#00FFFF]">Next.js</span> & <span className="text-[#FF00FF]">Tailwind CSS</span> & <span className="text-[#00FFFF]">TypeScript</span>
          </p>
          

         
        </div>
      </div>
    </footer>
  );
}