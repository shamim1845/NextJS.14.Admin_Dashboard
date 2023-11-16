import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.database_url);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
// NWYj8jVLbqs7FQUv;
// samimraj1845;
