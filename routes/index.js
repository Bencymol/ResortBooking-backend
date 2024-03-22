import express from "express";
import adminRoutes from "./adminRoutes/index.js";
import imageRoutes from "./imageRoutes/index.js";
import userRoutes from "./userRoutes/index.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/upload", imageRoutes);
router.use("/user", userRoutes);

export default router;
