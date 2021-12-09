import express from "express";
import { getAll, getSingle } from "../controllers/PostController.js";

const router = express.Router();

router.route("/").get(getAll);
router.route("/:id").get(getSingle);

export default router;
