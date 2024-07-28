import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blogging_nextjs")
    .then(() => console.log("MongoDB connect"))
    .catch((err) => console.log("Mongo err", err));
};

export default connectToDB;
