import ProjectModal from "../Model/model";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "all fields are required" });
  }

  const userAdmin = await ProjectModal.find({ email });
  if (!userAdmin) {
    return res.status(404).json({ success: false, message: "admin not found" });
  }
  if (password !== userAdmin.password) {
    return res
      .status(404)
      .json({ success: false, message: "encorrect password" });
  }

  res.status(200).json({ success: true, message: "login successfully" });
};
