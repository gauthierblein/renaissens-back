import express from "express";
import { getAllEvents, getOneEvent, deleteEvent, updateEvent } from "../controllers/eventController.js";
import EventModel from "../models/eventModel.js";

const router = express.Router()



//CREATE EVENT
router.post("/create/events", async (req, res) => {
  const newEvent = new EventModel(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/events', getAllEvents)
router.get('/events/:id', getOneEvent);
router.delete("/deleteevent/:id", deleteEvent)
router.put("/updateevent/:id", updateEvent)



export default router;