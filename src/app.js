import express from "express";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";
import routeLoader from "./utils/routeLoader.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

routeLoader(app);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
