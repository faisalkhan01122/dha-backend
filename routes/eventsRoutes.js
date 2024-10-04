import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import {
  createEvents,
  deleteEvents,
  getAllEvents,
  getEvents,
  updateEvents,
} from "../controllers/eventsController.js";

const router = express.Router();

router.route("/").post(createEvents).get(getAllEvents);

router
  .route("/:id", checkObjectId)
  .get(getEvents)
  .put(updateEvents)
  .delete(deleteEvents);

export default router;