import { getLeetCodeData } from "../data/leetcode";
import LeetCodeProfile from "@/component/LeetCodeProfile";

export default async function Page() {
  const data = await getLeetCodeData("himanshu8083");

  if (!data) return <div>Loading...</div>;

  return (
    // Added background image and centering
    <main 
      className="min-h-screen bg-cover bg-fixed bg-center" 
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Overlay to ensure text readability */}
      <div className="min-h-screen bg-black/40 backdrop-blur-[2px] py-12">
        <LeetCodeProfile data={data} />
      </div>
    </main>
  );
}