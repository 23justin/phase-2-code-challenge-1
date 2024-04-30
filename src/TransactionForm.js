import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs before adding transaction
    if (isNaN(parseFloat(amount)) || category.trim() === '' || date.trim() === '' || description.trim() === '') {
      alert('Please fill out all fields correctly.');
      return;
    }
    // Add transaction
    addTransaction({
      id: Date.now(),
      date: date,
      amount: parseFloat(amount),
      category: category,
      description: description
    });
    // Clear input fields after adding transaction
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
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
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
