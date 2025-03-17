import { searchResultAnimeSchema } from "@/schemas/anime.schema";
import { SearchResultAnime } from "@/types";
import { z } from "zod";
import { create } from "zustand";

interface AnimeState {
  data: SearchResultAnime[];
  error: string | null;
  fetchResult: (keyword: string) => Promise<void>;
}

const searchListSchema = z.array(searchResultAnimeSchema);
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
      const validationResultSearch = searchListSchema.safeParse(result.data);
      if (!response.ok) {
        set({ error: result });
      }
      set({
        data: validationResultSearch.data,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data" });
    }
  },
}));
