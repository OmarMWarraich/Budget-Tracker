import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        {id: 1, name: 'Shopping', cost: 40},
        {id: 2, name: 'Holiday', cost: 400},
        {id: 3, name: 'Transportation', cost: 60},
        {id: 4, name: 'Fuel', cost: 70},
        {id: 5, name: 'Food', cost: 120},
    ];

  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <ExpenseItem key={expense.id}  id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
    </ul>
  );
};

export default ExpenseList;