import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";

// @DESC Get All Post
// @ROUTE /api/posts
// @METHOD GET
export const getAll = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  res.status(201).json({ success: true, data: posts });
});
