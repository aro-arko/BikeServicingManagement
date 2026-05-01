import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidationSchemas } from "./customer.validation";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Customer route is working!");
});

router.post(
  "/",
  validateRequest(CustomerValidationSchemas.createCustomerSchema),
  CustomerController.createCustomer,
);

export const customerRoutes = router;
