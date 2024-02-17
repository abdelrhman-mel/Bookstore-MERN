import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "../backend/routes/booksRoutes.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

//to read json body
app.use(express.json());

//using cors middleware
app.use(cors());

//connect to db
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

//route to save a book

//get all books
app.use("/api", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
