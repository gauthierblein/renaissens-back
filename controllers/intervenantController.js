import IntervenantModel from "../models/intervenantModel.js";


// Get all Posts
export const getAllIntervenants = (req, res, next) => {
  IntervenantModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Item
export const getOneIntervenant = (req, res, next) => {
    IntervenantModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an item
export const deleteIntervenant = async (req, res) => {
    IntervenantModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Evénement effacé!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an item
export const updateIntervenant = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  IntervenantModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      pictureURL: req.body.pictureURL,
      description: req.body.description,
      subDescription: req.body.subDescription,
      link: req.body.link,
    }
  )
      .then(() => {res.status(201).json({message: 'Intervenant modifié!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 
