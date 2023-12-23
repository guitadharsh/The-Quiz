import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();


async function MongoConnect() {
  try {
    const mongoLink = process.env.MONGO_URI
    await mongoose.connect(mongoLink)
    console.log('Mongo DB connected')
  }
  catch (err) {
    throw err
  }

}

export default MongoConnect