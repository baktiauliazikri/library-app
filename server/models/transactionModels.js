// models/transactionModel.js
const pool = require('../db');

const getAllTransactions = async () => {
  try {
    const transactions = await pool.query('SELECT * FROM transactions');
    return transactions.rows;
  } catch (error) {
    throw new Error('Error while fetching transactions');
  }
};

const getTransactionById = async (id) => {
  try {
    const transaction = await pool.query('SELECT * FROM transactions WHERE id = $1', [id]);
    return transaction.rows[0];
  } catch (error) {
    throw new Error('Error while fetching transaction by ID');
  }
};

const createTransaction = async (studentId, bookId, returnDate) => {
  try {
    const newTransaction = await pool.query('INSERT INTO transactions (student_id, book_id, return_date) VALUES ($1, $2, $3) RETURNING *', [studentId, bookId, returnDate]);
    return newTransaction.rows[0];
  } catch (error) {
    throw new Error('Error while creating transaction');
  }
};

const updateTransaction = async (id, studentId, bookId, returnDate) => {
  try {
    const updatedTransaction = await pool.query('UPDATE transactions SET student_id = $1, book_id = $2, return_date = $3 WHERE id = $4 RETURNING *', [studentId, bookId, returnDate, id]);
    return updatedTransaction.rows[0];
  } catch (error) {
    throw new Error('Error while updating transaction');
  }
};

const deleteTransaction = async (id) => {
  try {
    const deletedTransaction = await pool.query('DELETE FROM transactions WHERE id = $1 RETURNING *', [id]);
    return deletedTransaction.rows[0];
  } catch (error) {
    throw new Error('Error while deleting transaction');
  }
};

module.exports = { 
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};
