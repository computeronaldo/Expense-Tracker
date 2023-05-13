import TransactionItems from "./TransactionItems";
import classes from "./TransactionsContainer.module.css";

const TransactionsContainer = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.push}>History</h3>
      <TransactionItems />
    </div>
  );
};

export default TransactionsContainer;
