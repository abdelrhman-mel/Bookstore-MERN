import express from "express";
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";
const router = express.Router();

//carete new book
// POST /api/books
// with request body of title, author, publishYear
router.post("/books", createBook);

// get all the books
// GET /api/books
router.get("/books", getBooks);

// get a book with id
// GET /api/books/:id
router.get("/books/:id", getBook);

// update a book
// PATCH /api/books/:id
router.patch("/books/:id", updateBook);

// delete a book with id
// DELETE /api/books/:id
router.delete("/books/:id", deleteBook);

export default router;
