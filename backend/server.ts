import express from "express";
import cors from "cors";


const PORT = 5000;
const app = express();


app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});