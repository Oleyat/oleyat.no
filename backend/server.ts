import express from "express";
import cors from "cors";
import { db, initDb } from "./db/db.js";
import routes from "./routes/routes.js";

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://127.0.0.1:5000';
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: [allowedOrigin],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});