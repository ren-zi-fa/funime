import { anime } from "@/types/response";
import { error } from "console";
import { create } from "zustand";

interface AnimeState {
  data: anime | null;
  error: string | null;
  loading: boolean;

  fetchAnimeDetail: (slug: string) => Promise<void>;
}

export const useAnimeSlugStore = create<AnimeState>((set) => ({
  data: null,
  error: null,
  loading: false,
  fetchAnimeDetail: async (slug) => {
    set({ error: null, loading: true });
    try {
      const response = await fetch(`/api/anime/${slug}`, {
        next: { revalidate: 10 },
      });
      const result = await response.json();
      if (!response.ok) {
        set({ error: result });
      }
      set({
        data: result.data,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data" });
    } finally {
      set({ loading: false });
    }
  },
}));
