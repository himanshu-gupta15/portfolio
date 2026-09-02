import { getLeetCodeData } from "@/app/data/leetcode";
import CodolioDashboard from "./CodolioDashboard";

export default async function CodingProfileSection() {
  const data = await getLeetCodeData("himanshu8083");

  return <CodolioDashboard leetCodeData={data} />;
}

