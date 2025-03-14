import { Hono } from "hono";
import { handle } from "hono/vercel";
import anime from "./anime";
import home from "./home";
import schedule from "./schedule";
import test from "./test";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/anime", anime)
  .route("/home", home)
  .route("/schedule", schedule)
  .route("/", test);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
