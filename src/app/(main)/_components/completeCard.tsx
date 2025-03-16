"use client";

import LoadingGif from "@/components/layout/loadGift";
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
  }, []);
  if (loading) return <LoadingGif/>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-4 p-4 gap-3">
      {completeAnime.map((anime, index) => (
        <Card
          className="group shadow-md h-50 w-40 py-2 px-2 rounded-none cursor-pointer"
          key={index}
        >
          <Link
            href={`/anime/${anime.slug}`}
            className="relative w-full h-full block"
          >
            <Image
              src={anime.poster || "/anime.webp"}
              alt={anime.title || "anime"}
              fill
              className="object-cover"
              placeholder={anime.poster ? "blur" : "empty"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              blurDataURL={
                anime.poster
                  ? "data:image/jpeg;base64,/9j/4AAQSk..."
                  : undefined
              }
            />

            {/* Judul Anime */}
            <p
              className={cn(
                "absolute bottom-0 w-full bg-black/50 text-white text-center transition-all duration-200 overflow-hidden",
                "group-hover:h-7 p-2"
              )}
            >
              {anime.title}
            </p>

            {/* Episode Count */}
            <div className="absolute top-0 right-0 mt-16 bg-blue-700 bg-opacity-75 text-white px-2 flex items-center gap-2 shadow-md">
              <Star width={15} />
              <span className="text-sm">{anime.episode_count}</span>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
