import { anime } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: anime[];
  loading: boolean;
  error: string | null;
  fetchAnimeDetail: (slug: string) => Promise<void>;
}

export const useAnimeSlugStore = create<AnimeState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetchAnimeDetail: async (slug) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/anime/${slug}`);
      const result = await response.json();
      if (!result.data) throw new Error("Anime not found");
      set({
        data: result,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data", loading: false });
    }
  },
}));
