import express from "express";
import {
  createPinController,
  getAllpinController,
  getPinController,
} from "../controllers/pinController.js";

const router = express.Router();

//create a pin
router.post("/", createPinController);
//get a specific pin
router.get("/:id", getPinController);
//Get all pin
router.get("/", getAllpinController);

export default router;
