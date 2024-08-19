import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to database");
    });

    connection.on("error", (err) => {
      console.error("Database connection error:", err);
      process.exit();
    });

  } catch (e) {
    console.error("Error connecting to database", e.message);
  }
}
