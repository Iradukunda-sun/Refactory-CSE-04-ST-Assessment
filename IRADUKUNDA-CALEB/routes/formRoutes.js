const express = require('express');
const router = express.Router();

// Import models
const Flight = require('../models/flightform');

router.get("/flight", (req, res) => {
    res.render("form");
  });
  router.post("/flight", async (req, res) => {
    try {
      const myFlight = new Flight(req.body);
      await myFlight.save();
     
    } catch (error) {
      res.status(404).send("Unable to save data")
      console.log("Error saving data", error);
  
    }
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });
  
  
  // Get a specific partner by ID
router.get('/:id', async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a partner by ID
router.put('/:id', async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    res.status(200).json(partner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a partner by ID
router.delete('/:id', async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    if (!partner) {
      return res.status(404).json({ message: 'Partner not found' });
    }
    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
