"use client";

import { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "@/models/Fox";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Track the current animation: 'idle', 'walk', or 'hit'
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Animation Handlers
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setCurrentAnimation("walk"); // Keep walking while sending

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      )
      .then(() => {
        setIsLoading(false);
        setAlert({ type: "success", message: "Message sent successfully 🚀" });
        
        // Success animation logic
        setTimeout(() => {
          setCurrentAnimation("idle");
          formRef.current?.reset();
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setCurrentAnimation("hit"); // Show "hit" animation on error
        setAlert({ type: "error", message: "Failed to send message ❌" });
        setTimeout(() => setAlert(null), 5000);
      });
  };

  return (
    <>
      {alert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-sm animate-slideDown">
          <div className={`flex items-center gap-4 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all ${
              alert.type === "success" ? "bg-green-500/10 border-green-500/50 shadow-green-500/20" : "bg-red-500/10 border-red-500/50 shadow-red-500/20"
            }`}>
            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border font-bold ${alert.type === "success" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}`}>
              {alert.type === "success" ? "✓" : "!"}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-semibold leading-snug">{alert.message}</p>
            </div>
            <button onClick={() => setAlert(null)} className="text-white/40 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="relative mx-auto px-6 py-24 bg-transparent text-white min-h-screen overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Form Side */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg z-10">
            <h1 className="text-5xl font-extrabold mb-8 bg-linear-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">Get in Touch</h1>
            
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#00FFFF] focus:outline-none rounded-xl text-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Your Email</label>
              <input
                type="email"
                name="from_email"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#FF00FF] focus:outline-none rounded-xl text-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Let me know how I can help you!"
                className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#00FFFF] focus:outline-none rounded-xl text-white resize-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full md:w-auto px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 bg-linear-to-r from-[#FF00FF] to-[#00FFFF] text-white disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* 3D Model Side */}
          <div className="relative z-10 lg:h-[600px] h-[350px] w-full mt-10 lg:mt-0">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight intensity={2.5} position={[0, 0, 1]} />
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <Fox
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.6, -0.6, 0]}
                  scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slideDown {
          from { transform: translate(-50%, -20px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}


// "use client";

// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { Canvas } from "@react-three/fiber";
// import { Suspense} from "react";

// import Fox from "@/models/Fox"
// export default function Contact() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [alert, setAlert] = useState<{
//     type: "success" | "error";
//     message: string;
//   } | null>(null);

//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setIsLoading(true);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
//       )
//       .then(() => {
//         setIsLoading(false);
//         setAlert({
//           type: "success",
//           message: "Message sent successfully 🚀",
//         });
//         formRef.current?.reset();
//         setTimeout(() => setAlert(null), 5000);
//       })
//       .catch(() => {
//         setIsLoading(false);
//         setAlert({
//           type: "error",
//           message: "Failed to send message ❌",
//         });
//         setTimeout(() => setAlert(null), 5000);
//       });
//   };

//   return (
//     <>
//       {/* --- NEW USER-FRIENDLY ALERT BAR --- */}
//       {alert && (
//         <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm animate-slideDown">
//           <div
//             className={`flex items-center gap-4 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all
//             ${
//               alert.type === "success"
//                 ? "bg-green-500/10 border-green-500/50 shadow-green-500/20"
//                 : "bg-red-500/10 border-red-500/50 shadow-red-500/20"
//             }`}
//           >
//             {/* Status Icon */}
//             <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border font-bold ${
//               alert.type === "success" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
//             }`}>
//               {alert.type === "success" ? "✓" : "!"}
//             </div>

//             {/* Message Text */}
//             <div className="flex-1">
//               <p className="text-white text-sm font-semibold leading-snug">
//                 {alert.message}
//               </p>
//             </div>

//             {/* Close Button */}
//             <button 
//               onClick={() => setAlert(null)}
//               className="text-white/40 hover:text-white transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* --- YOUR ORIGINAL UI --- */}
//       <section
//         id="contact"
//         className="mx-auto px-6 py-24 bg-black text-white"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="space-y-6 w-full max-w-lg"
//           >
//             <div className="space-y-2">
//               <label className="text-sm font-bold uppercase tracking-widest text-gray-400">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="from_name"
//                 required
//                 placeholder="Enter your name"
//                 className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#00FFFF] focus:outline-none rounded-xl text-white transition-all"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold uppercase tracking-widest text-gray-400">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="from_email"
//                 required
//                 placeholder="Enter your email"
//                 className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#FF00FF] focus:outline-none rounded-xl text-white transition-all"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-bold uppercase tracking-widest text-gray-400">
//                 Message
//               </label>
//               <textarea
//                 rows={5}
//                 name="message"
//                 required
//                 placeholder="Enter your message"
//                 className="w-full px-6 py-4 bg-[#1a1a1a] border border-transparent focus:border-[#00FFFF] focus:outline-none rounded-xl text-white resize-none transition-all"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white disabled:opacity-50"
//             >
//               {isLoading ? "Sending..." : "Submit"}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Animation Styles */}
//       <style jsx global>{`
//         @keyframes slideDown {
//           from { transform: translate(-50%, -20px); opacity: 0; }
//           to { transform: translate(-50%, 0); opacity: 1; }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//       `}</style>
//     </>
//   );
// }