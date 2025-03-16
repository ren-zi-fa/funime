import scrapSchedule from "@/lib/scrapSchedule";
import axios from "axios";
import { Hono } from "hono";
const { BASE_URL } = process.env;

const app = new Hono().get("/", async (c) => {
  const response = await axios.get(`${BASE_URL}/jadwal-rilis`);
  const result = scrapSchedule(response.data);
  return c.json({ data: result });
});

export default app;
