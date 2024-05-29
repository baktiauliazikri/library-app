import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllBooks = async () => {
  try {
    const response = await api.get('/books');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching books:', error);
  }
};

export const getAllStudents = async () => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching students:', error);
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await api.get('/transactions');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching transactions:', error);
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating book:', error);
  }
};

export const createStudent = async (studentData) => {
  try {
    const response = await api.post('/students', studentData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating student:', error);
  }
};

export const createTransaction = async (transactionData) => {
  try {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating transaction:', error);
  }
};

export const updateBook = async (bookId, bookData) => {
  try {
    const response = await api.put(`/books/${bookId}`, bookData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating book:', error);
  }
};

export const updateStudent = async (studentId, studentData) => {
  try {
    const response = await api.put(`/students/${studentId}`, studentData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating student:', error);
  }
};

export const updateTransaction = async (transactionId, transactionData) => {
  try {
    const response = await api.put(`/transactions/${transactionId}`, transactionData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating transaction:', error);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await api.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting book:', error);
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const response = await api.delete(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting student:', error);
  }
};

export const deleteTransaction = async (transactionId) => {
  try {
    const response = await api.delete(`/transactions/${transactionId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting transaction:', error);
  }
};

export const getReport = async (criteria) => {
    try {
      const response = await api.get(`/report?criteria=${criteria}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching report:', error);
    }
  };


export default api;
