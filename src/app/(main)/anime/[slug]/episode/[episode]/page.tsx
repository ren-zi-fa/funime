"use client";

import { useEpisodeStore } from "@/store/useEpisodeStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import TVseries from "./_components/TVseries";

export default function EpisodePage() {
  const { episode, slug } = useParams();
  const { data, fetchAnimeEpisode } = useEpisodeStore();
  useEffect(() => {
    fetchAnimeEpisode(slug as string, episode as string);
  }, []);
  console.log(data);

  return (
    <div className="">
      {data && (
        <TVseries stream_url={data?.stream_url} episode={data?.episode} />
      )}
    </div>
  );
}
