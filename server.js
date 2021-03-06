import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import PostRoute from "./routes/PostRoute.js";

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json({ success: true, message: "Welcome To Node Redis API" });
});

// POST ROUTE
app.use("/api/posts", PostRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Seerver is running on ${PORT} PORT`));
