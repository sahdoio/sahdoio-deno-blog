export class Post {
  constructor(
    public readonly title: string,
    public readonly content: string,
    public readonly createdAt: Date = new Date(),
  ) {}
}
