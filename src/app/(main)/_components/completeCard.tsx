"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useHomeStore } from "@/store/useHomeStore";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CompletedCard() {
  const { completeAnime, fetchAnime, loading } = useHomeStore();
  useEffect(() => {
    fetchAnime();
  },[]);
  if (loading) return <p>Loading..</p>;
  return (
    <div className="grid grid-cols-2 p-4 gap-2">
      {completeAnime.map((anime, index) => (
        <Card
          className="relative group  shadow-md h-[250px] cursor-pointer"
          key={index}
        >
          <Link href={`/anime/${anime.slug}`}>
            <Image
              src={anime.poster || ""}
              alt={anime.title || "anime"}
              fill
              className="object-cover w-full h-full"
            />
            <p
              className={cn(
                "absolute bottom-0 w-full bg-black/50  mt-10 text-white text-center transition-all duration-200 overflow-hidden",
                "group-hover:h-7  p-2"
              )}
            >
              {anime.title}
            </p>
            <div className="w-full ">
              <p className="absolute top-0 bottom-0 bg-opacity-75 flex items-center gap-2 h-fit text-white px-2 right-0 mt-16 bg-blue-700  shadow-md">
                <Star width={15} />
                <span className="text-sm">{anime.episode_count}</span>
              </p>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
