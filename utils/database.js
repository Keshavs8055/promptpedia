import mongoose from "mongoose";
let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Connected!");
  } else {
    try {
      await mongoose.connect(process.env.MONGOOSE_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connected = true;
    } catch (error) {
      console.log(error);
    }
  }
};
