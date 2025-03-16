import scrapeSingleAnime from "@/lib/scrapeSingleAnime";
import episode from "@/utils/episode";
import axios from "axios";
import { Hono } from "hono";

const { BASE_URL } = process.env;

const app = new Hono()
  .get("/", async (c) => {
    return c.json({ message: "You need to add :/slug" }, 400);
  })
  .get("/:slug", async (c) => {
    const slug = c.req.param("slug");
    const { data } = await axios.get(`${BASE_URL}/anime/${slug}`);
    const result = scrapeSingleAnime(data);
    if (!result) return c.json({ message: "anime not found" }, 400);
    return c.json({ data: result });
  })
  .get("/:slug/episodes/:episode", async (c) => {
    const episodeSlug = c.req.param("episode");
    const episodeNumber = Number(episodeSlug);
    if (isNaN(episodeNumber)) {
      return c.json({ message: "Episode number must be a number" }, 400);
    }
    const urlParts = c.req.url.split("/");
    const animeSlug = urlParts[5];

    const data = await episode({
      animeSlug: animeSlug,
      episodeNumber: episodeNumber,
    });

    return c.json({ data });
  });

export default app;
