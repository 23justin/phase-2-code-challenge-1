// TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs before adding transaction
    if (isNaN(parseFloat(amount)) || category.trim() === '') {
      alert('Please enter a valid amount and category.');
      return;
    }
    // Add transaction
    addTransaction({
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10), // Today's date in 'YYYY-MM-DD' format
      amount: parseFloat(amount),
      category,
    });
    // Clear input fields after adding transaction
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
