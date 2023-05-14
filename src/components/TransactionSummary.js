import { useContext } from "react";
import TransactionContext from "../store/transaction-context";
import classes from "./TransactionSummary.module.css";

const TransactionSummary = (props) => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((transaction) => transaction.amount >= 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className={classes.summary}>
      <section>
        <h3>INCOME</h3>
        <p>${income}</p>
      </section>
      <section>
        <h3>EXPENSE</h3>
        <p>${expense}</p>
      </section>
    </div>
  );
};

export default TransactionSummary;
