import { Hono } from "hono";
import { handle } from "hono/vercel";
import anime from "./anime";
import home from "./home";
import schedule from "./schedule";
import search from "./search";
import test from "./test";
import batch from "./batch";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

export const routes = app
  .route("/anime", anime)
  .route("/home", home)
  .route("/schedule", schedule)
  .route("/search", search)
  .route("/batch", batch)
  .route("/", test);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);


