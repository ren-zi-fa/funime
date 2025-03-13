import scrapeSingleAnime from "@/lib/scrapeSingleAnime";
import movie from "@/utils/movie";
import axios from "axios";
import { Hono } from "hono";

const { BASEURL } = process.env;

const app = new Hono()
  .get("/", async (c) => {
    return c.json({ message: "You need to add :/slug" }, 400);
  })
  .get("/:slug", async (c) => {
    const slug = c.req.param("slug");
    const { data } = await axios.get(`${BASEURL}/anime/${slug}`);
    const result = scrapeSingleAnime(data);
    if (!result) return c.json ({message:"anime not found"}, 400)
    return c.json({data:result});
  }).get ("/:slug/episodes", async(c)=>{
    const urlParts = c.req.url.split("/")
    const animeSlug = urlParts[5]
    const { data } = await axios.get(`${BASEURL}/episode/${animeSlug}`);
    const result = await movie(data)
    return c.json({result})
  
  })

export default app;
