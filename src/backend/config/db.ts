import mongoose from "mongoose";

let isConnected = 0;

export async function connectDB() {
    if (isConnected) return;
    const conn = await mongoose.connect(process.env.MONGODB_URI as string, {
        dbName: process.env.MONGODB_DB || undefined,
    } as any);
    isConnected = conn.connections[0].readyState;
    if (process.env.NODE_ENV !== "production") console.log("MongoDB connected");
}
