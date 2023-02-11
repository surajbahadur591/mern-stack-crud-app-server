import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.use("/", Routes);
app.listen(PORT, () => {
  console.log("Server running on: ", PORT);
});
