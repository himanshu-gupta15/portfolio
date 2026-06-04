import TechStackSphere from "@/component/TechStackSphere";
const SKILL_CATEGORIES = [
  {
    label: "Languages",
    color: "#00FFFF",
    skills: [
      { name: "C++", logo: "/assets/cpp-logo.svg" },
      { name: "C", logo: "/assets/c-logo.svg" },
      { name: "JavaScript", logo: "/assets/javascript-logo.svg" },
      { name: "Python", logo: "/assets/python-logo.svg" },
      { name: "Java", logo: "/assets/java-logo.svg" },
      { name: "HTML", logo: "/assets/html-logo.svg" },
      { name: "CSS", logo: "/assets/css-logo.svg" },
    ],
  },
  {
    label: "Frontend",
    color: "#FF00FF",
    skills: [
      { name: "React.js", logo: "/assets/react-logo.svg" },
      { name: "HTML5", logo: "/assets/html-logo.svg" },
      { name: "CSS3", logo: "/assets/css-logo.svg" },
      { name: "Bootstrap", logo: "/assets/bootstrap-logo.svg" },
      { name: "Next.js", logo: "/assets/nextjs-logo.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind-logo.svg" },
    ],
  },
  {
    label: "Backend",
    color: "#00FFFF",
    skills: [
      { name: "Node.js", logo: "/assets/nodejs-logo.svg" },
      { name: "Express.js", logo: "/assets/express-logo.svg" },
      { name: "FastAPI", logo: "/assets/fastapi-logo.svg" },
    ],
  },
  {
    label: "Databases",
    color: "#FF00FF",
    skills: [
      { name: "MongoDB", logo: "/assets/mongodb-logo.svg" },
      { name: "Firebase", logo: "/assets/firebase-logo.svg" },
      { name: "MySQL", logo: "/assets/mysql-logo.svg" },
    ],
  },

  {
    label: "System Design",
    color: "#FF00FF",
    skills: [
      { name: "HLD", logo: "/assets/frontend.svg" },

      { name: "RESTful APIs", logo: "/assets/backend.svg" },
      { name: "Microservices", logo: "/assets/database.svg" },
    ],
  },
  {
    label: "Developer Tools",
    color: "#FF00FF",
    skills: [
      { name: "Git", logo: "/assets/git-logo.svg" },
      { name: "GitHub", logo: "/assets/github-logo.svg" },
      { name: "Postman", logo: "/assets/postman-logo.svg" },
      { name: "VS Code", logo: "/assets/vscode-logo.svg" },
    ],
  },
  {
    label: "Libraries & Packages",
    color: "#00FFFF",
    skills: [
      { name: "Pandas", logo: "/assets/pandas-logo.svg" },
      { name: "NumPy", logo: "/assets/numpy-logo.svg" },
      { name: "Matplotlib", logo: "/assets/matplotlib-logo.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-transparent px-6 py-20 text-white">




      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-10 text-center">
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            ✦ Skills
          </p>
          <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            Technical{" "}
            <span className="bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-300 md:text-base">
            3D skills model on the left and full categorized stack on the right.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-8">
            {/* ── LEFT: 3D Sphere (sticky) ── */}
            <div className="w-full shrink-0 lg:sticky lg:top-24 lg:self-start lg:w-[44%]">
              <TechStackSphere />
            </div>

            {/* ── RIGHT: Categorised skills ── */}
            <div className="w-full space-y-8 lg:w-[56%]">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.label}>
                  {/* Category header */}
                  <h3
                    className="mb-3 text-lg font-bold tracking-wide"
                    style={{ color: cat.color }}
                  >
                    {cat.label}
                  </h3>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/10 px-3.5 py-2 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/15 hover:shadow-[0_0_12px_rgba(0,255,255,0.15)]"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-7 w-7 rounded-lg object-contain"
                          draggable={false}
                        />
                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
