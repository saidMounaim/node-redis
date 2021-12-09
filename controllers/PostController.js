import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";

// @DESC Get All Post
// @ROUTE /api/posts
// @METHOD GET
export const getAll = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(201).json({ success: true, data: posts });
  } catch (error) {
    console.log(error.message);
  }
});

// @DESC Get Single Post
// @ROUTE /api/posts/:id
// @METHOD GET
export const getSingle = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    console.log(error.message);
  }
});
