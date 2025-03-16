import { z } from "zod";

const genreSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  otakudesu_url: z.string().optional(),
});

const episodeListSchema = z.object({
  episode: z.string().optional(),
  episode_number: z.number().optional(),
  slug: z.string().optional(),
  otakudesu_url: z.string().optional(),
});

const recommendationsSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  poster: z.string().optional(),
  otakudesu_url: z.string().optional(),
});

const batchSchema = z.object({
  slug: z.string().optional(),
  otakudesu_url: z.string().optional(),
  uploaded_at: z.string().optional(),
});

const animeSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  japanese_title: z.string().optional(),
  poster: z.string().optional(),
  rating: z.string().optional(),
  produser: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional(),
  episode_count: z.string().optional(),
  duration: z.string().optional(),
  release_date: z.string().optional(),
  studio: z.string().optional(),
  genres: z.array(genreSchema),
  synopsis: z.string().optional(),
  batch: batchSchema.nullable(),
  episode_lists: z.array(episodeListSchema),
  recommendations: z.array(recommendationsSchema),
});

const searchResultAnimeSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  poster: z.string().optional(),
  status: z.string().optional(),
  rating: z.string().optional(),
  genres: z.array(genreSchema),
  url: z.string().optional(),
});

const ongoingAnimeSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  poster: z.string().optional(),
  current_episode: z.string().optional(),
  release_day: z.string().optional(),
  newest_release_date: z.string().optional(),
  otakudesu_url: z.string().optional(),
});

const completeAnimeSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  poster: z.string().optional(),
  episode_count: z.string().optional(),
  rating: z.string().optional(),
  last_release_date: z.string().optional(),
  otakudesu_url: z.string().optional(),
});

const episodeSchema = z.object({
  episode: z.string(),
  anime: z.object({
    slug: z.string().optional(),
    otakudesu_url: z.string().optional(),
  }),
  has_next_episode: z.boolean(),
  next_episode: z
    .object({
      slug: z.string().optional(),
      otakudesu_url: z.string().optional(),
    })
    .nullable(),
  has_previous_episode: z.boolean(),
  previous_episode: z
    .object({
      slug: z.string().optional(),
      otakudesu_url: z.string().optional(),
    })
    .nullable(),
  stream_url: z.string().optional(),
  download_urls: z.object({
    mp4: z.array(
      z.object({
        resolution: z.string().optional(),
        urls: z.array(
          z.object({
            provider: z.string().optional(),
            url: z.string().optional(),
          })
        ),
      })
    ),
    mkv: z.array(
      z.object({
        resolution: z.string().optional(),
        urls: z.array(
          z.object({
            provider: z.string().optional(),
            url: z.string().optional(),
          })
        ),
      })
    ),
  }),
});

const batchDownloadSchema = z.object({
  batch: z.string().optional(),
  download_urls: z.array(
    z.object({
      resolution: z.string().optional(),
      file_size: z.string().optional(),
      urls: z.array(
        z.object({
          provider: z.string().optional(),
          url: z.string().optional(),
        })
      ),
    })
  ),
});

const scheduleByDaySchema = z.object({
  day: z.string(),
  anime_list: z.array(
    z.object({
      anime_name: z.string(),
      url: z.string(),
      slug: z.string(),
    })
  ),
});

export {
  animeSchema,
  searchResultAnimeSchema,
  ongoingAnimeSchema,
  completeAnimeSchema,
  genreSchema,
  episodeListSchema,
  episodeSchema,
  batchDownloadSchema,
  scheduleByDaySchema,
};
