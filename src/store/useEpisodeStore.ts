
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
        next: { revalidate: 10 },
      });
      const result = await response.json();
      if (!response.ok) {
        set({ error: result });
      }
      set({
        data: result.data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data", loading: false });
    }
  },
}));
