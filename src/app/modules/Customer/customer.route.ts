import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidationSchemas } from "./customer.validation";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.get("/", CustomerController.getAllCustomers);

router.post(
  "/",
  validateRequest(CustomerValidationSchemas.createCustomerSchema),
  CustomerController.createCustomer,
);

export const customerRoutes = router;
