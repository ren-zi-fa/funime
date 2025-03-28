"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EpisodeType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TVseriesProps = Omit<
  EpisodeType,
  "anime" | "next_episode" | "  previous_episode"
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
  download_urls,
}: TVseriesProps) {
  const router = useRouter();

  const [provider, setProvider] = useState("");
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
        src={provider === "" ? `${stream_url}` : provider}
        className="h-[200px] w-full rounded-xl sm:h-[300px] sm:w-full md:h-[400px] md:w-full lg:h-[500px] lg:w-full xl:h-[600px] xl:w-full"
        allowFullScreen
      />
      <div className="flex flex-row-reverse gap-4 mt-2  items-center justify-center">
        <Select onValueChange={(value: string) => setProvider(value)}>
          <SelectTrigger className="w-full max-[644px]:my-2 max-[644px]:w-full">
            <SelectValue placeholder="Select a media provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Media Provider</SelectLabel>
              {download_urls.mp4?.map((resolution) =>
                resolution.urls.map((url: any) => (
                  <SelectItem
                    value={url.url}
                    key={`${resolution.resolution} - ${url.provider}`}
                  >
                    {`${resolution.resolution} - ${url.provider}`}
                  </SelectItem>
                ))
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
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
