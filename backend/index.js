import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
