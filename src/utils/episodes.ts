import axios from 'axios';
import scrapeAnimeEpisodes from '@/lib/scrapeAnimeEpisodes';
import { Episode_list } from '@/types';


const { BASE_URL } = process.env;
const episodes = async (slug: string): Promise<Episode_list[] | undefined> => {
  const { data } = await axios.get(`${BASE_URL}/anime/${slug}`);
  const result = scrapeAnimeEpisodes(data);

  return result;
};

export default episodes;
