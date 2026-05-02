import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceManagementValidationSchema } from "./servicemanagement.validation";
import { ServiceManagementController } from "./servicemanagement.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(
    ServiceManagementValidationSchema.createServiceValidationSchema,
  ),
  ServiceManagementController.CreateService,
);

export const ServiceManagementRoutes = router;
