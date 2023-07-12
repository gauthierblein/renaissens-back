import TestimonialModel from "../models/testimonialModel.js";


// Get all Posts
export const getAllTestimonials = (req, res, next) => {
    TestimonialModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Item
export const getOneTestimonial = (req, res, next) => {
    TestimonialModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an item
export const deleteTestimonial = async (req, res) => {
  TestimonialModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Témoignage effacé!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an item
export const updateTestimonial = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  TestimonialModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      subDescription: req.body.subDescription,
      link: req.body.link,
    }
  )
      .then(() => {res.status(201).json({message: 'Témoignage modifié!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 