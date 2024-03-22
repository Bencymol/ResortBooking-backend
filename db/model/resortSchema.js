import { model, Schema } from "mongoose";

const resortSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    network: {
      type: String,
      required: true,
      trim: true,
    },
    transportation: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    aminities: [{ type: Schema.Types.ObjectId, ref: "Aminities" }],
  },
  { timestamps: true }
);

const Resort = model("Resort", resortSchema);

export default Resort;
