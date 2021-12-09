import asyncHandler from "express-async-handler";
import Post from "../models/Post.js";
import asyncRedis from "async-redis";

const client = asyncRedis.createClient();

// @DESC Get All Post
// @ROUTE /api/posts
// @METHOD GET
export const getAll = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({});

    const postsCached = await client.get("postsCached");

    if (postsCached) {
      res.status(201).json({ success: true, data: postsCached });
    } else {
      res.status(201).json({ success: true, data: posts });
      await client.set("postsCached", posts, "EX", 10);
    }
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
    const postCached = await client.get("postCached");

    if (postCached) {
      res.status(201).json({ success: true, data: postCached });
    } else {
      res.status(201).json({ success: true, data: post });
      await client.set("postCached", post, "EX", 10);
    }
  } catch (error) {
    console.log(error.message);
  }
});
