import scrapeBatch from "@/lib/scrapeBatch";
import axios from "axios";
import { Hono } from "hono";

const { BASE_URL } = process.env;
const app = new Hono()
  .get("/", async (c) => {
    return c.json({ message: "slug required" }, 400);
  })
  .get("/:slug", async (c) => {
    const batchSlug = c.req.param("slug");
    const response = await axios.get(`${BASE_URL}/batch/${batchSlug}`);
    const result = scrapeBatch(response.data);
    return c.json({ data: result });
  });

export default app;
