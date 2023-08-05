import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

const options = {
  family: 4,
};

// Database connection
const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(mongoURI, options)
      .then(() => {
        console.log("Connected to MongoDB");
        resolve();
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        reject(err);
      });
  });
};

export default connectToMongo;
