import AdminModel from "../Model/AdminAuth.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "all fields are required" });
  }

  const userAdmin = await AdminModel.findOne({ email: email });

  if (!userAdmin) {
    return res.status(401).json({ success: false, message: "admin not found" });
  }

  if (password !== userAdmin.password) {
    return res
      .status(404)
      .json({ success: false, message: "encorrect password" });
  }
  let updatedAdmin = userAdmin;

  if (!userAdmin.name || !userAdmin.dev_name || !userAdmin.phone_number) {
    console.log("First login detected__ adding default values...");
    updatedAdmin = await AdminModel.findOneAndUpdate(
      { email: email },
      {
        name: userAdmin.name,
        dev_name: userAdmin.dev_name,
        phone_number: userAdmin.phone_number,
      },
      { new: true }
    );
  }

  const token = jwt.sign({ id: updatedAdmin._id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

  res.cookie("login_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "login successfully",
    data: updatedAdmin,
  });
};

export const userData = async (req, res) => {
  const { userId } = req;

  try {
    const user = await AdminModel.find({ _id: userId });
    if (user) {
      req.userData = {};
    }
  } catch (error) {
    console.log(error);
  }
};
