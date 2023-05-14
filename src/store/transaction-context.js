import React, { useReducer } from "react";

const TransactionContext = React.createContext({
  transactions: [],
  add: (transaction) => {},
});

const transactionReducer = (state, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newTransactions = state.transactions;
    newTransactions.push(action.transaction);

    return {
      transactions: newTransactions,
    };
  }

  return {
    transactions: [],
  };
};

export const TransactionContextProvider = (props) => {
  const [transactionsState, dispatchTransaction] = useReducer(
    transactionReducer,
    { transactions: [] }
  );

  const addTransaction = (transaction) => {
    dispatchTransaction({ type: "ADD_TRANSACTION", transaction: transaction });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: transactionsState.transactions,
        add: addTransaction,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
