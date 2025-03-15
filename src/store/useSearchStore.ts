import { searchResultAnime } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: searchResultAnime | null;
  loading: boolean;
  error: string | null;
  fetchResult: (keyword: string) => Promise<void>;
}
export const useSearchStore = create<AnimeState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchResult: async (keyword) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/search/${keyword}`, {
        next: { revalidate: 10 },
      });
      const result = await response.json();

      set({
        data: result.data,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data", loading: false });
    }
  },
}));
