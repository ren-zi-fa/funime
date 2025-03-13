import { Hono } from "hono"
import { handle } from "hono/vercel"
import anime from "./anime"
import home from "./home"
export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

const routes = app
	.route('/anime', anime)
	.route('/home', home)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes