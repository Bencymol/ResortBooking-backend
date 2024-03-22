import express from "express";
import Admin from "../../db/model/adminSchema.js";
import Resort from "../../db/model/resortSchema.js";
import checkToken from "../../middlewares/checkToken.js";
import Aminities from "../../db/model/aminitySchema.js";
import Bookings from "../../db/model/bookingSchema.js";
import Offer from "../../db/model/offerSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  try {
    const admin = await Admin.findOne({ email: body.email });
    if (admin) {
      return res.status(403).json({ message: "Email already registered!" });
    }
    if (body.password !== body.confirmPassword) {
      return res.status(403).json({ message: "Passwards do not matching!" });
    }

    await Admin.create(body);
    res.status(201).json({ message: "Signup successfull" });
  } catch (e) {
    res.status(403).json({ message: e.message });
  }
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const admin = await Admin.findOne({ email: body.email });
  if (!admin) {
    return res.status(404).json({ message: "User name or Password incorrect" });
  }

  if (!(body.password === admin.password)) {
    return res.status(404).json({ message: "User name or Password incorrect" });
  }

  const token = jwt.sign(
    { role: "ADMIN", id: admin._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  res.status(200).json({ message: "Login successfull", token: token });
});

/*Add resorts...*/

router.post("/add-resort", checkToken(["ADMIN"]), async (req, res) => {
  const body = { ...req.body };

  try {
    const res = await Resort.findOne({ email: body.email });
    if (res) {
      return res.status(403).json({ message: "Already added with this email" });
    }
    const resort = await Resort.create(body);
    res.status(201).json({ message: "Resort added successfully" });
  } catch (e) {
    res.status(201).json({ message: e });
  }
});

/*Add aminity...*/
router.post("/add-aminity", checkToken(["ADMIN"]), async (req, res) => {
  const body = { ...req.body };
  try {
    const aminity = await Aminities.create(body);
    res.status(201).json({ message: "Aminity added successfully" });
  } catch (e) {
    res.status(403).json({ message: e });
  }
});

/*List bookings...*/

router.get("/list-bookings", checkToken(["ADMIN"]), async (req, res) => {
  try {
    const bookings = await Bookings.find();
    res.status(201).json(bookings);
  } catch (e) {
    res.status(404).json({ message: e });
  }
});

/*add offer...*/

router.post("/add-offer", checkToken(["ADMIN"]), async (req, res) => {
  const body = { ...req.body };
  try {
    const offer = await Offer.create(body);
    res.status(201).json({ message: "Offer added successfully" });
  } catch (e) {
    res.status(403).json({ message: e });
  }
});

export default router;
