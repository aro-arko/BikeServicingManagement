import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/index.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api", router);

app.use(globalErrorHandler);

export default app;
