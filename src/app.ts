import express, { Request, Response } from "express";
import cors from "cors";
import { customerRoutes } from "./app/modules/Customer/customer.route";
import router from "./app/routes/index.route";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api/v1", router);

export default app;
