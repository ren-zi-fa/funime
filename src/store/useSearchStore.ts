import { searchResultAnime } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: searchResultAnime[];
  error: string | null;
  fetchResult: (keyword: string) => Promise<void>;
}
export const useSearchStore = create<AnimeState>((set) => ({
  data: [],
  error: null,
  fetchResult: async (keyword) => {
    set({ error: null });
    try {
      const response = await fetch(`/api/search/${keyword}`, {
        next: { revalidate: 2 },
      });
      const result = await response.json();
      if (!result.data) throw new Error("Anime not found");
      set({
        data: result.data,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data" });
    }
  },
}));
