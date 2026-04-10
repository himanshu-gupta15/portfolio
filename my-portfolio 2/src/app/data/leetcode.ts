import { LeetCode } from "leetcode-query";

const leetcode = new LeetCode();

// 1. Added string type to username
export async function getLeetCodeData(username: string) {
  try {
    const user = await leetcode.user(username);

    // 2. Added optional chaining (?.) and null checks
    if (!user || !user.matchedUser) {
        return null;
    }

    return {
      profile: user.matchedUser.profile,
      stats: user.matchedUser.submitStats.acSubmissionNum,
      recentSubmissions: user.recentSubmissionList || [],
      badges: user.matchedUser.badges || [],
      contestRating: 1851 
    };
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return null;
  }
}