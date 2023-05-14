import { useContext } from "react";
import TransactionContext from "../../store/transaction-context";
import TransactionItem from "./TransactionItem";
import classes from "./TransactionItems.module.css";

const TransactionItems = (props) => {
  const { transactions } = useContext(TransactionContext);
  const items = transactions;

  const check = items.length;

  return (
    <ul className={classes.list}>
      {check === 0 && <p>No transactions to present.</p>}
      {items.map((item) => {
        return (
          <TransactionItem
            key={item.id}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default TransactionItems;
