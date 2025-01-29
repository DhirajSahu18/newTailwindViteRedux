import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from './Routes/index.js'
dotenv.config();

import connectDB from "./db.js";
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;


import { notFound, errorHandler } from './Middleware/middle.js';
app.use(notFound);
app.use(errorHandler);


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Routes
app.use('/api', routes);