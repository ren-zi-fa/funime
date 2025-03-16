import { completeAnimeSchema } from '@/schemas/anime.schema';
import { load } from 'cheerio';
import { z } from 'zod';


type CompleteAnime = z.infer<typeof completeAnimeSchema>
const scrapeCompleteAnime = (html: string): CompleteAnime[] => {
  const result: CompleteAnime[] = [];
  const animes = html.split('</li>')
    .filter(item => item.trim() !== '')
    .map(item => `${item}</li>`);

  animes.forEach(anime => {
    const $ = load(anime);

    result.push({
      title: $('.detpost .thumb .thumbz .jdlflm').text(),
      slug: $('.detpost .thumb a').attr('href')?.replace(/^https:\/\/otakudesu\.[a-zA-Z0-9-]+\/anime\//, '').replace('/', ''),
      poster: $('.detpost .thumb .thumbz img').attr('src'),
      episode_count: $('.detpost .epz').text().trim().replace(' Episode', ''),
      rating: $('.detpost .epztipe').text().trim(),
      last_release_date: $('.detpost .newnime').text(),
      otakudesu_url: $('.detpost .thumb a').attr('href')
    });
  });

  return result;
};

export default scrapeCompleteAnime;
