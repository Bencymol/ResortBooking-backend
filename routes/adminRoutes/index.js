import express from "express";
import Admin from "../../db/models/adminSchema.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  try {
    const response = await Admin.create(body);
    res.status(201).json({ message: "Signup successfull" });
  } catch (e) {
    res.status(403).json({ message: "Signup unsuccessfull" });
  }
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login successfull" });
});

export default router;
