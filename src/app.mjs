import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// routes
import healthRouter from "./routes/health.route.mjs";

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

const apiVersion = process.env.API_VERSION;

app.use(`${apiVersion}/health`, healthRouter);

export default app;
