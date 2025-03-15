"use client";

import { useEpisodeStore } from "@/store/useEpisodeStore";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TVseries from "./_components/TVseries";

export default function EpisodePage() {
  const { episode, slug } = useParams();
  const { data, fetchAnimeEpisode } = useEpisodeStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (slug && episode) {
      setLoading(true);
      fetchAnimeEpisode(slug as string, episode as string).finally(() => {
        setLoading(false);
      });
    }
  }, [slug, episode]);
  if (loading) return <p>Loading...</p>;

  if (!loading && data === null) return notFound();
  return (
    <div className="">
      {data && (
        <TVseries
          stream_url={data?.stream_url}
          episode={data?.episode}
          anime={data.anime}
          download_urls={data.download_urls}
          has_next_episode={data.has_next_episode}
          has_previous_episode={data.has_previous_episode}
          next_episode={data.next_episode}
          previous_episode={data.previous_episode}
          episodeSlug={episode as string}
          slug={slug as string}
        />
      )}
    </div>
  );
}
