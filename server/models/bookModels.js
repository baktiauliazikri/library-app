// models/bookModel.js
const pool = require('../db');

const getAllBooks = async () => {
  try {
    const books = await pool.query('SELECT * FROM books');
    return books.rows;
  } catch (error) {
    throw new Error('Error while fetching books');
  }
};

const getBookById = async (id) => {
  try {
    const book = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    return book.rows[0]; 
  } catch (error) {
    throw new Error('Error while fetching book by ID');
  }
};

const createBook = async (title, author, year) => {
  try {
    const newBook = await pool.query('INSERT INTO books (title, author, year) VALUES ($1, $2, $3) RETURNING *', [title, author, year]);
    return newBook.rows[0];
  } catch (error) {
    throw new Error('Error while creating book');
  }
};

const updateBook = async (id, title, author, year) => {
  try {
    const updatedBook = await pool.query('UPDATE books SET title = $1, author = $2, year = $3 WHERE id = $4 RETURNING *', [title, author, year, id]);
    return updatedBook.rows[0];
  } catch (error) {
    throw new Error('Error while updating book');
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    return deletedBook.rows[0];
  } catch (error) {
    throw new Error('Error while deleting book');
  }
};

module.exports = { 
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
