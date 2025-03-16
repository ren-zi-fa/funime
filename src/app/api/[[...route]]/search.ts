import scrapeSearchResult from "@/lib/scrapeSearchResult";
import axios from "axios";
import { Hono } from "hono";

const { BASE_URL } = process.env;
const app = new Hono()
  .get("/", async (c) => {
    return c.json({ message: "keyword is required" });
  })
  .get("/:keyword", async (c) => {
    const keyword = c.req.param("keyword");
    const response = await axios.get(
      `${BASE_URL}/?s=${keyword}&post_type=anime`
    );
    const html = response.data;
    const searchResult = scrapeSearchResult(html);
    return c.json({ data: searchResult });
  });

export default app;
