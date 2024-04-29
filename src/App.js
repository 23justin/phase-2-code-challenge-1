import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

function App() {
  // State for managing transactions
  const [transactions, setTransactions] = useState([]);
  // State for managing filtered transactions
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from db.json using fetch API
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]); // Update filtered transactions as well
  };

  // Function to filter transactions by description
  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bank of React</h1>
        {/* Transaction form component */}
        <TransactionForm addTransaction={addTransaction} />
        {/* Search bar input */}
        <input
          type="text"
          placeholder="Search transactions by description"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* Transaction table component */}
        <TransactionTable transactions={filteredTransactions} />
      </header>
    </div>
  );
}

export default App;
