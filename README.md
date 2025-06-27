```markdown
# 🦕 sahdoio-deno-blog

a clean, fast, and modular **deno + hono** api for powering my personal blog — following clean architecture principles.

---

## 🚀 stack

- [deno](https://deno.land) – modern runtime for typescript/js
- [hono](https://hono.dev) – ultra-fast web framework
- clean architecture – separation by `domain`, `app`, `infra`
- optional: dockerized or deployable on [deno deploy](https://deno.com/deploy)

---

## 📁 project structure

```

api/
├── app/               # application layer (use cases)
│   └── post/
│       └── createPost.ts
├── domain/            # domain entities and types
│   └── post.ts
├── infra/             # infrastructure (routes, controllers)
│   ├── controllers/
│   └── routes/
├── main.ts            # hono app entrypoint
├── deno.json          # config + tasks
└── .gitignore

````

---

## 💻 usage

### 🧪 development (hot reload)

```bash
denon dev
````

> requires `denon` installed globally:
> `deno install --global --allow-all --unstable https://deno.land/x/denon/denon.ts`

### ▶ production

```bash
deno run --allow-net main.ts
```

or with task:

```bash
deno task start
```

### 🐳 with docker

```bash
docker build -t deno-blog .
docker run -p 8000:8000 deno-blog
```

---

## 📬 example request

```bash
curl -X POST http://localhost:8000/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "deno rocks", "content": "with hono too"}'
```

---

## 🛡 permissions

this app only requires:

```bash
--allow-net
```

---

## ✨ roadmap

* [x] basic post creation
* [ ] list posts
* [ ] connect to a db (sqlite or kv)
* [ ] deploy to deno deploy
* [ ] use tiny-injector for dependency injection
* [ ] add unit + integration tests with `std/testing`

---

## 👨‍💻 author

**lucas sahdo**
[github.com/sahdoio](https://github.com/sahdoio)
[linkedin.com/in/sahdo](https://linkedin.com/in/sahdo)

---

## 📄 license

[MIT](LICENSE)

```

