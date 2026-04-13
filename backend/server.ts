import express from "express";
import cors from "cors";
import { db, initDb } from "./db/db.js";
import { getArticle, postArticle, getAllArticles, deleteArticle } from "./controller.js";
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://127.0.0.1:5000';


const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors({
  origin: [allowedOrigin],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

app.post("/api/article", async (req, res) => {
  const { title, description, slug, content } = req.body;
  await postArticle(title, description, slug, content);
  res.status(201).json({ message: "Article created" });
});

app.get("/api/article/:slug", async (req, res) => {
  const slug = req.params.slug;
  const article = await getArticle(slug);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

app.get("/api/articles", async (req, res) => {
  const articles = await getAllArticles();
  if (articles) {
    res.json(articles);
  } else {
    res.status(404).json({ message: "Articles not found" });
  }
});

app.delete("/api/article/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteArticle(id);
  res.status(201).json({ message: "Article deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});