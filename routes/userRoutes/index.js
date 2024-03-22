import express from "express";
import User from "../../db/model/userSchema.js";
import Booking from "../../db/model/bookingSchema.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  try {
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(403).json({ message: "Email already registered!" });
    }
    if (body.password !== body.confirmPassword) {
      return res.status(403).json({ message: "Passwards do not matching!" });
    }

    await User.create(body);
    res.status(201).json({ message: "Signup successfull" });
  } catch (e) {
    res.status(403).json({ message: "Signup unsuccessfull" });
  }
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ email: body.email });
  if (!user) {
    return res.status(404).json({ message: "User name or Password incorrect" });
  }

  if (!(body.password === user.password)) {
    return res.status(404).json({ message: "User name or Password incorrect" });
  }

  const token = jwt.sign(
    { role: "USER", id: user._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );
  res.status(200).json({ message: "Login successfull", token: token });
});

/* list user bookings*/

router.get("/bookings/:user_id", async (req, res) => {
  const { id } = req.params;
  try {
    const userBookings = await Booking.find({ user: id });
    res.status(200).json(userBookings);
  } catch (e) {
    res.status(404).json({ message: e });
  }
});

export default router;
