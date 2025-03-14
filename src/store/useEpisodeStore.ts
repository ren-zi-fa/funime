import { episode } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: episode | null;
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
      if (!result.data) throw new Error("Anime not found");
      set({
        data: result.data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data", loading: false });
    }
  },
}));
