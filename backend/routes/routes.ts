import express from "express";
import articleRoutes from "./article.js";
const routes = express.Router();

routes.use('/api/article', articleRoutes); 

export default routes;