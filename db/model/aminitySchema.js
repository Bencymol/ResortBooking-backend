import { model, Schema } from "mongoose";

const aminitySchema = Schema(
  {
    roomType: {
      type: String,
      required: true,
      trim: true,
    },
    roomCount: {
      type: Number,
      required: true,
      default: 1,
    },
    availableRooms: {
      type: Number,
      required: true,
      default: 1,
    },
    bedType: {
      type: String,
      required: true,
      trim: true,
    },
    restroomType: {
      type: String,
      required: true,
      trim: true,
    },
    image: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true }
);

const Aminities = model("Aminities", aminitySchema);

export default Aminities;
