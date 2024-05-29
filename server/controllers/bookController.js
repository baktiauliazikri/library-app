// controllers/bookController.js
const Book = require('../models/bookModels');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.getBookById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const newBook = await Book.createBook(title, author, year);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author, year } = req.body;
  try {
    const updatedBook = await Book.updateBook(id, title, author, year);
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await Book.deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
