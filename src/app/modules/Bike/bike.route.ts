import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BikeValidationSchema } from "./bike.validation";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BikeValidationSchema.createBikeValidationSchema),
  BikeController.createBike,
);

router.get("/", BikeController.getAllBikes);

router.get("/:id", BikeController.getBikeById);

export const BikeRoutes = router;
