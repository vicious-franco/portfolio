import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectDB.js";
import Router from "./routes/projectRoutes.js";

const app = express();

//middleware
app.use("/uploads", express.static("projectUploads"));
app.use(express.json());
app.use("/api/forms", Router);

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server has started on port " + PORT));
