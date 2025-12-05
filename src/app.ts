import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";

import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import path from "path";

const app: Application = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Just admision management system server start..",
  });
});

app.use("/api", router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API NOT FOUND!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
