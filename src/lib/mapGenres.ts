import { GenreType } from '@/types';
import { load } from 'cheerio';


const { BASE_URL } = process.env;
const mapGenres = (html: string): GenreType[] => {
  const result: GenreType[] = [];
  const genres = html.split('</a>')
    .filter(item => item.trim() !== '')
    .map(item => `${item}</a>`);

  genres.forEach(genre => {
    const $ = load(genre);

    result.push({
      name: $('a').text(),
      slug: $('a').attr('href')?.replace(/^https:\/\/otakudesu\.[a-zA-Z0-9-]+\/genres\//, '').replace('/', ''),
      otakudesu_url: `${BASE_URL}${$('a').attr('href')}`
    });
  });

  return result;
};

export default mapGenres;