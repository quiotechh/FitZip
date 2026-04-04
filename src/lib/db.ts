import mongoose, { Connection } from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/fitzip";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

const cached: {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
} = global.mongoose ?? { conn: null, promise: null };

global.mongoose = cached;

async function dbConnect(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  const m = await cached.promise;
  cached.conn = m.connection;
  return cached.conn;
}

export default dbConnect;
