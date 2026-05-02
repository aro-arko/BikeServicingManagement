import express from "express";

const router = express.Router();

import { customerRoutes } from "../modules/Customer/customer.route";
import { BikeRoutes } from "../modules/Bike/bike.route";
import { ServiceManagementRoutes } from "../modules/ServiceManagement/servicemanagement.route";

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/services",
    route: ServiceManagementRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
