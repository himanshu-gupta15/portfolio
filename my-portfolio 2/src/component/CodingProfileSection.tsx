import { getLeetCodeData } from "@/app/data/leetcode";

export default async function CodingProfileSection() {
  const data = await getLeetCodeData("himanshu8083");
  const totalSolved = data?.stats?.find((stat: { difficulty: string }) => stat.difficulty === "All")?.count ?? "—";
  const easySolved = data?.stats?.find((stat: { difficulty: string }) => stat.difficulty === "Easy")?.count ?? "—";
  const mediumSolved = data?.stats?.find((stat: { difficulty: string }) => stat.difficulty === "Medium")?.count ?? "—";
  const hardSolved = data?.stats?.find((stat: { difficulty: string }) => stat.difficulty === "Hard")?.count ?? "—";

  const profiles = [
    {
      name: "LeetCode",
      handle: "himanshu8083",
      href: "https://leetcode.com/u/himanshu8083/",
      accent: "from-[#00FFFF]/20 to-[#00FFFF]/5",
      border: "border-[#00FFFF]/20",
      text: "text-[#00FFFF]",
      stats: data
        ? [
            { label: "Solved", value: totalSolved },
            { label: "Easy", value: easySolved },
            { label: "Medium", value: mediumSolved },
            { label: "Hard", value: hardSolved },
          ]
        : [],
      cta: "Open LeetCode",
    },
    {
      name: "CodeChef",
      handle: "imanshu8083",
      href: "https://www.codechef.com/users/imanshu8083",
      accent: "from-[#FF00FF]/20 to-[#FF00FF]/5",
      border: "border-[#FF00FF]/20",
      text: "text-[#FF00FF]",
      stats: [
        { label: "Platform", value: "CodeChef" },
        { label: "Username", value: "imanshu8083" },
      ],
      cta: "Open CodeChef",
    },
    {
      name: "GeeksforGeeks",
      handle: "himanshu97h0",
      href: "https://auth.geeksforgeeks.org/user/himanshu97h0",
      accent: "from-emerald-400/20 to-emerald-400/5",
      border: "border-emerald-400/20",
      text: "text-emerald-400",
      stats: [
        { label: "Platform", value: "GeeksforGeeks" },
        { label: "Username", value: "himanshu97h0" },
      ],
      cta: "Open GFG",
    },
  ];

  return (
    <section id="coding-profile" className="relative mx-auto overflow-hidden bg-[#06070b] px-6 py-24 text-white scroll-mt-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,#00ffff1a,transparent_35%),radial-gradient(circle_at_bottom_right,#ff00ff1a,transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Coding Profiles
          </p>
          <h2 className="mt-4 text-5xl font-extrabold md:text-6xl">
            Competitive <span className="text-[#00FFFF]">Programming</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            A quick look at my active coding platforms and problem-solving progress.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {profiles.map((profile) => (
            <article
              key={profile.name}
              className={`rounded-3xl border ${profile.border} bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/8`}
            >
              <div className={`rounded-2xl border border-white/10 bg-linear-to-br ${profile.accent} p-5`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-[0.25em] ${profile.text}`}>
                      {profile.name}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{profile.handle}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                    Active
                  </div>
                </div>

                {profile.stats.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {profile.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                        <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
                        <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {profile.stats.length === 0 && (
                  <p className="mt-6 text-sm text-gray-300">
                    Click through to view my public profile and achievements.
                  </p>
                )}
              </div>

              <a
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full border ${profile.border} px-5 py-3 text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-white/10`}
              >
                {profile.cta} ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          For full problem history and contest stats, open the individual platform links above.
        </div>
      </div>
    </section>
  );
}