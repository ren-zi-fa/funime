"use client";

import { useEpisodeStore } from "@/store/useEpisodeStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function EpisodePage() {
  const { episode, slug } = useParams();
  const { data, fetchAnimeEpisode } = useEpisodeStore();
  useEffect(() => {
    fetchAnimeEpisode(slug as string, episode as string);
  }, []);
  console.log(data)

  return (
    <div className="">
        
    </div>
  )
}
