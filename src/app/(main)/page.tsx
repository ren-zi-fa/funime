"use client";

import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import { useHomeStore } from "@/store/useHomeStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import OngoingCard from "./_components/ongoingCard";

export default function Home() {

  return (
    <div className="">
      <OngoingCard />
    </div>
  );
}
