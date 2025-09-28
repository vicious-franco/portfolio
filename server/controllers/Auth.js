import AdminModel from "../Model/AdminAuth.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req?.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }

    const userAdmin = await AdminModel.findOne({ email: email });

    if (!userAdmin) {
      return res
        .status(404)
        .json({ success: false, message: "admin not found" });
    }

    if (password !== userAdmin.password) {
      return res
        .status(404)
        .json({ success: false, message: "encorrect password" });
    }
    let updatedAdmin = userAdmin;

    const token = jwt.sign({ id: updatedAdmin._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    res.cookie("login_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/", //allow cookie to be sent in different endpoint urls
    });

    res.status(200).json({
      success: true,
      message: "login successfully",
      data: updatedAdmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "login error: " + error });
  }
};

export const userData = async (req, res) => {
  const { userId } = req;

  try {
    const user = await AdminModel.findOne({ _id: userId }).lean();
    const { email, phone_number, dev_name, fullName } = user;

    if (!user) {
      return res
        .status(500)
        .json({ success: false, message: "user unauthorized" });
    }
    return res
      .status(200)
      .json({ success: true, email, phone_number, dev_name, fullName });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("login-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "strict",
    path: "/",
  });
  return res.status(200).json({ success: true, message: "logged out" });
};

export const test=async(req,res)=>{
  return res.status(200).json({success:true,data:{name:"leon",age:21}})
}