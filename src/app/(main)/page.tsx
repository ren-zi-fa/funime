import { Metadata } from "next";
import CompletedCard from "./_components/completeCard";
import OngoingCard from "./_components/ongoingCard";

export const metadata: Metadata = {
  title: "Funime",
  description: "made by renzi febriandika",
};
export default function Home() {
  return (
    <div className="ms-6 h-full">
      <OngoingCard />
      <CompletedCard />
    </div>
  );
}
