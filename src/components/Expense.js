import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Expense = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

  return (
    <div className='alert alert-primary'>
        <span>Expense: ${totalExpenses}</span>
    </div>
  );
};

export default Expense;