import {
  animeSchema,
  batchSchema,
  completeAnimeSchema,
  episodeListSchema,
  episodeSchema,
  genreSchema,
  ongoingAnimeSchema,
  scheduleByDaySchema,
  searchResultAnimeSchema,
} from "@/schemas/anime.schema";
import { z } from "zod";

type GenreType = z.infer<typeof genreSchema>;
type BatchType = z.infer<typeof batchSchema>;
type Episode_list = z.infer<typeof episodeListSchema>;
type CompleteAnime = z.infer<typeof completeAnimeSchema>;
type EpisodeType = z.infer<typeof episodeSchema>;
type OngoingAnime = z.infer<typeof ongoingAnimeSchema>;
type SearchResultAnime = z.infer<typeof searchResultAnimeSchema>;
type Anime = z.infer<typeof animeSchema>;
type ScheduleByDay = z.infer<typeof scheduleByDaySchema>;

export type {
  GenreType,
  Episode_list,
  BatchType,
  CompleteAnime,
  EpisodeType,
  OngoingAnime,
  SearchResultAnime,
  Anime,
  ScheduleByDay,
};
