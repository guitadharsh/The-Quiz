import express from "express";
import * as dotenv from "dotenv";
import MongoConnect from "./mongodb/config.js";
import router from "./router/index.js";
import cors from 'cors'
import session from "express-session";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: 'GET, POST, PUT, PATCH, DELETE',
    credentials: true
}))

// Configure express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
}));

// mongo db connection establishing
MongoConnect();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server Running on PORT no: ${PORT}`));
