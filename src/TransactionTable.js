import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td className={transaction.amount >= 0 ? 'income' : 'expense'}>
              {transaction.amount.toLocaleString('en-KE', {
                style: 'currency',
                currency: 'KES'
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
