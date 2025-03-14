import { ScheduleByDay } from "@/types/response";
import { create } from "zustand";

interface AnimeState {
  data: ScheduleByDay[];
  loading: boolean;
  error: string | null;
  fetchSchedule: () => Promise<void>;
}
export const useScheduleStore = create<AnimeState>((set) => ({
  data: [],
  loading: false,
  error: null,
  fetchSchedule: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/api/schedule", {
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
