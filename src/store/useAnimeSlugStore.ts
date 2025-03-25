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
  error: null,
  loading: false,

  fetchAnimeDetail: async (slug) => {
    set({ error: null, loading: true });

    try {
      const response = await fetch(`/api/anime/${slug}`, {
        cache: "no-store",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY || "",
        },
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
