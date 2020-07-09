module.exports = app => {
    const parkings = require("../controllers/parking.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Parking
    router.post("/", parkings.create);
  
    // Retrieve all Parking
    router.get("/", parkings.findAll);

    // Retrieve all Parking with a free scooter
    router.get("/freeParkings", parkings.findAllWithAFreeScooter);

    // Retrieve all Parking with a free scooter
    router.get("/freeBoxes", parkings.findAllWithAFreeBox);

    // Retrieve a single Parking with id
    router.get("/:id", parkings.findOne);
  
    // Update a Parking with id
    router.put("/:id", parkings.update);
  
    // Delete a Parking with id
    router.delete("/:id", parkings.delete);
  
    // Deletes all Parking
    router.delete("/", parkings.deleteAll);
  
    app.use('/api/parkings', router);
  };