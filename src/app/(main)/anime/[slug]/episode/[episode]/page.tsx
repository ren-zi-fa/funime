"use client";

import { useEpisodeStore } from "@/store/useEpisodeStore";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TVseries from "./_components/TVseries";
import DownloadStream from "./_components/DownloadStream";
import LoadingGif from "@/components/layout/loadGift";

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
  if (loading) return <LoadingGif/>;

  if (!loading && data === null) return notFound();
  return (
    <div className="">
      {data && (
        <div className="flex flex-col space-y-3">
          <TVseries
            stream_url={data?.stream_url}
            episode={data?.episode}
            has_next_episode={data.has_next_episode}
            has_previous_episode={data.has_previous_episode}
            previous_episode={data.previous_episode}
            episodeSlug={episode as string}
            slug={slug as string}
          />
          <h1 className="text-center  text-2xl font-semibold">Download</h1>
          <DownloadStream download_urls={data.download_urls}/>
        </div>
      )}

    </div>
  );
}
