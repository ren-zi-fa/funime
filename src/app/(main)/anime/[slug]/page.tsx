"use client";

import { useAnimeSlugStore } from "@/store/useAnimeSlugStore";
import { useHomeStore } from "@/store/useHomeStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { slug } = useParams();
  const { fetchAnime, data } = useAnimeSlugStore();

  useEffect(() => {
    fetchAnime(slug as string);
  }, [slug]);
  console.log(data);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
