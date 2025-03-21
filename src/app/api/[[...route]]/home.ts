import scrapeCompleteAnime from "@/lib/scrapeCompleteAnime";
import scrapeOngoingAnime from "@/lib/scrapeOngoingAnime";
import axios from "axios";
import { load } from "cheerio";
import { Hono } from "hono";

const { BASE_URL } = process.env;

const app = new Hono().get("/", async (c) => {
  const { data } = await axios.get(BASE_URL as string);
  const $ = load(data);
  const ongoingAnimeEls = $(
    ".venutama .rseries .rapi:first .venz ul li"
  ).toString();
  const completeAnimeEls = $(
    ".venutama .rseries .rapi:last .venz ul li"
  ).toString();
  const ongoing_anime = scrapeOngoingAnime(ongoingAnimeEls);
  const complete_anime = scrapeCompleteAnime(completeAnimeEls);
  return c.json({ data: { ongoing_anime, complete_anime } });
});

export default app;
