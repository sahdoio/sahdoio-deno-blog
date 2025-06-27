# 🦕 Sahdoio Deno Blog

A clean, fast, and modular **Deno + Hono** API for powering my personal blog — following Clean Architecture principles.

---

## 🚀 Stack

- [Deno](https://deno.land) – Modern runtime for TypeScript/JavaScript  
- [Hono](https://hono.dev) – Ultra-fast web framework  
- Clean Architecture – Separation by `domain`, `app`, `infra`  
- Optional: Dockerized or deployable on [Deno Deploy](https://deno.com/deploy)  

---

## 📁 Project Structure

```
api/
├── app/               # Application layer (use cases)
│   └── post/
│       └── createPost.ts
├── domain/            # Domain entities and types
│   └── post.ts
├── infra/             # Infrastructure (routes, controllers)
│   ├── controllers/
│   └── routes/
├── main.ts            # Hono app entrypoint
├── deno.json          # Config + tasks
└── .gitignore
```

---

## 💻 Usage

### 🧪 Development (Hot Reload)

```
denon dev
```

> Requires `denon` installed globally:  
> `deno install --global --allow-all --unstable https://deno.land/x/denon/denon.ts`

### ▶ Production

```
deno run --allow-net main.ts
```

Or with task:

```
deno task start
```

### 🐳 With Docker

```
docker build -t deno-blog .
docker run -p 8000:8000 deno-blog
```

---

## 📬 Example Request

```
curl -X POST http://localhost:8000/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Deno Rocks", "content": "With Hono too"}'
```

---

## 🛡 Permissions

This app only requires:

```
--allow-net
```

---

## ✨ Roadmap

- [x] Basic post creation  
- [ ] List posts  
- [ ] Connect to a DB (SQLite or KV)  
- [ ] Deploy to Deno Deploy  
- [ ] Use tiny-injector for dependency injection  
- [ ] Add unit + integration tests with `std/testing`  

---

## 👨‍💻 Author

**Lucas Sahdo**  
[github.com/sahdoio](https://github.com/sahdoio)  
[linkedin.com/in/sahdo](https://linkedin.com/in/sahdo)

---

## 📄 License

[MIT](LICENSE)
