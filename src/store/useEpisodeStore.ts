
import { episodeSchema } from "@/schemas/anime.schema";
import { EpisodeType } from "@/types";
import { create } from "zustand";

interface AnimeState {
  data: EpisodeType | null;
  loading: boolean;
  error: string | null;
  fetchAnimeEpisode: (slug: string, episode: string) => Promise<void>;
}
export const useEpisodeStore = create<AnimeState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchAnimeEpisode: async (slug, episode) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/anime/${slug}/episodes/${episode}`, {
        cache:"no-store",
      });
      const result = await response.json();
      const validationEpisode = episodeSchema.safeParse(result.data)
      if (!response.ok) {
        set({ error: result });
      }
      set({
        data: validationEpisode.data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime episode data", loading: false });
    }
  },
}));
