import { scheduleByDaySchema } from "@/schemas/anime.schema";
import { ScheduleByDay } from "@/types";
import { z } from "zod";
import { create } from "zustand";

const scheduleListSchema = z.array(scheduleByDaySchema);
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
        cache: "no-store",
      });
      const result = await response.json();
      const validationSchedule = scheduleListSchema.safeParse(result.data);
      set({
        data: validationSchedule.data || [],
        loading: false,
      });
    } catch (error) {
      set({ error: "Failed to fetch anime schedule data", loading: false });
    }
  },
}));
