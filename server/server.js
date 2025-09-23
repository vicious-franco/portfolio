import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectDB.js";
import ProjectRouter from "./routes/projectRoutes.js";
import AuthRoute from "./routes/AuthRouter.js";

const app = express();

//middleware
app.use("/uploads", express.static("projectUploads"));
app.use(express.json());
app.use("/api/project/upload", ProjectRouter);
app.use("/api/portfolio",AuthRoute)

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server has started on port " + PORT));
