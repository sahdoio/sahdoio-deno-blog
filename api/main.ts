import { Hono } from "https://deno.land/x/hono@v3.12.7/mod.ts";
import posts from "./infra/routes/posts.ts";

const app = new Hono();

app.route("/posts", posts);

Deno.serve(app.fetch);
