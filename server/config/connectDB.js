import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONN_STRING);
    console.log(mongoose.connection.host);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
