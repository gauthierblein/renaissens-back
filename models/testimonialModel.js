import mongoose from "mongoose";

const testimonialSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    subDescription: { type: String, required: true },
    link: { type: String },
    cover: {type: String}
  },
  {
    timestamps: true,
  }
);

var TestimonialModel = mongoose.model("Testimonials", testimonialSchema);
export default TestimonialModel;
