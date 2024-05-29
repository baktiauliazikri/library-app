// controllers/transactionController.js
const Transaction = require('../models/transactionModels');

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTransactionById = async (req, res) => {
  const id = req.params.id;
  try {
    const transaction = await Transaction.getTransactionById(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTransaction = async (req, res) => {
  const { studentId, bookId, returnDate } = req.body;
  try {
    const newTransaction = await Transaction.createTransaction(studentId, bookId, returnDate);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const { studentId, bookId, returnDate } = req.body;
  try {
    const updatedTransaction = await Transaction.updateTransaction(id, studentId, bookId, returnDate);
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTransaction = await Transaction.deleteTransaction(id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(deletedTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};
