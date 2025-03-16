import CompletedCard from "./_components/completeCard";
import OngoingCard from "./_components/ongoingCard";

export default function Home() {
  return (
    <div className="ms-6 h-full">
      <OngoingCard />
      <CompletedCard />
    </div>
  );
}
