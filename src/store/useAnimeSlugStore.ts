import { anime } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: anime | null;
  loading: boolean;
  error: string | null;
  fetchAnimeDetail: (slug: string) => Promise<void>;
}

export const useAnimeSlugStore = create<AnimeState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchAnimeDetail: async (slug) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/anime/${slug}`, {
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
