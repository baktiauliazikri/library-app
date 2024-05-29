import React from 'react';
import BookList from './components/BookList';
import StudentList from './components/StudentList.js
import TransactionList from './components/TransactionList.js';

function App() {
  return (
    <div className="App">
      <h1>Library</h1>
      <div className="section">
        <h2>Books</h2>
        <BookList />
      </div>
      <div className="section">
        <h2>Students</h2>
        <StudentList />
      </div>
      <div className="section">
        <h2>Transactions</h2>
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
