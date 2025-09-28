import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectDB.js";
import ProjectRouter from "./routes/projectRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRoute from "./routes/AuthRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors({ credentials: true, origin: `http://localhost:5173` }));
app.use(cookieParser());

app.use("/uploads", express.static("projectUploads"));
app.use(express.json());
app.use("/api/project/upload", ProjectRouter);
app.use("/api/portfolio", AuthRoute);

connectDB();

app.listen(PORT, () => console.log("server has started on port " + PORT));
