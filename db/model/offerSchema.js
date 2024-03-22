import { model, Schema } from "mongoose";

const offerSchema = Schema(
  {
    resort: {
      type: Schema.Types.ObjectId,
      ref: "Resort",
    },
    percentage: {
      type: Number,
      required: true,
    },
    offerName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    validTill: {
      type: String,
      required: true,
    },
    expired: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Offer = model("Offer", offerSchema);

export default Offer;
