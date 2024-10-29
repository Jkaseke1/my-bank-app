import React, { createContext, useState } from 'react';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type, amount) => {
    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      date: new Date().toLocaleString()
    };
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <AccountContext.Provider value={{ 
      balance, 
      setBalance, 
      transactions, 
      addTransaction 
    }}>
      {children}
    </AccountContext.Provider>
  );
};
