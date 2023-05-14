import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionSummary from "./components/TransactionSummary";
import TransactionsContainer from "./components/Transactions/TransactionsContainer";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import { TransactionContextProvider } from "./store/transaction-context";
import "./App.css";

function App() {
  return (
    <>
      <TransactionContextProvider>
        <div className="App">
          <Header />
          <Balance />
          <TransactionSummary />
          <TransactionsContainer />
          <TransactionForm />
        </div>
      </TransactionContextProvider>
    </>
  );
}

export default App;
