import { CompleteAnime, OngoingAnime } from "@/types";
import { create } from "zustand";

interface AnimeState {
  ongoingAnime: OngoingAnime[];
  completeAnime: CompleteAnime[];
  loading: boolean;
  error: string | null;
  fetchAnime: () => Promise<void>;
}

export const useHomeStore = create<AnimeState>((set) => ({
  completeAnime: [],
  ongoingAnime: [],
  loading: false,
  error: null,
  fetchAnime: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/home`, { next: { revalidate: 10 } });
      const result = await response.json();

      set({
        ongoingAnime: result.data.ongoing_anime,
        completeAnime: result.data.complete_anime,
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime data", loading: false });
    }
  },
}));
