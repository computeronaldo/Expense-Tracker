import classes from "./TransactionItem.module.css";

const TransactionItem = (props) => {
  return (
    <li className={classes.display}>
      <span>{props.title}</span>
      <span>{props.amount}</span>
    </li>
  );
};

export default TransactionItem;
