import express from "express";
const router = express.Router();

import { getArticle, postArticle, getAllArticles, deleteArticle, putArticle, putArticleStatus } from "../controller.js";

router.get("/all", async (req, res) => {
  const articles = await getAllArticles();
  if (articles) {
    res.json(articles);
  } else {
    res.status(404).json({ message: "Articles not found" });
  }
});


router.post("", async (req, res) => {
  const { title, description, slug, content } = req.body;
  await postArticle(title, description, slug, content);
  res.status(201).json({ message: "Article created" });
});

router.put("/:slug", async (req, res) => {
  const slug = req.params.slug;
  const { title, description, content } = req.body;
  await putArticle(title, description, slug, content);
  res.status(201).json({ message: "Article updated" });
});

router.put("/status/:slug", async (req, res) => {
  const slug = req.params.slug;
  const { status} = req.body;
  await putArticleStatus(slug, status);
  res.status(201).json({ message: "Article status updated" });
});

router.get("/:slug", async (req, res) => {
  const slug = req.params.slug;
  const article = await getArticle(slug);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteArticle(id);
  res.status(201).json({ message: "Article deleted" });
});


export default router;