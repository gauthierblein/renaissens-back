import mongoose from "mongoose";

const intervenantSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    pictureURL: {type: String, required: true},
    description: { type: String, required: true },
    subDescription: { type: String, required: true },
    link: { type: String },
  },
  {
    timestamps: true,
  }
);

var IntervenantModel = mongoose.model("Intervenants", intervenantSchema);
export default IntervenantModel;
