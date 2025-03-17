import { animeSchema } from "@/schemas/anime.schema";
import { Anime } from "@/types";
import { create } from "zustand";

interface AnimeState {
  data: Anime | null;
  error: string | null;
  loading: boolean;
  fetchAnimeDetail: (slug: string) => Promise<void>;
}

export const useAnimeSlugStore = create<AnimeState>((set) => ({
  data: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      const validationResult = animeSchema.safeParse(result.data);

      set({ data: validationResult.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch anime single data" });
    } finally {
      set({ loading: false });
    }
  },
}));
