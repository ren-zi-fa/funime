import { Metadata } from "next";
import CompletedCard from "./_components/completeCard";
import OngoingCard from "./_components/ongoingCard";

export const metadata: Metadata = {
  title: "Funime",
  description: "made by renzi febriandika",
};
export default function Home() {
  return (
    <div className="mx-auto h-full p-4 ">
     <h1
      className="text-center font-extrabold text-2xl my-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      style={{
        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      Ongoing Anime
    </h1>
      <OngoingCard />
      <h1
      className="my-8 text-center font-extrabold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      style={{
        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      Completed Anime
    </h1>
      <CompletedCard />
    </div>
  );
}
