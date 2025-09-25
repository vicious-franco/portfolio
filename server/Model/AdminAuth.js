import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", adminSchema, "adminAuth");
export default AdminModel;
