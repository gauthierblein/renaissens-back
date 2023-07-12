import express from "express";
import { getAllIntervenants, getOneIntervenant, deleteIntervenant, updateIntervenant } from "../controllers/intervenantController.js";
import IntervenantModel from "../models/intervenantModel.js";

const router = express.Router()



//CREATE INTERVENANT
router.post("/create/intervenants", async (req, res) => {
  const newIntervenant = new IntervenantModel(req.body);
  try {
    const savedIntervenant = await newIntervenant.save();
    res.status(200).json(savedIntervenant);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/intervenants', getAllIntervenants)
router.get('/intervenants/:id', getOneIntervenant);
router.delete("/deleteintervenant/:id", deleteIntervenant)
router.put("/updateintervenant/:id", updateIntervenant)



export default router;