"use client";

import { Button } from "@/components/ui/button";
import { episode } from "@/types/response";
import { useRouter } from "next/navigation";

type TVseriesProps = Omit<
  episode,
  "anime" | "download_urls" | "next_episode" | "  previous_episode"
> & {
  slug: string;
  episodeSlug: string;
};

export default function TVseries({
  stream_url,
  episode,
  has_next_episode,
  has_previous_episode,
  slug,
  episodeSlug,
}: TVseriesProps) {
  const router = useRouter();

  const NextButton = () => {
    if (has_next_episode) {
      const nextSlug = Number(episodeSlug) + 1;
      router.push(`/anime/${slug}/episode/${nextSlug}`);
    }
  };
  const PrevButton = () => {
    if (has_previous_episode) {
      const nextSlug = Number(episodeSlug) - 1;
      router.push(`/anime/${slug}/episode/${nextSlug}`);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-center">{episode}</h1>
      <iframe
        src={stream_url}
        className="h-[200px] w-full rounded-xl sm:h-[300px] sm:w-full md:h-[400px] md:w-full lg:h-[500px] lg:w-full xl:h-[600px] xl:w-full"
        allowFullScreen
      ></iframe>
      <div className="flex flex-row-reverse gap-4 mt-2  items-end justify-center">
        <Button onClick={NextButton} disabled={!has_next_episode}>
          Next
        </Button>
        <Button onClick={PrevButton} disabled={!has_previous_episode}>
          Prev
        </Button>
      </div>
    </div>
  );
}
