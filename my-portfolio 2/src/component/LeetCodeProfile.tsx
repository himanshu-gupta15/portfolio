// 'use client';

// // 1. Define types for the data prop
// // Inside @/component/LeetCodeProfile.tsx (or wherever your types live)

// export interface RecentSubmission {
//   title: string;
//   timestamp: string; // Change this from 'number' to 'string'
// }

// export interface LeetCodeData {
//   profile: any;
//   stats: any[];
//   recentSubmissions: RecentSubmission[];
//   badges: any[];
//   contestRating: number;
// }

// // 2. Explicitly type the 'data' parameter
// const LeetCodeProfile = ({ data }: { data: LeetCodeData }) => {
//   const { stats, recentSubmissions, badges, contestRating } = data;
  
//   // 3. Added type 's' for the find parameters
//   const totalSolved = stats.find((s: { difficulty: string }) => s.difficulty === "All")?.count || 0;
//   const easySolved = stats.find((s: { difficulty: string }) => s.difficulty === "Easy")?.count || 0;
//   const mediumSolved = stats.find((s: { difficulty: string }) => s.difficulty === "Medium")?.count || 0;
//   const hardSolved = stats.find((s: { difficulty: string }) => s.difficulty === "Hard")?.count || 0;

//   return (
//     <div className="relative min-h-screen p-8 text-white bg-slate-900">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-bold text-blue-400">Leetcode Profile</h1>
//           <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
//             <p className="text-xs uppercase opacity-70">Contest Rating</p>
//             <p className="text-3xl font-black text-blue-500">{contestRating}</p>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           {[
//             { label: 'Total Solved', value: totalSolved, color: 'text-blue-400' },
//             { label: 'Easy', value: easySolved, color: 'text-green-400' },
//             { label: 'Medium', value: mediumSolved, color: 'text-yellow-400' },
//             { label: 'Hard', value: hardSolved, color: 'text-red-400' },
//           ].map((stat, i) => (
//             <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center">
//               <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
//               <p className="text-sm opacity-60 mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Badges - Added badge and idx types */}
//         <div className="mb-10">
//           <h3 className="text-xl font-semibold mb-4 opacity-80">Badges</h3>
//           <div className="flex flex-wrap gap-3">
//             {badges.slice(0, 4).map((badge: { displayName: string }, idx: number) => (
//               <span key={idx} className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm">
//                 🏅 {badge.displayName}
//               </span>
//             ))}
//           </div>
//         </div>

//        {/* Recent Submissions - Update sub type to string and cast for Date */}
// <div>
//   <h3 className="text-xl font-semibold mb-4 opacity-80">Recent Submissions</h3>
//   <div className="space-y-3">
//     {/* 1. Change timestamp to string here 👇 */}
//     {recentSubmissions.slice(0, 3).map((sub: { title: string; timestamp: string }, idx: number) => (
//       <div key={idx} className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex justify-between items-center">
//         <div>
//           <p className="font-medium text-lg">{sub.title}</p>
//           {/* 2. Wrap sub.timestamp in Number() 👇 */}
//           <p className="text-xs opacity-50">
//             {new Date(Number(sub.timestamp) * 1000).toLocaleDateString()}
//           </p>
//         </div>
//         <span className="text-green-400 font-semibold bg-green-400/10 px-3 py-1 rounded-lg">Accepted</span>
//       </div>
//     ))}
//   </div>
// </div>
//       </div>
//     </div>
//   );
// };

// export default LeetCodeProfile;

'use client';

import React from 'react';

export interface RecentSubmission {
  title: string;
  timestamp: string;
}

export interface LeetCodeData {
  profile: any;
  stats: any[];
  recentSubmissions: RecentSubmission[];
  badges: any[];
  contestRating: number;
}

const LeetCodeProfile = ({ data }: { data: LeetCodeData }) => {
  const { stats, recentSubmissions, badges, contestRating } = data;
  
  const totalSolved = stats.find((s: { difficulty: string }) => s.difficulty === "All")?.count || 0;
  const easySolved = stats.find((s: { difficulty: string }) => s.difficulty === "Easy")?.count || 0;
  const mediumSolved = stats.find((s: { difficulty: string }) => s.difficulty === "Medium")?.count || 0;
  const hardSolved = stats.find((s: { difficulty: string }) => s.difficulty === "Hard")?.count || 0;

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full relative overflow-hidden font-sans selection:bg-[#00FFFF]/30">
      
      {/* Background Glows matching Hero Component */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FFFF] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF00FF] opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Leetcode <span className="text-[#00FFFF] drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Profile</span>
            </h1>
            <p className="mt-4 text-gray-400 text-lg max-w-xl">
              Tracking my competitive programming journey and algorithm mastery.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FF00FF] opacity-20 blur-xl group-hover:opacity-40 transition-all"></div>
            <div className="relative bg-black/40 backdrop-blur-md border border-gray-800 p-6 rounded-2xl flex flex-col items-center min-w-[160px]">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Contest Rating</p>
              <p className="text-4xl font-black text-[#FF00FF]">{contestRating}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Using custom colors from Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Solved', value: totalSolved, color: 'text-white', glow: 'shadow-white/5' },
            { label: 'Easy', value: easySolved, color: 'text-[#00FFFF]', glow: 'shadow-[#00FFFF]/10' },
            { label: 'Medium', value: mediumSolved, color: 'text-[#FF00FF]', glow: 'shadow-[#FF00FF]/10' },
            { label: 'Hard', value: hardSolved, color: 'text-orange-500', glow: 'shadow-orange-500/10' },
          ].map((stat, i) => (
            <div key={i} className={`bg-white/5 border border-gray-800 p-8 rounded-2xl transition-all hover:border-gray-700 hover:scale-[1.02] ${stat.glow} shadow-xl`}>
              <p className={`text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-500 font-medium uppercase tracking-tighter text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Submissions - Larger column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#00FFFF] rounded-full"></span>
              Recent Submissions
            </h3>
            <div className="space-y-4">
              {recentSubmissions.slice(0, 4).map((sub, idx) => (
                <div key={idx} className="group bg-white/5 border border-gray-800 p-5 rounded-2xl flex justify-between items-center transition-all hover:bg-white/[0.08]">
                  <div>
                    <p className="font-bold text-xl text-gray-200 group-hover:text-[#00FFFF] transition-colors">{sub.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(Number(sub.timestamp) * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/20">
                    ACCEPTED
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#FF00FF] rounded-full"></span>
              Badges
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {badges.slice(0, 4).map((badge: { displayName: string }, idx: number) => (
                <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-transparent border border-gray-800 p-4 rounded-xl flex items-center gap-4">
                  <div className="text-2xl">🏅</div>
                  <span className="text-gray-300 font-medium">{badge.displayName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <a 
            href={`https://leetcode.com/u/himanshu8083/`}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-white text-black hover:bg-[#00FFFF] transition-all duration-300"
          >
            View Full Profile ↗
          </a>
        </div>

      </div>
    </div>
  );
};

export default LeetCodeProfile;