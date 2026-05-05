// data/projects.ts

export const projects = [
  {
    id: 1,
    title: "Snapcart ",
    description: `Developed a real-time delivery platform enabling order tracking, delivery assignment, and instant status updates using WebSockets.
Implemented secure authentication with Google OAuth, role-based access control, and OTP-based delivery verification`,
    image: "/project/snapcart/img1.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/himanshu-gupta15/snapcart.git",
    live: "https://snapcart-sigma.vercel.app/"
  },
  {
    id: 2,
    title: "Learning Management System",
    description: `Developed an AI-powered LMS with student/educator dashboards, enabling voice-based and natural language course search using LLMs.
Integrated Razorpay payments, secure authentication, and role-based access control for scalable and secure course management.`,
     image: "/project/LMS/image.png",
    video: "/projects/delivery.mp4",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/himanshu-gupta15/delivery-app",
    live: "https://delivery-demo.com"
  }
  
];