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

export const BikeRoutes = router;
