import mongoose from "mongoose";

export const initMongoConnection = async () => {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB,
  } = process.env;

  const mongoUri = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?ssl=true&replicaSet=atlas-46vzjn-shard-0&authSource=admin&appName=Cluster0`;

  try {
    await mongoose.connect(mongoUri);

    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};