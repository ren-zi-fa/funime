import axios from 'axios';
import scrapeAnimeEpisodes from '@/lib/scrapeAnimeEpisodes';
import type { episode_list } from '@/types/response';

const { BASE_URL } = process.env;
const episodes = async (slug: string): Promise<episode_list[] | undefined> => {
  const { data } = await axios.get(`${BASE_URL}/anime/${slug}`);
  const result = scrapeAnimeEpisodes(data);

  return result;
};

export default episodes;
