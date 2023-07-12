import EventModel from "../models/eventModel.js";


// Get all Posts
export const getAllEvents = (req, res, next) => {
  EventModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Item
export const getOneEvent = (req, res, next) => {
  EventModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an item
export const deleteEvent = async (req, res) => {
  EventModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Evénement effacé!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an item
export const updateEvent = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  EventModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
      subDescription: req.body.subDescription,
      link: req.body.link,
    }
  )
      .then(() => {res.status(201).json({message: 'Annonce modifiée!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 
