import React from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = React.useContext(AppContext);

  return (
    <div className='alert alert-secondary'>
        <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;