import CompletedCard from "./_components/completeCard";
import OngoingCard from "./_components/ongoingCard";

export default function Home() {
  return (
    <>
      <OngoingCard />
      <CompletedCard />
    </>
  );
}
