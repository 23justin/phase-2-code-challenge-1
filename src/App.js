import React, { useState } from 'react';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

function App() {
  // Define transactions array directly within the component
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2024-04-29',
      description: 'Mortgage',
      amount: 150000,
      category: 'Housing'
    },
    {
      id: 2,
      date: '2024-04-28',
      description: 'School Fees',
      amount: 50000,
      category: 'Education'
    },
    {
      id: 3,
      date: '2024-04-27',
      description: 'Insurance',
      amount: 25000,
      category: 'Insurance'
    },
    {
      id: 4,
      date: '2024-04-26',
      description: 'Medical Bills',
      amount: 90000,
      category: 'Healthcare'
    },
    {
      id: 5,
      date: '2024-04-25',
      description: 'Food and Other Essentials',
      amount: 70000,
      category: 'Groceries'
    },
    {
      id: 6,
      date: '2024-04-24',
      description: 'Movie',
      amount: 5000,
      category: 'Entertainment'
    },
    {
      id: 7,
      date: '2024-04-23',
      description: 'Trip to Mombasa',
      amount: 100000,
      category: 'Travel'
    }
  ]);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>THE ROYAL BANK OF FLATIRON</h1>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionTable transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
