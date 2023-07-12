import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    subDescription: { type: String, required: true },
    link: { type: String },
    cover: {type: String}
  },
  {
    timestamps: true,
  }
);

var EventModel = mongoose.model("Events", eventSchema);
export default EventModel;
