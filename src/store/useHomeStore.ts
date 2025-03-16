import { ongoingAnimeSchema } from "@/schemas/anime.schema";
import { CompleteAnime, OngoingAnime } from "@/types";
import { z } from "zod";
import { create } from "zustand";

// Skema untuk array ongoing anime
const ongoingAnimeListSchema = z.array(ongoingAnimeSchema);

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

      const ongoingValidation = ongoingAnimeListSchema.safeParse(result.data.ongoing_anime);
      const completeValidation = z.array(z.any()).safeParse(result.data.complete_anime); 

      if (!ongoingValidation.success) {
        console.error("Ongoing Anime Validation Error:", ongoingValidation.error.format());
        throw new Error("Invalid ongoing anime data format");
      }

      if (!completeValidation.success) {
        console.error("Complete Anime Validation Error:", completeValidation.error.format());
        throw new Error("Invalid complete anime data format");
      }

      set({
        ongoingAnime: ongoingValidation.data || [], 
        completeAnime: completeValidation.data || [],
        loading: false,
      });

    } catch (error) {
      console.error("Fetch Anime Error:", error);
      set({ error: error instanceof Error ? error.message : "Failed to fetch anime data", loading: false });
    }
  },
}));
