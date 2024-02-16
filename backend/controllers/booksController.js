import { Book } from "../Models/bookModel.js";

const createBook = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!author || !title || !publishYear) {
      return res.status(400).send("Please fill in all fields");
    }
    const newBook = new Book({
      title,
      author,
      publishYear,
    });
    const book = await Book.create(newBook);
    res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updates = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookId, updates, {
      new: true,
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    await Book.findByIdAndDelete(bookId);

    res.status(200).send("Book deleted!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createBook, getBooks, getBook, updateBook, deleteBook };
