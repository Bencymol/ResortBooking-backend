import express from "express";
import adminRoutes from "./adminRoutes/index.js";

const router = express.Router();

router.use("/admin", adminRoutes);

export default router;
