import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidationSchemas } from "./customer.validation";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(CustomerValidationSchemas.createCustomerSchema),
  CustomerController.createCustomer,
);

router.get("/", CustomerController.getAllCustomers);
router.get("/:id", CustomerController.getCustomerById);

router.put(
  "/:id",
  validateRequest(CustomerValidationSchemas.updateCustomerSchema),
  CustomerController.updateCustomer,
);

router.delete("/:id", CustomerController.deleteCustomer);

export const customerRoutes = router;
