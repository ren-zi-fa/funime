import scrapSchedule from "@/lib/scrapSchedule";
import axios from "axios";
import { Hono } from "hono";
const { BASEURL } = process.env;

const app = new Hono().get("/", async (c) => {
  const response = await axios.get(`${BASEURL}/jadwal-rilis`);
  const result = scrapSchedule(response.data);
  return c.json({ data: result });
});

export default app;
