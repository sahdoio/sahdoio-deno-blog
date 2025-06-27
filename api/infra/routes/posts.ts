import { Hono } from "https://deno.land/x/hono@v3.12.7/mod.ts";
import { createPostController } from "../controllers/createPost.ts";

const posts = new Hono();

posts.post("/", createPostController);

export default posts;
