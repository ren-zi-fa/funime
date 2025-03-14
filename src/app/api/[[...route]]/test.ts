import { Hono } from "hono";


const app = new Hono().get("/", (c) => {
  return c.json({runtime:process.env.NEXT_RUNTIME})
});

export default app