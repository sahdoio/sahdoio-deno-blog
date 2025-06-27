import { Post } from "../../domain/post.ts";

export class CreatePost {
  execute(data: { title: string; content: string }): Promise<Post> {
    return Promise.resolve(new Post(data.title, data.content));
  }
}
