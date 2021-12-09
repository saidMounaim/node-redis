import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.status(201).json({ success: true, message: "Welcome To Node Redis API" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Seerver is running on ${PORT} PORT`));
