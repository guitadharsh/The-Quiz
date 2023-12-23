import express from "express";
import * as dotenv from "dotenv";
import MongoConnect from "./mongodb/config.js";
import router from "./router/index.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// mongo db connection establishing
MongoConnect();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server Running on PORT no: ${PORT}`));
