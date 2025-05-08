import express from "express";
import eventsModel from "../models/events.model.js";

const eventsController = express.Router();

eventsController.post("/:placeId/:eventName", async (_req, res) => {
  try {
    let placeId = _req.params.placeId;
    let eventName = _req.params.eventName;

    await eventsModel.addEvent(placeId, eventName);

    res.status(200);
    
  } catch (error) {
    res.status(500);
    res.json({
      message: "Something went wrong when adding an event.",
      error: error,
    });
  }

  res.send();
});

eventsController.delete("/:placeId/:eventName", async (_req, res) => {
  try {
    let placeId = _req.params.placeId;
    let eventName = _req.params.eventName;

    await eventsModel.deleteEvent(placeId, eventName);
    res.status(200);

  } catch (error) {
    // FIXME: create an enum in typescript ?
    switch (error.toString()) {
      case "Error: NotFound":
        res.status(404);
        break;
      default:
        res.status(500);
        res.json({
          message: "Something went wrong when deleting an event.",
          error: error,
        });
        break
    }
  }

  res.send();
});

// update (= delete/put)





export default eventsController;
