import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Irakarama jean francois leon",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dev_name: {
      type: String,
      default: "Atlas dev",
    },
    phone_number: {
      type: String,
      default: "0787723139",
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", adminSchema, "adminAuth");
export default AdminModel;
