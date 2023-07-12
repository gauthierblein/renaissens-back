import express from "express";
import { getAllTestimonials, getOneTestimonial, deleteTestimonial, updateTestimonial } from "../controllers/testimonialController.js";
import TestimonialModel from "../models/testimonialModel.js";

const router = express.Router()



//CREATE TESTIMONIAL
router.post("/create/testimonials", async (req, res) => {
  const newTestimonial = new TestimonialModel(req.body);
  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(200).json(savedTestimonial);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/testimonials', getAllTestimonials)
router.get('/testimonials/:id', getOneTestimonial);
router.delete("/deletetestimonial/:id", deleteTestimonial)
router.put("/updatetestimonial/:id", updateTestimonial)



export default router;