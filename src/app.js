import express from "express";
import cookieParser from "cookie-parser";
import { connectMongoDB } from "./config/mongoDB.config.js";

import router from "./routes/index.js";

import { errorHandle } from "./errors/errHandle.js";
import { logger } from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 8080;

connectMongoDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

// Middleware de manejo de errores
app.use(errorHandle);

app.listen(PORT, () => logger.info(`Listening on ${PORT}`));
