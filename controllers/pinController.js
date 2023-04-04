import pinModel from "../models/Pin.js";

//Create

export const createPinController = async (req, res) => {
  const newpin = new pinModel(req.body);

  try {
    const savedpin = await newpin.save();
    res.status(201).json(savedpin);
    console.log(savedpin);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get Specific Pin

export const getPinController = async (req, res) => {
  try {
    const getpin = await pinModel.find({ _id: req.params.id });
    res.status(200).json(getpin);
    console.log(getpin);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get All Pin

export const getAllpinController = async (req, res) => {
  try {
    const getpin = await pinModel.find();
    res.status(200).json(getpin);
  } catch (err) {
    res.status(500).json(err);
  }
};
