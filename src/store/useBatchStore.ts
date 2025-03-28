import { batchSchema } from "@/schemas/anime.schema";
import { BatchType } from "@/types";
import { create } from "zustand";

interface AnimeState {
  data: BatchType | null;
  loading: boolean;
  error: string | null;
  fetchBatch: (slug: string) => Promise<void>;
}
export const useBatchStore = create<AnimeState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchBatch: async (slug) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/batch/${slug}`, {
        cache: "no-store",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY || "",
        },
      });
      const result = await response.json();
      const validationBatch = batchSchema.safeParse(result.data);
      if (!response.ok) {
        set({ error: result });
      }
      set({
        data: validationBatch.data,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime  batch data", loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
