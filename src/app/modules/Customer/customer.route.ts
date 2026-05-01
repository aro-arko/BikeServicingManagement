import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidationSchemas } from "./customer.validation";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Customer route is working!");
});

router.post(
  "/",
  validateRequest(CustomerValidationSchemas.createCustomerSchema),
  (req, res) => {
    res.send("Customer created successfully!");
  },
);

export const customerRoutes = router;
