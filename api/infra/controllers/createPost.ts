import { Context } from "https://deno.land/x/hono@v3.12.7/mod.ts";
import { CreatePost } from "../../app/post/createPost.ts";

const createPostUseCase = new CreatePost();

export const createPostController = async (context: Context) => {
  const body = await context.req.json();
  const post = await createPostUseCase.execute(body);
  return context.json({ message: "post created", post }, 201);
};
