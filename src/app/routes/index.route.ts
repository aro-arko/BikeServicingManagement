import express from "express";

const router = express.Router();

import { customerRoutes } from "../modules/Customer/customer.route";

const moduleRoutes = [
  {
    path: "/customers",
    route: customerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
