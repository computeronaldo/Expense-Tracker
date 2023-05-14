import Input from "../UI/Input";
import classes from "./TransactionForm.module.css";

const TransactionForm = (props) => {
  return (
    <>
      <h3 className={classes.box}>Add New Transaction</h3>
      <form className={classes.form}>
        <Input
          label="Title"
          input={{
            id: "title",
            type: "text",
          }}
        />
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "text",
          }}
        />
        <button>Add transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
