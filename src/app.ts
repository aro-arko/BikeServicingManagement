import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/index.route";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api", router);

export default app;
