import { model, Schema } from "mongoose";

const bookingSchema = Schema(
  {
    resort: {
      type: Schema.Types.ObjectId,
      ref: "Resort",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    aminity: {
      type: Schema.Types.ObjectId,
      ref: "Aminities",
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    chekIn: {
      type: String,
      default: "11 A.M",
    },
    chekOut: {
      type: String,
      default: "11 A.M",
    },
  },
  { timestamps: true }
);

const Booking = model("Booking", bookingSchema);
export default Booking;
