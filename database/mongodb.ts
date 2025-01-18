import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export async function connectMongoDb() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI as string, {
      bufferCommands: false,
    });

    return conn;
  } catch (error) {
    console.log("Failed to connect to MongoDb:", error);
    throw new Error("Failed to connect to MongoDb.");
  }
}

export async function disconnectMongoDb() {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log("Failed to diconnect from MongoDb:", error);
    throw new Error("Failed to diconnect from MongoDb");
  }
}
