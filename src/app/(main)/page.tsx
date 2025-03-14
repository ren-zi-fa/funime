"use client";

import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import { useHomeStore } from "@/store/useHomeStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import OngoingCard from "./_components/ongoingCard";

export default function Home() {
  const { fetchAnime, ongoingAnime } = useHomeStore();
  useEffect(() => {
    fetchAnime();
  }, []);
  console.log(ongoingAnime);
  return <div className="">{/* <OngoingCard /> */}</div>;
}
