import express from "express";
import dishesController from "./controllers/dishes.controller.js";
import recommendationController from "./controllers/recommendedRestaurants.controller.js";
import byDishAndAreaController from "./controllers/byDishAndArea.controller.js";
import eventsController from "./controllers/events.controller.js";

const router = express.Router();

router.use("/recommendations", recommendationController);
router.use("/dishes", dishesController);
router.use("/by-dish-area", byDishAndAreaController);
router.use("/events", eventsController);
export default router;
